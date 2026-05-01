from flask import Flask, request, jsonify
import requests
import os
import firebase_admin
from firebase_admin import credentials, db
from dotenv import load_dotenv
from flask_cors import CORS
import re

load_dotenv()
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# 1. Get the absolute path to the directory of app.py
base_dir = os.path.abspath(os.path.dirname(__file__))
key_path = os.path.join(base_dir, 'solvesync-6f45a-22a5078e9fd7.json')

# Ensure this file is in your .gitignore file!
cred = credentials.Certificate("solvesync-6f45a-22a5078e9fd7.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://solvesync-6f45a-default-rtdb.firebaseio.com/'
})

app = Flask(__name__)
CORS(app)

# 🔐 ENV VARIABLES
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
TTS_API_KEY = os.getenv("TTS_API_KEY")

MODEL = "gemini-2.5-flash"

GEMINI_URL = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"
TTS_URL = f"https://texttospeech.googleapis.com/v1/text:synthesize?key={TTS_API_KEY}"

@app.route('/api/active-problem', methods=['GET'])
def get_active_problem():
    try:
        # Fetch data securely in Python
        ref = db.reference('activeProblem')
        problem_data = ref.get()
        
        return jsonify({"problem": problem_data}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 🧠 GEMINI ENDPOINT
@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()
    problem = data.get("problem")

    prompt = f"""Act as a 4th-8th grade math tutor. Solve this problem: "{problem}". 
Break it into exactly as many steps as needed for a student to understand. 
Return ONLY a JSON array of strings like this: ["Step 1: ...", "Step 2: ..."] 
Do not include any other text or markdown."""

    response = requests.post(
        GEMINI_URL,
        headers={
            "Content-Type": "application/json",
            "x-goog-api-key": GEMINI_API_KEY
        },
        json={
            "contents": [
                {
                    "parts": [
                        {"text": prompt}
                    ]
                }
            ]
        }
    )

    return jsonify(response.json())


# 🔊 TEXT-TO-SPEECH ENDPOINT
@app.route("/tts", methods=["POST"])
def tts():
    data = request.get_json()
    text = data.get("text", "")

    # 🔧 Clean text (same logic as your JS)
    cleaned_text = text.lower()
    cleaned_text = re.sub(r"[`'\"]", "", cleaned_text)
    cleaned_text = re.sub(r"\*", ". ", cleaned_text)

    response = requests.post(
        TTS_URL,
        headers={
            "Content-Type": "application/json"
        },
        json={
            "input": {"text": cleaned_text},
            "voice": {
                "languageCode": "en-US",
                "name": "en-US-Journey-F"
            },
            "audioConfig": {
                "audioEncoding": "MP3"
            }
        }
    )

    return jsonify(response.json())


if __name__ == "__main__":
    app.run(port=5000, debug=True)
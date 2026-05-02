from flask import Flask, request, jsonify
import requests
import os
import firebase_admin
from firebase_admin import credentials, db
from dotenv import load_dotenv
from flask_cors import CORS
import json
import re

load_dotenv()
app = Flask(__name__)

# This line is needed to allow your GitHub Pages site to talk to Render
CORS(app, resources={r"/*": {"origins": "https://jdbostonbu-ops.github.io"}})

# Using the library will immediately make VS Code recognize it as used
data = {"status": "healthy"}
json_string = json.dumps(data)

print(json_string)

# --- CLOUD / LOCAL ENVIRONMENT INITIALIZATION ---
try:
    # 1. Attempt to run using individual Render environment variables
    if "FIREBASE_TYPE" in os.environ:
        cred_dict = {
            "type": os.environ.get("FIREBASE_TYPE"),
            "project_id": os.environ.get("FIREBASE_PROJECT_ID"),
            "private_key_id": os.environ.get("FIREBASE_PRIVATE_KEY_ID"),
            "private_key": os.environ.get("FIREBASE_PRIVATE_KEY", "").replace('\\n', '\n'),
            "client_email": os.environ.get("FIREBASE_CLIENT_EMAIL"),
            "client_id": os.environ.get("FIREBASE_CLIENT_ID"),
            "auth_uri": os.environ.get("FIREBASE_AUTH_URI", "https://accounts.google.com/o/oauth2/auth"),
            "token_uri": os.environ.get("FIREBASE_TOKEN_URI", "https://oauth2.googleapis.com/token"),
            "auth_provider_x509_cert_url": os.environ.get("FIREBASE_AUTH_PROVIDER_CERT_URL", "https://www.googleapis.com/oauth2/v1/certs"),
            "client_x509_cert_url": os.environ.get("FIREBASE_CLIENT_CERT_URL"),
            "universe_domain": os.environ.get("FIREBASE_UNIVERSE_DOMAIN", "googleapis.com")
        }
        cred = credentials.Certificate(cred_dict)
    else:
        raise FileNotFoundError("No cloud environment variables found, falling back to local file.")

except Exception as e:
    # 2. Local Fallback Configuration (reads your local JSON file)
    import os
    base_dir = os.path.abspath(os.path.dirname(__file__))
    key_path = os.path.join(base_dir, 'solvesync-6f45a-22a5078e9fd7.json')
    cred = credentials.Certificate(key_path)

# Initialize Firebase App
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://solvesync-6f45a-default-rtdb.firebaseio.com/'
})

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
@app.route("/generate", methods=["POST", "GET"])
def generate():
    data = request.get_json()

    if not data or "problem" not in data:
        return jsonify({"error": "No problem provided"}), 400
    problem = data.get("problem")

    prompt = f"""Act as a 4th-8th grade math tutor. Solve this problem: "{problem}". 
Break it into exactly as many steps as needed for a student to understand. 
Return ONLY a JSON array of strings like this: ["Step 1: ...", "Step 2: ..."] 
Do not include any other text or markdown."""

    try:
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
        
        # Return the response directly
        return jsonify(response.json())
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 🔊 TEXT-TO-SPEECH ENDPOINT
@app.route("/tts", methods=["POST"])
def tts():
    data = request.get_json()
    text = data.get("text", "")

    # 🔧 Clean text 
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

# Define your route
@app.route("/")
def index():
    return jsonify({"status": "healthy", "message": "Solvesync server is up and running!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
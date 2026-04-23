export async function playMathAnswer(solutionText) {
  const API_KEY = import.meta.env.VITE_GOOGLE_TTS_API_KEY; 
  const url = `https://googleapis.com/v1/text:synthesize?key=${API_KEY}`;

  const requestBody = {
    input: { text: solutionText },
    voice: { languageCode: 'en-US', name: 'en-US-Neural2-F' }, // High-quality voice
    audioConfig: { audioEncoding: 'MP3' },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    
    // Convert the base64 string from Google into a playable sound
    const audioBlob = b64toBlob(data.audioContent, 'audio/mp3');
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    
    console.log("🔊 SolveSync is reading...");
    await audio.play();

  } catch (error) {
    console.error("TTS Error:", error);
  }
}

// Helper function to handle the audio data
function b64toBlob(b64Data, contentType) {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];
  for (let i = 0; i < byteCharacters.length; i++) {
    byteArrays.push(byteCharacters.charCodeAt(i));
  }
  return new Blob([new Uint8Array(byteArrays)], { type: contentType });
}


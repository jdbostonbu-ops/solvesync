export async function playMathAnswer(solutionText) {
  // Define the request body to be sent to your backend
  const requestBody = {
    text: solutionText,
    voice: { languageCode: 'en-US', name: 'en-US-Neural2-F' },
    audioConfig: { audioEncoding: 'MP3' },
  };

  try {
    // Call your local or deployed Flask backend instead of Google directly
    const response = await fetch('/api/synthesize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    // Convert the base64 string from Google (via Flask) into a playable sound
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

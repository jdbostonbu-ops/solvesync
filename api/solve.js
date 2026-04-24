// api/solve.js
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { prompt } = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const apiKey = process.env.GEMINI_API_KEY;  // This stays secret on Vercel
  const MODEL = "gemini-1.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
      try {
    const response = await fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Act as a 4th-8th grade math tutor. Solve this problem: "${problemText}". 
                        Break it into exactly as many steps as needed for a student to understand. 
                        Return ONLY a JSON array of strings like this: ["Step 1: ...", "Step 2: ..."] 
                        Do not include any other text or markdown.`

                    }]
                }]
            })
        });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "AI communication failed" });
  }
  };

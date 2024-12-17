const axios = require('axios');

export default async (req, res) => {
  const { prompt } = req.body;  // Get user input from the request body
  
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    
    // Return the response from OpenAI
    res.status(200).json({ output: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ChatGPT Prompt Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f4f4f9;
    }
    h1 {
      text-align: center;
    }
    #responseOutput {
      background-color: #f8f8f8;
      padding: 10px;
      border: 1px solid #ccc;
      margin-top: 20px;
      white-space: pre-wrap;
    }
    textarea {
      width: 100%;
      height: 100px;
    }
  </style>
</head>
<body>
  <h1>Ask ChatGPT</h1>
  <p>Enter a short text to append to a predefined prompt, and get a response from ChatGPT!</p>
  
  <textarea id="userInput" placeholder="Enter your short text here"></textarea><br><br>
  <button id="submitPrompt">Submit</button>
  
  <h2>ChatGPT Response:</h2>
  <pre id="responseOutput"></pre>

  <script>
    const predefinedPrompt = "The user said: ";

    document.getElementById('submitPrompt').addEventListener('click', async () => {
      const userInput = document.getElementById('userInput').value.trim();
      
      if (!userInput) {
        alert("Please enter some text.");
        return;
      }

      const fullPrompt = predefinedPrompt + userInput;

      try {
        // Send the concatenated prompt to the Vercel serverless function
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: fullPrompt }),
        });

        if (!response.ok) {
          throw new Error("Error with the response from the server.");
        }

        const data = await response.json();
        document.getElementById('responseOutput').textContent = data.output;
      } catch (error) {
        console.error("Error:", error);
        document.getElementById('responseOutput').textContent = "Sorry, something went wrong!";
      }
    });
  </script>
</body>
</html>

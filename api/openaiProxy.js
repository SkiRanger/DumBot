// api/openaiProxy.js
const axios = require('axios');
require('dotenv').config();  // to access environment variables

module.exports = async (req, res) => {
  const { prompt } = req.body;  // Get the prompt from the frontend
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;  // Get the API key from environment variables

  try {
    // Make a request to OpenAI API
    const response = await axios.post('https://api.openai.com/v1/completions', {
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 100,
    }, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    // Send the response back to the frontend
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch from OpenAI' });
  }
};

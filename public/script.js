document.getElementById('submitButton').addEventListener('click', async () => {
  const userInput = document.getElementById('userInput').value;

  if (!userInput) {
    alert('Please enter some text.');
    return;
  }

  const responseOutput = document.getElementById('responseOutput');
  responseOutput.textContent = 'Loading...';

  try {
    const response = await fetch('/api/openaiProxy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: userInput,
      }),
    });

    const data = await response.json();
    responseOutput.textContent = data.choices[0].text.trim();
  } catch (error) {
    responseOutput.textContent = 'Error: ' + error.message;
  }
});

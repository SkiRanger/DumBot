<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Question Input Interface</title>
    <style>
        /* Basic styling for the UI */
        body {
            font-family: Arial, sans-serif;
            background-color: #F5EBE0;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            text-align: center;
            background: #F8EDEB;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            width: 90%;
            max-width: 500px;
        }

        h1 {
            margin-bottom: 20px;
            color: #333;
        }

        input {
            width: 80%;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-bottom: 15px;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            background-color: #F1CEBE;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #FFBAD9;
        }

        .response {
            margin-top: 20px;
            font-size: 18px;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Ask Your Question</h1>
        <!-- Input Field -->
        <input type="text" id="questionInput" placeholder="ur question here" />
        <br>
        <!-- Submit Button -->
        <button onclick="submitQuestion()">submit</button>
        <!-- Response Area -->
        <div class="response" id="responseText"></div>
    </div>

    <script>
        // JavaScript to handle input and display the question
        function submitQuestion() {
            const inputField = document.getElementById("questionInput");
            const responseDiv = document.getElementById("responseText");

            const question = inputField.value.trim(); // Get user input and trim whitespace

            if (question) {
                responseDiv.textContent = `u asked: "${question}"`; // Display the question
            } else {
                alert("please enter a valid question."); // Show an alert if input is empty
            }
        }
    </script>
</body>
</html>

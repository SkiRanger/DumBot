<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Question Input Interface</title>
    <style>
        /* Basic styling for the UI */
        body {
            font-family: Arial, sans-serif;
            background-color: #FFDAB9;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            text-align: center;
            background: #FFB07C;
            padding: 20px;
            border-radius: 0px;
            width: 90%;
            max-width: 1000px;
            height: 70%;
            max-height: 778px;
        }

        h1 {
            margin-bottom: 20px;
            color: #FF7F50;
        }

        input {
            width: 80%;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 0px;
            margin-bottom: 15px;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            background-color: #FF9A76;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #FFCBA4;
        }

        .response {
            margin-top: 20px;
            font-size: 18px;
            color: #FFFFFF;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>DumBot - Powered by AI (Artificial Idiocy)</h1>
        <!-- Input Field -->
        <input type="text" id="questionInput" placeholder="Your question here" />
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
                import OpenAI from "openai";
                const openai = new OpenAI();
                
                const completion = await openai.chat.completions.create({
                    model: "gpt-4o",
                    messages: [
                        { role: "system", content: "You are a helpful assistant." },
                        {
                            role: "user",
                            content: "Write a haiku about recursion in programming.",
                        },
                    ],
                });

                responseDiv.textContent = 'This has executed, but not piped through the model';
                //responseDiv.textContent = console.log(completion.choices[0].message);
            } else {
                alert("please enter a valid question."); // Show an alert if input is empty
            }
        }
    </script>
</body>
</html>

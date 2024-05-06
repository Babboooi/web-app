 const Questions = [
   { Question: "What is the capital of France?", options: ["Paris", "Berlin"], answer: 0 },
   { Question: "What is the largest planet in our solar system?", options: ["Jupiter", "Saturn"], answer: 0 },
   { Question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens"], answer: 0 },
   // Add more questions as needed
];

function generateQuestion() {
   const randomIndex = Math.floor(Math.random() * questions.length);
   const questionObject = questions[randomIndex];
   document.getElementById("question").innerHTML = questionObject.question;
   const optionButtons = document.getElementsByClassName("option");
   for (let i = 0; i < optionButtons.length; i++) {
       optionButtons[i].innerHTML = questionObject.options[i];
   }
   document.getElementById("result").innerHTML = ""; // Clear previous result
}

function checkAnswer(button) {
   const selectedOption = button.innerHTML;
   const currentQuestion = document.getElementById("question").innerHTML;
   const questionObject = questions.find(q => q.question === currentQuestion);

   if (!questionObject) return; // Question not found

   if (selectedOption === questionObject.options[questionObject.answer]) {
       document.getElementById("result").innerHTML = "Correct!";
   } else {
       document.getElementById("result").innerHTML = "Incorrect!";
   }
}

window.onload = generateQuestion;

const questions = {
    "Trivia": [
        "What is the capital of France?",
        "Who painted the Mona Lisa?",
        "What is the tallest mountain in the world?",
        "Which planet is known as the Red Planet?",
        "What year did the Titanic sink?"
    ],
    "Math": [
        "What is 5 multiplied by 9?",
        "What is the square root of 64?",
        "What is the value of pi (π) to two decimal places?",
        "What is the sum of angles in a triangle?",
        "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, ...?"
    ],
    "Science": [
        "What is the chemical symbol for water?",
        "What is the powerhouse of the cell?",
        "Who developed the theory of relativity?",
        "What is the smallest bone in the human body?",
        "What is the process by which plants make their own food called?"
    ]
};

const generateBtn = document.getElementById('generate-btn');
const questionDisplay = document.getElementById('question');

function generateRandomQuestion() {
    const categories = Object.keys(questions);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const categoryQuestions = questions[randomCategory];
    const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
    questionDisplay.textContent = randomQuestion;
}

generateBtn.addEventListener('click', generateRandomQuestion);

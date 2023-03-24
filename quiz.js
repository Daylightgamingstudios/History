// Define the quiz questions and answers
const quizData = [
  {
    question: "What is the capital of Afghanistan?",
    answer: "a"
  },
  {
    question: "When did Afghanistan become independent?",
    answer: "a"
  },
  {
  question: "What was the Name of the Orginization that took over Afghanistans government?",
  
   answer: "c"
  
  }
];

// Function to check the user's answers
function checkAnswers() {
  const form = document.getElementById("quiz-form");
  let score = 0;

  for (let i = 0; i < quizData.length; i++) {
    const answer = form.elements["q" + (i + 1)].value;
    if (answer === quizData[i].answer) {
      score++;
    }
  }

  const feedback = document.getElementById("quiz-feedback");
  feedback.innerHTML = "You scored " + score + " out of " + quizData.length;
}










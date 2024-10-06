function checkAnswer() {
  const correctAnswer = "4";
  let userAnswer = document.querySelector('input[name="quiz"]:checked');

  userAnswer = userAnswer.value;

  const feedback = document.getElementById("feedback");

  if (userAnswer) {
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "That's incorrect. Try again!";
      feedback.style.color = "red";
    }
  } else {
    feedback.textContent = "Please select an answer.";
    feedback.style.color = "orange";
  }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);

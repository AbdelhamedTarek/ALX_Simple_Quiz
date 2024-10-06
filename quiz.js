function checkAnswer() {
  // Identify the correct answer
  const correctAnswer = "4";

  // Retrieve the user's answer
  let userAnswer = document.querySelector('input[name="quiz"]:checked');

  userAnswer = userAnswer.value;

  // Get the feedback element
  const feedback = document.getElementById("feedback");

  // Check if the user selected an answer
  if (userAnswer) {
    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done."; // Correct answer feedback
      feedback.style.color = "green"; // Change text color to green
    } else {
      feedback.textContent = "That's incorrect. Try again!"; // Incorrect answer feedback
      feedback.style.color = "red"; // Change text color to red
    }
  } else {
    // If no answer was selected
    feedback.textContent = "Please select an answer."; // Prompt user to select an answer
    feedback.style.color = "orange"; // Change text color to orange
  }
}

// Add an event listener to the Submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

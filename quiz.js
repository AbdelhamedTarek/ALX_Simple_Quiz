document
  .getElementById("submit-answer")
  .addEventListener("click", function checkAnswer() {
    // Get all radio buttons with the name 'quiz'
    const choices = document.getElementsByName("quiz");
    let correctAnswer = 4;

    // Loop through the choices to find the selected one
    for (const choice of choices) {
      if (choice.checked) {
        correctAnswer = choice.value;
        break;
      }
    }

    // Get the feedback paragraph element
    const feedback = document.getElementById("feedback");

    // Check if an answer was selected
    if (correctAnswer) {
      // Check the answer and provide feedback
      if (correctAnswer === "4") {
        feedback.textContent = "Correct! 2 + 2 is 4.";
        feedback.style.color = "green";
      } else {
        feedback.textContent = "Incorrect. Please try again.";
        feedback.style.color = "red";
      }
    } else {
      feedback.textContent = "Please select an answer.";
      feedback.style.color = "orange";
    }
  });

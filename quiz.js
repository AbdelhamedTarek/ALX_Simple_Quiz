// document.getElementById("submit-answer").addEventListener(
//   "click",
//   function checkAnswer() {
//     // Get all radio buttons with the name 'quiz'
//     const userAnswer = document.getElementsByName("quiz");
//     let correctAnswer = 4;

//     // Loop through the choices to find the selected one
//     for (const choice of userAnswer) {
//       if (choice.checked) {
//         correctAnswer = choice.value;
//         break;
//       }
//     }

//     // Get the feedback paragraph element
//     const feedback = document.getElementById("feedback");

//     // Check if an answer was selected
//     if (correctAnswer === "userAnswer") {
//       feedback.textContent = "Correct! 2 + 2 is 4.";
//       feedback.style.color = "green";
//     } else {
//       feedback.textContent = "Incorrect. Please try again.";
//       feedback.style.color = "red";
//     }
//   }
//   //else {
//   //   feedback.textContent = "Please select an answer.";
//   //   feedback.style.color = "orange";
//   // }
// );

function checkAnswer() {
  // Identify the correct answer
  const correctAnswer = "4";

  // Retrieve the user’s answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked');

  // Check if the user selected an answer
  if (userAnswer) {
    // const selectedValue = userAnswer.value;

    // Compare the user’s answer with the correct answer
    const feedback = document.getElementById("feedback");
    if (userAnswer.value === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "That's incorrect. Try again!";
      feedback.style.color = "red";
    }
  } else {
    // If no answer was selected
    const feedback = document.getElementById("feedback");
    feedback.textContent = "Please select an answer.";
    feedback.style.color = "orange";
  }
}

// Add an event listener to the Submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

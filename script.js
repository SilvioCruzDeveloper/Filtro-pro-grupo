function checkAnswers() {
  var score = 0;

  var q1 = document.querySelector('input[name="q1"]:checked');
  var q2 = document.querySelector('input[name="q2"]:checked');
  var q3 = document.querySelector('input[name="q3"]:checked');
  var q4 = document.querySelector('input[name="q4"]:checked');
  var q5 = document.querySelector('input[name="q5"]:checked');
  var q6 = document.querySelector('input[name="q6"]:checked');
  var q7 = document.querySelector('input[name="q7"]:checked');

  if (q1 && q2 && q3 && q4 && q5 && q6 && q7) {
    if (q1.value === "b") score++;
    if (q2.value === "a") score++;
    if (q3.value === "b") score++;
    if (q4.value === "b") score++;
    if (q5.value === "a") score++;
    if (q6.value === "b") score++;
    if (q7.value === "b") score++;

    displayResult(score);
  } else {
    alert("Por favor, responda todas as perguntas.");
  }
}
var tentative = 0;
function displayResult(score) {
  
  var resultContainer = document.getElementById("result");
  var linkContainer = document.getElementById("link-container");
  var link = document.getElementById("link");

  resultContainer.innerHTML = "Você acertou " + score + " de 7 perguntas.";

  if (score === 7) {
    link.style.display = "inline";
  }else{
    tentative ++;
  }
if(tentative === 3) {
    window.location.href = "red.html";
}
  linkContainer.style.display = "block";
}

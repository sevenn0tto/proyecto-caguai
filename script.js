 let I = 0, E = 0;
  let S = 0, N = 0;
  let T = 0, F = 0;
  let J = 0, P = 0;

  let respuestas = 0;

  function answer(question, option) {
    let qDiv = document.querySelectorAll(".question")[question-1];
    
    if (!qDiv.classList.contains("answered")) {
        respuestas++;
        qDiv.classList.add("answered");     
        }
    
    if (question <= 3) option === "A" ? E++ : I++;
    if (question >= 4 && question <= 6) option === "A" ? S++ : N++;
    if (question >= 7 && question <= 9) option === "A" ? T++ : F++;
    if (question >= 10) option === "A" ? J++ : P++;

    if (respuestas ===12){
        document.getElementById("finalButton").style.display = "block";
    }
}

  

  function mostraruwu() {
    let result = "";
    result += (I > E) ? "I" : "E";
    result += (N > S) ? "N" : "S";
    result += (F > T) ? "F" : "T";
    result += (P > J) ? "P" : "J";

    document.getElementById("result").innerText =
      "Tu tipo de personalidad es: " + result;
  }
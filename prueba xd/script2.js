let I = 0, E = 0;
let S = 0, N = 0;
let T = 0, F = 0;
let J = 0, P = 0;

let respuestas = 0;

function answer(question, option) {
    let qDiv = document.querySelectorAll(".question")[question - 1];
    
    // 1. VERIFICAR: Solo si la pregunta NO ha sido respondida antes.
    if (!qDiv.classList.contains("answered")) {
        
        // 2. LÓGICA DE CONTEO DE PERSONALIDAD (SEGURO: solo se ejecuta una vez)
        if (question <= 3) option === "A" ? E++ : I++;
        else if (question >= 4 && question <= 6) option === "A" ? S++ : N++;
        else if (question >= 7 && question <= 9) option === "A" ? T++ : F++;
        else if (question >= 10) option === "A" ? J++ : P++;

        // 3. Marcar como respondida e incrementar el contador total
        respuestas++;
        qDiv.classList.add("answered");

        // 4. LÓGICA DEL BOTÓN (Se ejecuta inmediatamente después de la última respuesta)
        if (respuestas === 12) {
            document.getElementById("finalButton").style.display = "block";
        }
    }
}

function mostraruwu() {
  let result = "";
  result += (I > E) ? "I" : "E";
  result += (N > S) ? "N" : "S";
  result += (F > T) ? "F" : "T";
  result += (P > J) ? "P" : "J";

  document.getElementById("result").innerText = "Tu tipo de personalidad es: " + result;
}

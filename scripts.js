let a = 0;
let b = 0;
let c = 0;

function calculate() {
  a = parseFloat(document.getElementById("n1").value);
  b = parseFloat(document.getElementById("n2").value);

  let operand = document.getElementById("listaOperazioni").value;
  if (Number.isNaN(a) || Number.isNaN(b)) {
    alert("inserire valori corretti");
    document.getElementById("risultato").style.backgroundColor = "red";
    document.getElementById("risultato").style.color = "black";
  } else {
    if (operand == "+") {
      c = a + b;
      document.getElementById("risultato").style.backgroundColor = "lightgreen";
    } else if (operand == "-") {
      c = a - b;
      document.getElementById("risultato").style.backgroundColor = "lightgreen";
    } else if (operand == "*") {
      c = a * b;
      document.getElementById("risultato").style.backgroundColor = "lightgreen";
    } else if (operand == "/") {
      if (b != 0) {
        c = a / b;
        document.getElementById("risultato").style.backgroundColor =
          "lightgreen";
      } else {
        alert("divisione per 0, cambia il numero.");
        document.getElementById("risultato").style.backgroundColor = "red";
        document.getElementById("risultato").style.color = "black";
      }
    }
  }

  document.getElementById("risultato").value = c;
}

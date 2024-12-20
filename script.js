document.getElementById("cal-btn").addEventListener("click", Calculate);

function Calculate() {
    // input
    let num1 = Number(document.getElementById("1").value);
    let num2 = Number(document.getElementById("2").value);
    let num3 = Number(document.getElementById("3").value);
    let num4 = Number(document.getElementById("4").value);
    let num5 = Number(document.getElementById("5").value);

    // process
    var answer = (num1 + num2 + num3 + num4 + num5) / 5;

    // output
    document.getElementById("answer").innerHTML = answer;
}
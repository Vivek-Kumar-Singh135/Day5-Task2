function getNumber(num) {
    document.getElementById("exp").innerText += num;

}

function getOperator(op) {
    document.getElementById("exp").innerText += op;
}

function evalAns() {

    /*if (str[1] == '+') {
        var num = parseInt(str[0]) + parseInt(str[2]);
        document.getElementById("exp").innerText = num;
    } else if (str[1] == '-') {
        var num = parseInt(str[0]) - parseInt(str[2]);
        document.getElementById("exp").innerText = num;
    } else if (str[1] == '*') {
        var num = parseInt(str[0]) * parseInt(str[2]);
        document.getElementById("exp").innerText = num;
    } else if (str[1] == '/') {
        var num = parseFloat(str[0]) / parseFloat(str[2]);
        document.getElementById("exp").innerText = num.toFixed(6);
    } */
    var str = document.getElementById("exp").innerText;
    var result = eval(str);
    document.getElementById("exp").innerText = result;
}

function clearAll() {
    document.getElementById("exp").innerText = "";
    str = "";
}
let userInput = prompt("Введите число:");
let number = Number(userInput); 
if (!isNaN(number)) { 
    if (number > 0) {
        alert("1");
    } else if (number < 0) {
        alert("-1");
    } else {
        alert("0");
    }
} else {
    alert("ЕРРОР");
}

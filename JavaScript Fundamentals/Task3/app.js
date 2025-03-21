const a = parseInt(prompt("a="));
const b = parseInt(prompt("b="));

let sumFor = 0;
let sumWhile = 0;
let sumDoWhile = 0;
// for
for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
        sumFor += i;
    }
}
// while
let i = a;
while (i <= b) {
    if (i % 2 === 0) {
        sumWhile += i;
    }
    i++;
}
// do  while
i = a;
do {
    if (i % 2 === 0) {
        sumDoWhile += i;
    }
    i++;
} while (i <= b);

console.log("Сумма чётных чисел с использованием цикла for:", sumFor);
console.log("Сумма чётных чисел с использованием цикла while:", sumWhile);
console.log("Сумма чётных чисел с использованием цикла do...while:", sumDoWhile);

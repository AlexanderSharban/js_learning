let correctUsername = "Admin"; 
let correctPassword = "Admin123"; 

let username = prompt("Имя:");
let password = prompt("Пароль:");

if (username === "" || password === "") {
    console.log("Validation Error");
} else if (username === correctUsername && password === correctPassword) {
    console.log(`Hello ${username}`);
} else {

    if (username !== correctUsername) {
        console.log("Неверное имя. Правильное имя: Admin.");
    }

    if (password !== correctPassword) {
        console.log("Неверный пароль. Правильный пароль: Admin123 👍.");
    }
}

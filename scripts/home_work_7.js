"use strict";

// HOMEWORK #11

let yearOfBirth = +prompt("Введите год Вашего рождения");

if (yearOfBirth > 2020 || yearOfBirth < 1920 || isNaN(yearOfBirth) || yearOfBirth.length < 4
) {
    alert("Жаль, что Вы не захотели ввести год Вашего рождения");
    yearOfBirth = "Нет данных";
}

let city = prompt("Введите город Вашего проживания");

switch (city) {
    case "Киев":
    case "киев":
    case "Київ":
        city = "Ты живешь в столице Украины";
        break;
    case "Москва":
    case "москва":
        city = "Русский военный корабль, иди на*уй";
        break;
    case "Минск":
    case "минск":
        city = "Ты живешь в столице Белоруссии";
        break;

    case null:
        alert("Жаль, что Вы не захотели ввести город Вашего проживания");
        city = "Нет данных";
        break;

    default:
        city = `Ты живешь в городе ${city}`;
}

let sport = prompt("Введите Ваш любимый вид спорта");

switch (sport) {
    case "баскетбол":
    case "Баскетбол":
        sport = "Круто! Хочешь стать Майклом Джорданом?";
        break;

    case "футбол":
    case "Футбол":
        sport = "Круто! Хочешь стать Пеле?";
        break;

    case "бокс":
    case "Бокс":
        sport = "Круто! Хочешь стать Майклом Тайсоном?";
        break;

    case null:
        alert("Жаль, что Вы не захотели ввести Ваш любимый вид спорта");
        sport = "Нет данных";
        break;

    default:
        sport = `Круто, успехов в таком спорте, как ${sport}`;
}
if (yearOfBirth === "Нет данных" && city === "Нет данных" && sport === "Нет данных") {
    alert("Жаль, но Вы не ввели никаких данных");
}
else {
    alert(`${yearOfBirth} \n ${city} \n ${sport}`)
}
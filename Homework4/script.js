function userPortrait() {
    let yearOfBirth = +prompt("Введіть свій рік народження: ")
    let city = prompt("В якому місті ти живеш: ")
    let favoriteSport = prompt("Улюблений вид спорту: ", "Волейбол")

    let userCity;

    if (city == "Київ") {
        userCity = "Ти живеш у столиці України" 
    } else if (city == "Вашингтон") {
        userCity = "Ти живеш у столиці США"
    } else if (city == "Лондон") {
        userCity = "Ти живеш у столиці Англії"
    } else if (city == null || undefined) {
        userCity = "Шкода, що Ви не захотіли ввести своє місто"
    } else {
        userCity = `Ти живеш у іншому місті ${city}`
    } 

    let userSport;

    if (favoriteSport == "Волейбол") {
        userSport = "Круто! Хочеш стати Олегом Плотницьким?"
    } else if (favoriteSport == "Футбол") {
        userSport = "Круто! Хочеш стати Леонелем Мессі?"
    } else if (favoriteSport == "Баскетбол") {
        userSport = "Круто! Хочеш стати Майклом Джорданом?"
    } else if (favoriteSport == null || undefined) {
        userSport = "Шкода, що Ви не захотіли ввести свій улюблений спорт"
    } else {
        userSport = "Круто! Будеш хорошим спортсменом"
    }

    let userAge;

    if (yearOfBirth) {
        userAge = `Ваш вік ${2023 - yearOfBirth}`
    } else {
        userAge = "Шкода, що Ви не захотіли ввести свій вік"
    }

    alert(`${userAge.trim()}. ${userCity.trim()}. ${userSport.trim()}`)
}
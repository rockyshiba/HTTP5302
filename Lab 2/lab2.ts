//enums
enum months{
    Janvier,
    Fevrier,
    Mars,
    Avril,
    Mai,
    June,
    Julliet,
    Aout,
    Septembre,
    Octobre,
    Novembre,
    Decembre
}

enum days{
    Dimanche,
    Lundi,
    Mardi,
    Mecredi,
    Jeudi,
    Vendredi,
    Samedi
}

console.log("Months enum:");
console.log(months);
console.log('January: ' + months.January);
console.log('Month 1: ' + months[1]);

//html elements
let pTodayDate = document.getElementById("p--today-date");
let buttonBirthday = document.getElementById("button--birthday");
let inputDatePicker = document.getElementById("input--date-picker");
let pBirthdayMessage = document.getElementById("p--birthday-message");

//Today's date
let today : Date = new Date();
console.log(today);

//today's month
console.log(today.getMonth());
let todayMonth : string = months[today.getMonth()];

//today's day of week
console.log(today.getDay());
let todayDayOfWeek : string = days[today.getDay()];

//today's day of month
console.log(today.getDate());

//today's year
console.log(today.getFullYear());

//display today's date to page
pTodayDate.innerHTML = `Aujour d'hui c'est ${ todayDayOfWeek }, le ${ todayMonth } de ${ today.getDate() }, ${ today.getFullYear() } annee`;


///Part 2
let userBirthday : string;

//button functionality
buttonBirthday.onclick = function(){

    //assign userBrithday value to input value
    userBirthday = inputDatePicker.value;

    console.log(userBirthday);

    let userBirthdayDate : Date = new Date(userBirthday + " GMT-0400");
    console.log(userBirthdayDate);

    pBirthdayMessage.innerHTML = constructDateString(userBirthdayDate);
}


function constructDateString(inputDate : Date) : string{
    //return 'Happy Birthday' if the user's birthday is today
    if( (inputDate.getMonth() === today.getMonth()) && (inputDate.getDate() === today.getDate()) ){
        return `Happy birthday!`;
    }

    //return the date of the birthday of the current year
    let currentYearBirthday : Date = new Date(`${today.getFullYear}-${inputDate.getMonth()}-${inputDate.getDate()} GMT-0400`);

    return `Your birthday is on ${days[currentYearBirthday.getDay()]} ${months[currentYearBirthday.getMonth()]} ${currentYearBirthday.getDate()}, ${today.getFullYear()}`;
}
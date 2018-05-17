//enums
enum months{
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
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
pTodayDate.innerHTML = `Today is ${ todayDayOfWeek }, ${ todayMonth } ${ today.getDate() }, ${ today.getFullYear() } `;
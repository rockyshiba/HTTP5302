//enums
var months;
(function (months) {
    months[months["Janvier"] = 0] = "Janvier";
    months[months["Fevrier"] = 1] = "Fevrier";
    months[months["Mars"] = 2] = "Mars";
    months[months["Avril"] = 3] = "Avril";
    months[months["Mai"] = 4] = "Mai";
    months[months["June"] = 5] = "June";
    months[months["Julliet"] = 6] = "Julliet";
    months[months["Aout"] = 7] = "Aout";
    months[months["Septembre"] = 8] = "Septembre";
    months[months["Octobre"] = 9] = "Octobre";
    months[months["Novembre"] = 10] = "Novembre";
    months[months["Decembre"] = 11] = "Decembre";
})(months || (months = {}));
var days;
(function (days) {
    days[days["Dimanche"] = 0] = "Dimanche";
    days[days["Lundi"] = 1] = "Lundi";
    days[days["Mardi"] = 2] = "Mardi";
    days[days["Mecredi"] = 3] = "Mecredi";
    days[days["Jeudi"] = 4] = "Jeudi";
    days[days["Vendredi"] = 5] = "Vendredi";
    days[days["Samedi"] = 6] = "Samedi";
})(days || (days = {}));
console.log("Months enum:");
console.log(months);
console.log('January: ' + months.January);
console.log('Month 1: ' + months[1]);
//html elements
var pTodayDate = document.getElementById("p--today-date");
var buttonBirthday = document.getElementById("button--birthday");
var inputDatePicker = document.getElementById("input--date-picker");
var pBirthdayMessage = document.getElementById("p--birthday-message");
//Today's date
var today = new Date();
console.log(today);
//today's month
console.log(today.getMonth());
var todayMonth = months[today.getMonth()];
//today's day of week
console.log(today.getDay());
var todayDayOfWeek = days[today.getDay()];
//today's day of month
console.log(today.getDate());
//today's year
console.log(today.getFullYear());
//display today's date to page
pTodayDate.innerHTML = "Aujour d'hui c'est " + todayDayOfWeek + ", le " + todayMonth + " de " + today.getDate() + ", " + today.getFullYear() + " annee";
///Part 2
var userBirthday;
//button functionality
buttonBirthday.onclick = function () {
    //assign userBrithday value to input value
    userBirthday = inputDatePicker.value;
    console.log(userBirthday);
    var userBirthdayDate = new Date(userBirthday + " GMT-0400");
    console.log(userBirthdayDate);
    pBirthdayMessage.innerHTML = constructDateString(userBirthdayDate);
};
function constructDateString(inputDate) {
    //return 'Happy Birthday' if the user's birthday is today
    if ((inputDate.getMonth() === today.getMonth()) && (inputDate.getDate() === today.getDate())) {
        return "Happy birthday!";
    }
    //return the date of the birthday of the current year
    var currentYearBirthday = new Date(today.getFullYear + "-" + inputDate.getMonth() + "-" + inputDate.getDate() + " GMT-0400");
    return "Your birthday is on " + days[currentYearBirthday.getDay()] + " " + months[currentYearBirthday.getMonth()] + " " + currentYearBirthday.getDate() + ", " + today.getFullYear();
}

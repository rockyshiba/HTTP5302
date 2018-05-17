//enums
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
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
pTodayDate.innerHTML = "Today is " + todayDayOfWeek + ", " + todayMonth + " " + today.getDate() + ", " + today.getFullYear() + " ";

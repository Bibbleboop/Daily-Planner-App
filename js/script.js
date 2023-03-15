// let today =$("#currentDay");
// //Todays date in Jan 1st 1999 Format 
let today = moment();
console.log(today.format("dddd D MMM YYYY, HH:mm:ss a "));
// $("#currentDay").text(today.format("D MMM YYYY"));

//Day of the week 
// let dayWeek = today.format("[Today is] dddd");
// $("#weekDay").text(dayWeek);

//Formatting the following variables with Moment.js
// function todaysDate(today) {
    today = moment().format("dddd D MMM YYYY, HH:mm:ss a ");
// currentDay.text(today);
// $("#displayDateTime").text(now);
// }

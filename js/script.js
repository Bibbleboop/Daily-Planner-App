
// //Todays date in Jan 1st 1999 Format 
let today = moment();
$("#currentDay").text(today.format("D MMM YYYY"));

//Day of the week 
let dayWeek = today.format("[Today is] dddd");
$("#weekDay").text(dayWeek);

//Formatting the following variables with Moment.js
function todaysDate() {
    today = moment().format("MMMM Do YYYY, h:mm:ss a");
currentDay.text(today);
$("#displayDateTime").text(now);
}


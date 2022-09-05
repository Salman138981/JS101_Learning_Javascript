//Problem 5: Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday",

let day = "sat";

switch(day){
  case "sun" : console.log("sunday");
        break;
  case "mon" : console.log("monday");
        break;
  case "tue" : console.log("Thuesday");
    break;
  case "web" : console.log("wednesday");
    break;
  case " thur" : console.log("thursday");
    break;
  case "fri" : console.log("friday");
    break;
  case "sat" : console.log("saturday");
    break;
    default : console.log("wrong Input");
    
}
//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let reg_username = "salman@gmail.com";
let reg_password = "00000000";

let int_username= "salman@gmal.com";
let int_password= "00000000";

if(reg_username==int_username){
  if(reg_password==int_password){
    console.log("Sussesful login ");
  }else{
    console.log("incorrect password");
  }
}else{
  console.log("wrong credentials");
}
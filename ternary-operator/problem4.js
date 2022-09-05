//Problem 4: Given 3 numbers (all different values), print which is greatest

let num1 = 23;
let num2 = 44;
let num3 = 21;

//by using if..else..if condition
/*if(num1>num2 && num1>num3){
  console.log(num1,"is greater than",num2,num3);
}else if(num2>num1 && num2>num3){
  console.log(num2,"is greater than",num1,num3);
}else{
  console.log(num3,"is greater");
}*/

//by using ternary operator
num1>num2 && num1>num3 ? console.log(num1,"is greater than",num2,num3)
  :num2>num1 && num2>num3 ? console.log(num2,"is greater than",num1,num3)
  :console.log(num3,"is greater");
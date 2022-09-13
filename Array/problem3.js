//Problem 3 : Given an array of numbers find the average of all the even numbers.

let num= [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
let count = 0;

for (let i=0; i<=num.length-1; i++){

  if(num[i]%2==0){
    sum= sum+ num[i];
    count++;
    
  }
  
}console.log(sum/count);
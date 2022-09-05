//Problem 4: Print the average of even numbers from 1 to 100 (both included)

let sum = 0;
let count=0;
let i = 1;

while(i<=100){

  if(i%2 ==0){
    sum = sum + i;
    count++;
  }
  i++;
}
console.log(sum/count);
//Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit

let n =10;
let sum = 1;
let i=1;

while(i<=n){
  if(i%3==0){
    sum= sum*i;
  }
  i++;
}
console.log(sum)
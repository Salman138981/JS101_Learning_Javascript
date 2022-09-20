//Given an array find the unique items in the array

let name= ["Spiderman","Hulk","Daredevil","Spiderman","Ironman", "Daredevil"];
let unique= {};

for(let i=0; i<=name.length-1; i++)
{
  unique[name[i]]=1;
}



console.log(unique);

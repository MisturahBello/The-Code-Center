//map
var numbers=[3,56,2,48,5];
function triple(x){
  return(x**3)
}
const num=numbers.map(triple)
console.log(num)

//filter
var numbers=[3,56,2,48,5];
function create(x){
  return x>5;
}
const numN=numbers.filter(create);
console.log(numN)

//react convention
var numbers=[3,56,2,48,5];
const numN=numbers.filter((x)=> x>5);
console.log(numN)

//reduce
var numbers=[3,56,2,48,5];//x is assumed to be 0
const numN=numbers.reduce(function(x,y){
  return x+y;
})
console.log(numN);

//find
var numbers=[3,56,2,48,5];//x is assumed to be 0
const numN=numbers.find(function(x){
  return x>5;
})
console.log(numN);

//findIndex
var numbers=[3,56,2,48,5];//x is assumed to be 0
const numN=numbers.findIndex(function(x){
  return x>5;
})
console.log(numN);

//substring
const emojipedia="You can do that"
console.log(emojipedia.substring(0,10))
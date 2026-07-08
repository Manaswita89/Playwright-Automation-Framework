let a = 0
while (a <= 100) {
    console.log(a);
    if (a % 5 == 0) {
        console.log("hi");
        break;

    }
    a--;

}

console.log("....................");

let numbers=[1,2,3,4,5,6,7,8,9,10];
let doubledNumbers = numbers.map((e)=>e*2);
console.log(doubledNumbers);

console.log("....................");

let fah=[32,45,75,85,100];
function convertToCelsius(fah) {
    return (fah-32)*(5/9);
}
let celsius=fah.map(convertToCelsius);
console.log(celsius);

console.log("....................");

let n=[1,2,3,4,5,6,7,8,9,10];
let en=n.filter((e)=>e%2===0)
console.log(en);console.log("....................");

let cart=[
    {name:"Shirt", Price:400},
    {name:"Pant", Price:600},
    {name:"Shoes", Price:800}];

   let totalprice= cart.reduce((total,item)=>total+item.Price,0);
   console.log(totalprice);  


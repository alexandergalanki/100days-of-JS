const arr=[1,2,3,4,5,6,7,8,9,10];

console.log(arr.slice(2,3));

let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2, 1);

console.log(days); // ["Monday"]
console.log(months); // ["January", "February", "Tuesday"]



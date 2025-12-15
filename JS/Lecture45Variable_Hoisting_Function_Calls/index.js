// console.log(age);//throws Reference error

// let age = 25;

// console.log(age);
// const age = 35;

//HOISTING DOESNOT WORK FOR let and const BUT ONYL FOR var 

//CLASS HOISTING

// const obj = new Human();
// class Human {

// }


// function solve(number) {
//     return function(number) {
//         return number * number;
//     }
// }

// let ans = solve(5);
// console.log(ans());
// let finalans = ans(10);
// console.log(finalans);

// const arr = [function(a, b) {
//     return a + b;
// }, 
// function(a, b) {
//     return a - b;
// }, 
// function(a, b) {
//     return a * b;
// }];

// let first = arr[2];
// console.log(first(2, 3));

let obj =  {
    age:  25,
    weight: 45,
    walk: function() {
        console.log("Walking");
    }
}

console.log(obj.age);
obj.walk();
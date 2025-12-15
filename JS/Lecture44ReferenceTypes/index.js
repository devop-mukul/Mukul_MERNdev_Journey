// let obj = {
//     name : 'Mukul',
//     "full name" : 'Mukul Kumar',
//     age : 21,
//     weight : "55kg",
//     walk : function() {
//         console.log("Walking");
//     }
// }

// console.log(obj);

// const original = {
//   name: "Mukul",
//   address: {
//     city: "Delhi",
//     pincode: 110001
//   }
// };

// const shallowCopy = { ...original };

// shallowCopy.name = "Rahul";
// shallowCopy.address.city = "Mumbai";

// console.log(original.name);           // Mukul
// console.log(original.address.city);   // Mumbai ❌
// console.log(original.address.pincode);


// let brr = [1, 2, 3, 'Mukul', true];

// brr.push(4);
// console.log(brr);

// brr.pop();
// brr.shift();
// console.log(brr);

// brr.unshift(0);
// console.log(brr);

// let arr = brr.slice(0, 2);  //creates new shallow copy
// console.log(arr);

// brr.splice(0, 2, 'Okay'); // 0 index se 2 value delete krke 'Okay' insert krdo
// console.log(brr);

// let arr = [10, 20, 30];

// let ans = arr.map((number) => { return number * number; })
// console.log(ans);

// arr.map((number) => { console.log(number * number); })

// let arr = [10, 20, 3, 5, 60];

// let ans = arr.filter((number) => {return number % 2 === 0;});
// console.log(ans);

// let arr = [1, 2, 'kunal', 'mukul', null];

// let ans = arr.filter((value) => {
//     if(typeof(value) === 'string') {
//         return true;
//     }
//     return false;   
// });
// console.log(ans);

// let arr = [10, 20, 30, 40];

// let ans = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);

// console.log(ans);

//FIND MAXIMUM NUMBER IN ARRAY

// let max = arr.reduce((acc, curr) => {
//     if(acc > curr) return acc; 
//     else return acc = curr;
// }, 0); //    WRONG SOLUTION

// let arr = [1, 2, 3, 4, 8];
// let max = arr.reduce((acc, curr) => {
//     return Math.max(acc, curr);
// });

// console.log(max);

// let arr = [1, 2, 3, 4, 8, -1, 0, -5];
// arr.sort();
// console.log(arr);
// arr.reverse();
// console.log(arr);
// console.log(arr.indexOf(8));

// let arr = [1, 2, 3];

// arr.forEach((value, index) => {
//     console.log("Number" , value, "Index:", index)
// });

let arr = [1, 2, 3, 4, 1];

const ans = (arr) => {
    let sum = 0;
    arr.forEach((value) => {
        sum += value;
    })
    return sum;
}

// let ans = getsum(arr);
console.log(ans(arr));
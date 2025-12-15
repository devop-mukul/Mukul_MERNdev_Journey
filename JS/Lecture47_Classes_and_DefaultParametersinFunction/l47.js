function newage() {
    return 99;
}

function check(name = "Mukul", age = newage()) {
    console.log(name, " ", age);
}

check();


// function solve(value = "Mukul") {
//     console.log("Hello", value);
// }
// function solve(value = {age:25, wt:80, ht:190}) {
//     console.log("Hello", value);
// }
// solve(12);
// solve();


//default parameter

// function say(myname = "Kaushani") {
//     console.log("hello", myname);
// }

// say();

// class Human {
//     age;//public
//     #wt = 80;//private using hashtag keyword
//     ht;

//     constructor(newheight, newweight, newage) {
//         this.age = newage;
//         this.#wt = newweight;
//         this.ht = newheight;
//     }
//     walk() {
//         console.log("I am walking", this.#wt);
//     }
//     eat() {
//         console.log("I am eating");
//     }
//     get getweight() {
//         return this.#wt;
//     }
//     set setweight(weight) {
//         this.#wt = weight;
//     }
// }


// let obj = new Human(190, 99, 35);
// console.log(obj.age, "years");
// console.log(obj.getweightm, "kg ");
// console.log(obj.#wt);//throws error
// obj.walk();

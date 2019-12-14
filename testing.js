'use strict'

var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let person = {
    name:"Yarik",
    age: 17,
    isMarried: false
}

console.log(persone.name);
//////

let arr = ['car','moto','helicop'];
console.log(arr[2]);    
/////
//alert('Hello world!');
//confirm("are u here")

console.log("2" === 2); // false

let incr = 10,
    decr = 10;
console.log(++incr); // 11
console.log(--decr); // 9

let isChecked = false,
    isClose = true;
console.log(isChecked || isClose);// если два елемента имеют значение false то будет false
                                  // а если один из них то будет true

/////
if (2*4 == 8){
    console.log("verno")
} else {
    console.log("neverno")
}
////
let num = 50;

if (num < 49) {
    console.log("neverno")
} else if (num > 100 ) {
    console.log("Mnogo!")
} else {
    console.log("verno!")
}


switch (num) {
    case num < 60:
        console.log('Neverno!');
        break;
    case num > 100:
        console.log("Mnogo!");
        break;
    case num > 80:
        console.log("vse esche mnogo");
        break;
    case num == 50:
        console.log("Verno");
        break;
}

/////////////

let num = 50;

while (num < 55) {
    console.log(num);
    num++;         /// 50 51 52 53 54
}

do {
    console.log(num);
    num++;
}
while (num < 55);

for(let i = 1; i < 8; i++) {
    if(i == 6) {
        continue;
    }
    console.log(i);  ///// 1 2 3 4 5 7
}
//////////////
let num = 20;

function showFirstMessage(text) {
    alert(text);
    num = 10;
    console.log(num);
}

showFirstMessage("HelloWorld!"); ///////// 10 20
console.log(num);

///////////////
console.log(calc(3,4));
console.log(calc(8,4));

function calc(a, b) {
    return (a + b);
}



function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase()); // все буквы будуть большими
console.log(str.toLowerCase()); // все букви будут маленькими

let twelwe = "12.2px";
// console.log(Math.round(twelwe)); // округлит число
console.log(parseInt(twelwe)); // округлит число
console.log(parseFloat(twelwe)); // не округлит число

//////

function learnJS(lang, callback) {
    console.log("Я учу"+ lang);
    callback();
}

learnJS("JavaScript", function() {
    console.log("Я прошел 3 црок!")
}


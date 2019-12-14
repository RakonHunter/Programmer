// if (2*4 == 8){
//     console.log("Verno!")
// } else{
//     console.log("false")
// }


// let num = 50;

// switch (num) {
//     case num < 49:
//         console.log("Neverno");
//         break; 
// }

// function showFirstMessage(text) {
//     alert(text);
// }
// showFirstMessage("Hello World!");


// let calc = (a, b) => a + b; 

// console.log(calc(3,4));

// console.log(calc(3,8));


// function retVar() {
//     let num = 50;
//     return num;
// }

// let num = retVar();
// console.log(num);

// function learnJS(lang, callback){                  //callback function
//     console.log("Я учу " + lang);
//     callback();
// }

// function done() {
//     console.log("Я прошел сделал это!");
// }

// learnJS("JavaScript", done);

// ////////

// let options = {                                  //functions
//     width: 1024,
//     height:1024,
//     name:"test"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black", 
//     bg:"red"
// };

// delete options.bool; //delete element

// console.log(options);

// ///

// for (let key in options){
//     console.log(' Свойство ' + key + ' имеет значение ' + options[key]);
// }

// console.log(Object.keys(options).length);

// let arr = ['first', 2, 3, 'four', 5,];

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + " (массив: " + mass + ')');
// });

// console.log(arr); 

// let mass = [1,3,4,6,7];

// for (let key in mass){             //for in (перебор); for of (то что написано)
//     console.log(key);
// }

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

/////

// let ans = promt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = [1, 15, 4],
//       i = arr.sort(compareNum);

// function compareNum(a,b) {
//     return a-b;
// }

// console.log(arr);      


// let solider = {
//     health : 500,
//     armor: 100
// };

// let john = {
//     health: 100
// };

// john.__proto__ = solider;

// console.log(john);
// console.log(john.armor);

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.wrapper .heart');
    
    

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';
// for (let i = 0; i < heart.length; i++){
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts){
//     item.style.backgroundColor = 'blue';

// });
let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

div.classList.add('black');

document.body.appendChild(div);

console.log(div);

let options = {
    width: 1024,
    height: 1024,
    name: 'test'
};
console.log(options. width);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length);

////////////////

let arr = ["first", 2 ,3 ,"four" ,5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
arr.forEach(function(item, i, mass) {                          // Перебор массива методом forEach
    console.log( i + ": " + item + "(массив: " + mass + ")");
});

console.log(arr);

///////////

let mass = [1, 3, 4, 6, 7];

for (let key in mass) {
    console.log(key); //  Выводит порядковый номер массивов
}

////////////

let ans = prompt("", ""),
    arr = [];
         // Пользователь вводит через (,) и все данные выйдут массивом
arr = ans.split(','); 
console.log(arr);

let arr = ["aawe", "zzz","pp", "rqa"],
    i = arr.join();

console.log(arr); 

let arr = [1,15,4],
    i = arr.sort(compareNum);

function compareNum(a, b) {
    return a-b;
}
console.log(arr);


/////
function learnJS(lang, callback) {
    console.log("Я учу" + lang);
    callback();
}

learnJS("Java Script", function() {
    console.log("Я прошел 3 урок!")
})

function one() {
    setTimeout ( function(){
        console.log(1);
    }, 500);
}

function two() {
    console.log(2);
}

one();
two();
//////// 

function doHomework(subject, callback) {
    console.log("Satrting my" + subject + "homework.");
    callback();
}

doHomework("math", function() {
    console.log("finished my homework!");
}); 

let arr = {}

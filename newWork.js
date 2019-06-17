let num = 50;

if (num < 49){
    console.log ('Neverno!')
} 
else if (num > 100){
    console.log('Mnogo')
}
else{
    console.log('Verno!')
};

////////////////

switch (num) {
    case num < 49:
       console.log('Neverno!');
       break;
    case num > 100:
       console.log('Mnogo!');
        break;
    case num > 80:
        console.log ("Vse eshe mnogo");
        break;
    case num == 50:
        console.log ("Verno!");
        break;
    default:
        console.log('Chto to ne tak');   
        break; 
}

////////////

let num = 50;
while (num < 55) {
    console.log(num);
    num++;
}

////////////

do {
    console.log(num);
    num++;
}
while (num < 55)

/////////////

for (let i = 1; i < 8; i++){
    if (i == 6){
        continue;
    }
    console.log(i)
}

let x = 5
alert(x++);
console.log(x);
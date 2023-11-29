/* let number = 100;
console.log(number);

const pi = 3.14
console.log(pi);

/* pi = 3.1416
console.log(pi); */

/* let radius = 8;

let circle = radius * 2 * pi;
console.log(circle);

let name = 'Carlo';
name = 'Marco';
console.log(name);

let greet = 'ciao, mondo!'
console.log(greet); */

/* let greet = 'come stai, mondo!'
console.log(greet); */

/* greet = greet + 'Come stai?'
console.log(greet)

greet = `${greet}`
console.log(greet) */ 

/* let num1= 40
let num2= 40
let comparison


if( num1 = num2){
    comparison="i valori sono uguali"
}    
else{
    comparison="i valori sono diversi"
}

console.log(comparison)
 */

/* let num= 40;
let comparison = true;

if (num == "10"){
    comparison = true;
}
else{
    comparison = false
}

console.log(comparison); */

/* for(i=1, i>0, i++){
    console.log(i);
} */

/* for(i=42, i>0 ,i--){
    console.log(i);
}*/

/* const numbers = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8];
console.log(numbers);

const fruits = ['mela', 'banana', 'pesca', 'pera', 'albicocca', 'mango', 'kiwi', 'papaya'];
console.log(fruits.length); */

/* Esercizio 2/A */
/* const numOfElements =  prompt('inserisci un numero intero')

let numbers = [];

 for (let i = 1; i <= numOfElements ; i++) {
    numbers.push(parseInt(Math.random() * 10) + 1);
    numbers.push(i);
}

console.log(numbers); */

/* let sum = 0 */
/* **Esercizio 2/B**  */
/* for (let i = 0 ; i < numbers.lenght; i++) {
    sum = sum + numbers[i];
}

console.log(sum);
let i = numbers
if (numbers > i){
    console.log(numbers > numOfElements);
}
 */ 
/* **Esercizio 2/C** */
/* let maggiore = 1; 
for (let i = 0; i < numbers.lenght; i++ ) {
     if (numbers[i] > maggiore) {
        maggiore = numbers [i];
     }
}

console.log(maggiore) */

/* 
let num1 = prompt('inserisci primo numero');
let num2 = prompt('inserisci secondo numero');

if(num1 < num2){
    console.log(num2);
} else if(num1 > num2){
    console.log(num1);
}else{
    console.log('I numeri sono uguali');
} */


/* let somma = 0;
for(let i=1 ; i <=10; i++ ){
    let num = parseInt(prompt('inserisci il numero'));

    somma += num;
}
console.log(somma); */
/* let nome = prompt('inseerisci il tuo nome');
let invitati = ['tizio' , 'caio' , 'sempronio'];
let flag = false;
/* if(invitati[0] != nome && invitati[1] != nome && invitati[2] != nome) {
    console.log('Non puoi entrare!')
} else {
    console.log('Puoi entrare!')
} */

/* for(let i=0; i<invitati.length; i++){
    if(invitati[i] == nome){
        flag = true;
    }
}

if(flag){
    console.log('Puoi entrare!');
}
else{
    console.log('Non puoi entrare!');
}
 */


/* numbers = [];

for(let i=1 ; i<=6; i++){
    let num = parseInt(prompt('inserisci un numero'));
    
    if(num % 2 != 0){
        numbers.push(num);
    }
}

console.log(numbers); */

/* let num = prompt('inserisci un numero')

let a = 0, b = 1;
let c;
let i = 0;

console.log(a,b);
while(i<num ){
    c = a + b;
    a = b;
    b = c;
    console.log(c);

    i++
} */

/* function printHelloWorld(){
    console.log('Ciao Mondo');
}
printHelloWorld();


function somma(num1 , num2){
    let result = num1 + num2;
    return result;
}

let risultato = somma(7,10)

console.log(risultato); */

function getOneStringFromTwo(string1 , string2){
    let result = `${string1} ${string2}`;
    return result;
}

let union = getOneStringFromTwo('Federico', 'Chiesa')

console.log(union);
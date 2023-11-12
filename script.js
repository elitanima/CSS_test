// function User() {
// }
// User.prototype = {admin: false}
// console.log(User);

// let user = new User;
// console.log(user.admin);

// let n = 0 || 1 && 2 || 3;
// console.log(n);

// let user = {
//     sayHi: function() {
//       console.log(this);
//     }
//   };
  
//   (user.sayBye = user.sayHi)();
// for(var i=0; i<10; i++) {
//     console.log(i);
//   }

// if (function f(){}) {
//     alert(typeof f);
//   }

// "use strict";

// let a = null + undefined;
// console.log(a);

// let a = (1,5 - 1);

// console.log(a);

// const button = document.querySelector('#button');

// button.addEventListener('click', event => {
//     if (event.target.className === 'buttonClass') {
//         console.log(event.target.textContent);
//     }
// })

// const array = [2, 3, 4];

// console.log(array.filter(element => !(element % 2)).reduceRight((acc, element) => acc + Math.sqrt(element), 0))

// const number = 0;

// function numberEvenOrOdd(number) {
//     if(!(number %2)){
//         return console.log('четное');
//     }
//     return console.log('нечетное');
// }

// numberEvenOrOdd(number)

// function opposite(number) {
//     //your code here
//     if (number === 0){
//       return number
//     } 
//     return -number;
//   }

// console.log(opposite(number));

// const string = 'ivan smirnov';

// function stringOne(string) {
//     const array = string.split(' ');
//     const newArray = [];
//     for (element of array){
//         newArray.push(element[0].toUpperCase());
//     }
//     return console.log(newArray.join('.'));
// }

// stringOne(string)

// const string = 'world';

// function name(string) {
//  return console.log([...string].reverse().join(''))
// }

// name(string)

// const string = 'Skippy'

// function arr(string) {
//     const array = Array.from(string);
//     for (let i=0;i<array.length - 4; i++) {
//         array[i] = '#';
//     }
//     console.log(array.join(''));
// }

// arr(string);

// const array = [];
// let summ = 0;
// array.forEach(element => {
//     if(element > 0){
//     summ += element;
// }});

// console.log(summ);

// const string = 765;

// function stringRevers(string) {
//     const array = [string];
//     for ( let i = 0; i < string.length; i++) {
//         let n = string[i];
//         array.push(n)
//         console.log(string[i]);
//     console.log(array);
// }
// }

// stringRevers(string)
// function name(string) {
//     const array = [...String(string)];
//     let arraySqrt = [];
//     for ( let i = 0; i < array.length; i++) {
//         let sqrt = array[i]**2;
//         arraySqrt.push(sqrt);
//     }
//     return Number(arraySqrt.join(''));
// }

// console.log(name(string))

// console.log(Number([...String(string)]));

// const element = document.querySelector('.container')

// function randomColor() {
//     const minNumber = 0
//     const maxNumber = 255
//     const array = []
//     for (let i = 0; i < 3; i++){
//         const randomNumber = Math.floor(Math.random() * (maxNumber + 1));
//         array.push(randomNumber);
//     }
//     return `rgb(${array[0]} ${array[1]} ${array[2]})` 
// }
// element.style.backgroundColor = randomColor()
// console.log(randomColor());

// function randomColor_2() {
//     const randomNumber = () => 
//         Math.floor(Math.random() * 256)
    
//     return `rgb(${randomNumber()} ${randomNumber()} ${randomNumber()})`
// }
// console.log(randomColor_2());
// element.style.backgroundColor = randomColor_2();

// console.log(fun(2, 3))

// function fun(a, b) {
//     return a + b;
// }

// const funTwo = (a, b) => {
//     return a + b;
// }

// console.log(funTwo(2, 3))
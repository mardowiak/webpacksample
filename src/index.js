import { sum } from './sum';
import style from './css/index.scss';

console.log("Hello World");
console.log(sum(3,4));

const head = document.getElementById("demo"),
    sumValue = sum(111,4);

head.innerHTML = `Wynik dodawania 6+4 = ${sumValue}`
'use strict';

function cutFruitPieces(fruit) {
    return fruit *4;
}

function fruitProcessor(apples, oranges){
    const applePieces =  cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));

const drop = document.getElementById('alert');

let result = prompt('Input name')

drop.innerText = `Welcome to TUF ${result}`;

setTimeout(function () {
    drop.style.display = 'flex';
}, 1000)

setTimeout(function () {
    drop.style.display = 'none';
}, 5000)

const hide = document.getElementById('delete');
const nav = document.querySelector('.drop-down');
const show = document.getElementById('show');

hide.addEventListener('click', function() {
    nav.style.display = 'none';
})

show.addEventListener('click', function() {
    nav.style.display = 'block';
})

function followReze(){
    location = 'https://x.com/5starReze'
}

function followChris(){
    location = 'https://x.com/Chris_thabuildR'
}

function followHIM() {
    location = 'https://x.com/ImHIMONLY1'
}
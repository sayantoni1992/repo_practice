// Min Först JS

const form = document.querySelector('form');
const add = document.querySelector('.add');
const substract = document.querySelector('.substract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let input1 = (document.querySelector('.input1').value);
    let input2 = (document.querySelector('.input2').value);

    //Addition
    add.addEventListener('click', () => {
        result.innerHTML = parseInt(input1) + parseInt(input2);
    });

     //Substraction
     substract.addEventListener('click', () => {
        result.innerHTML = parseInt(input1) - parseInt(input2);
    });

     //Multiply
     multiply.addEventListener('click', () => {
        result.innerHTML = parseInt(input1) * parseInt(input2);
    });

     //Divide
     divide.addEventListener('click', () => {
        result.innerHTML = parseInt(input1) / parseInt(input2);
    });


});
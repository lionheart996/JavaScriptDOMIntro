function calc() {
    const num1Element = document.querySelector('#num1');
    const num2Element = document.querySelector('#num2');
    const sumElements = document.querySelector('#sum');

    sumElements.value = Number(num1Element.value) + Number(num2Element.value);
}
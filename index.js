const { address } = require('@waves/ts-lib-crypto')

const myForm = document.getElementById('myForm')

myForm.addEventListener('submit', (e)=> {
  e.preventDefault()

  const addressData = myForm.elements[0].value

  const html = document.getElementById('data');

  html.innerHTML += '<label for="data">Address:</label>' + address(addressData);
});
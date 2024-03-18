/* 
Currently as you can see the calculator is non functional.
The challenge is to make it working in a way that it should display the simple interest amount on the HTML page.



Here is the challenge:

The html page accepts three values from the user.

    1) Principal amount borrowed.

    2) Time period in years for which the amount is borrowed.

    3) Rate of interest.



Calculate the simple interest based on these amounts.
The formula to calculate simple interest is:

Simple interest = principal x number of years x rate of interest / 100

Hint steps:
Capture the input from HTML input fields using the querySelector.
Create a function to calculate interest and attach it to the click event of the calculate button. */

function calculate(){

let amount = parseInt(document.querySelector("#principalAmount").value)
let years = parseInt(document.querySelector("#timePeriod").value)
let rate = parseInt(document.querySelector("#interestRate").value)

let calcolo = amount * years * (rate/100)

document.querySelector('.interest').innerHTML += " " + calcolo
}

document.querySelector('.btn').addEventListener('click', calculate)
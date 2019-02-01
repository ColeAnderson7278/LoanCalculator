// const homePrice = document.querySelector("#homePriceInput").value;
// const amountOfMonths = document.querySelector("#loanProgramSelection").value;
// const interestRate = document.querySelector("#interestRateInput").value;
// var pAndI;
// var PMI;
// var insurance;
// var tax;
// var monthlyPayment;

// function checkForSubmitButton() {
//     var button = document.querySelector("#formSubmitButton");
//     button.addEventListener("click", function() {
//         setPAndIPayment();
//         setPMIPayment();
//         setInsurancePayment();
//         setTaxPayment();
//         setMonthlyPayment();
//     });
// }

// checkForSubmitButton();

// function setPAndIPayment() {
//     calculatePAndIPayment(interestRate, amountOfMonths, homePrice);
//     document.querySelector("#piHolder").innerText = "$" + pAndI;
// }

// function calculatePAndIPayment(interestRate, amountOfMonths, homePrice) {
//     var rate = interestRate * 0.001;
//     var nper = amountOfMonths * 12;
//     var pv = homePrice;
//     var PandIPayment =
//         pv *
//         ((rate * Math.pow(1 + rate, nper)) / (Math.pow(1 + rate, nper) - 1));
//     pAndI = Math.round(PandIPayment);
// }

// function setPMIPayment() {
//     calculatePMIPayment(homePrice);
//     document.querySelector("#pmiHolder").innerText = "$" + PMI;
// }

// function calculatePMIPayment(homePrice) {
//     PMI = Math.round((homePrice * 0.01) / 12);
// }

// function setInsurancePayment() {
//     calculateInsurancePayment(homePrice);
//     document.querySelector("#insuranceHolder").innerText = "$" + insurance;
// }

// function calculateInsurancePayment(homePrice) {
//     insurance = Math.round((homePrice / 100000) * 35);
// }

// function setTaxPayment() {
//     calculateTaxPayment(homePrice);
//     document.querySelector("#taxHolder").innerText = "$" + tax;
// }

// function calculateTaxPayment(homePrice) {
//     tax = Math.round((homePrice * 0.015) / 12);
// }

// function setMonthlyPayment() {
//     calculateMonthlyPayment(pAndI);
//     document.querySelector("#monthlyPaymentHolder").innerText =
//         "$" + monthlyPayment;
// }

// function calculateMonthlyPayment(pAndI) {
//     monthlyPayment = pAndI + PMI + insurance + tax;
// }

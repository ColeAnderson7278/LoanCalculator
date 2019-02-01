function checkForSubmitButton() {
    var button = document.querySelector("#formSubmitButton");
    button.addEventListener("click", function() {
        setPaymentInfo();
    });
}

checkForSubmitButton();

function setPaymentInfo() {
    var loanAmount = document.querySelector("#loanPriceInput").value;
    var loanProgram = document.querySelector("#loanProgramSelection").value;
    var loanTerm = document.querySelector("#loanTermInput").value;
    var interestRate = document.querySelector("#interestRateInput").value;
    setMonthlyPayment(loanAmount, loanTerm, loanProgram, interestRate);
    setPrincipalPaid(loanAmount);
    setInterestPaid(loanAmount, loanTerm, loanProgram, interestRate);
}

function setMonthlyPayment(loanAmount, loanTerm, loanProgram, interestRate) {
    document.querySelector("#monthlyPaymentHolder").innerText =
        "$" +
        getMonthlyPayment(loanAmount, loanTerm, loanProgram, interestRate);
}

function getMonthlyPayment(loanAmount, loanTerm, loanProgram, interestRate) {
    var payment = loanAmount / (loanTerm * loanProgram);
    var interest = loanAmount * (interestRate / 100);
    return interest / 12;
    // return Math.round((payment + interest) * 100) / 100;
}

function setPrincipalPaid(loanAmount) {
    document.querySelector("#totalPrincipalHolder").innerText =
        "$" + loanAmount;
}

function setInterestPaid(loanAmount, loanTerm, loanProgram, interestRate) {
    document.querySelector("#totalInterestHolder").innerText =
        "$" + getInterestPaid(loanAmount, loanTerm, loanProgram, interestRate);
}

// function getInterestPaid(loanAmount, loanTerm, loanProgram, interestRate) {
//     var interest = interestRate / 100 / 12;
//     var time = loanTerm * loanProgram;
//     var factor = 1 / (1 * Math.pow(1 + interest, time));
//     return factor * loanAmount;
// }

function checkForm() {
    var price = document.querySelector("#loanPriceInput").value;
    var term = document.querySelector("#loanTermInput").value;
    var interest = document.querySelector("#interestRateInput").value;
    if (price.length > 0 && term.length > 0 && interest.length > 0) {
        document.querySelector("#formSubmitButton").disabled = false;
    } else {
        document.querySelector("#formSubmitButton").disabled = true;
    }
}

function runCheckForm() {
    document.body.addEventListener("mouseover", function() {
        checkForm();
    });
}

runCheckForm();

function checkForSubmit() {
    var button = document.querySelector("#formSubmitButton");
    button.addEventListener("click", function() {
        checkForm();
        setPaymentInfo();
    });
}

checkForSubmit();

function setPaymentInfo() {
    var loanAmount = document.querySelector("#loanPriceInput").value;
    var loanProgram = document.querySelector("#loanProgramSelection").value;
    var loanTerm = document.querySelector("#loanTermInput").value;
    var interestRate = document.querySelector("#interestRateInput").value / 100;
    setMonthlyPayment(loanAmount, loanTerm, loanProgram, interestRate);
    setPrincipalPaid(loanAmount);
    setInterestPaid(loanAmount, interestRate);
}

function setMonthlyPayment(loanAmount, loanTerm, loanProgram, interestRate) {
    document.querySelector("#monthlyPaymentHolder").innerText =
        "$" +
        getMonthlyPayment(loanAmount, loanTerm, loanProgram, interestRate);
}

function getMonthlyPayment(loanAmount, loanTerm, loanProgram, interestRate) {
    var payment = loanAmount / (loanTerm * loanProgram);
    var interest = (interestRate * loanAmount) / (loanTerm * loanProgram);
    return Math.round((payment + interest) * 100) / 100;
}

function setPrincipalPaid(loanAmount) {
    document.querySelector("#totalPrincipalHolder").innerText =
        "$" + loanAmount;
}

function setInterestPaid(loanAmount, interestRate) {
    document.querySelector("#totalInterestHolder").innerText =
        "$" + getInterestPaid(loanAmount, interestRate);
}

function getInterestPaid(loanAmount, interestRate) {
    return Math.round(loanAmount * interestRate * 100) / 100;
}

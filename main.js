function checkForSubmitButton() {
    var button = document.querySelector("#formSubmitButton");
    button.addEventListener("click", function() {
        getTotalPayment();
    });
}

checkForSubmitButton();

function getTotalPayment() {
    var homePrice = document.querySelector("#homePriceInput").value;
    var downPaymentPrice = document.querySelector("#downPaymentPriceInput")
        .value;
    var downPaymentPercent = document.querySelector("#downPaymentPercentInput")
        .value;
    var amountOfMonths = document.querySelector("#loanProgramSelection").value;
    var interestRate = document.querySelector("#interestRateInput").value;
    document.querySelector("#totalPaymentHolder").innerText = getMonthlyPayment(
        interestRate,
        amountOfMonths,
        homePrice
    );
}

function getMonthlyPayment(interestRate, amountOfMonths, homePrice) {
    var rate = interestRate * 0.001;
    var nper = amountOfMonths * 12;
    var pv = homePrice;
    var monthlyPayment =
        pv *
        ((rate * Math.pow(1 + rate, nper)) / (Math.pow(1 + rate, nper) - 1));
    return monthlyPayment;
}

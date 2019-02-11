function submitForm() {
    var form = document.getElementsByTagName("form")[0];
    var button = document.querySelector("#formSubmitButton");
    button.addEventListener("click", function() {
        if (form.checkValidity()) {
            const loanInfo = createLoanInfoClass();
            setPaymentInfo(loanInfo);
        } else {
            alert("Please check your input.");
        }
    });
}

function createLoanInfoClass() {
    var loanAmount = document.querySelector("#loanPriceInput").value;
    var loanProgram = document.querySelector("#loanProgramSelection").value;
    var loanTerm = document.querySelector("#loanTermInput").value;
    var interestRate = document.querySelector("#interestRateInput").value / 100;
    const loanInfo = new LoanInfo(
        loanAmount,
        loanTerm,
        loanProgram,
        interestRate
    );
    return loanInfo;
}

function setPaymentInfo(loanInfo) {
    loanInfo.setMonthlyPayment("monthlyPaymentHolder");
    loanInfo.setPrincipalPaid("totalPrincipalHolder");
    loanInfo.setInterestPaid("totalInterestHolder");
}

class LoanInfo {
    constructor(loanAmount, loanTerm, loanProgram, interestRate) {
        this.loanAmount = loanAmount;
        this.loanTerm = loanTerm;
        this.loanProgram = loanProgram;
        this.interestRate = interestRate;
        this.monthlyPayment = this.getMonthlyPayment();
        this.interestPaid = this.getInterestPaid();
    }

    getMonthlyPayment() {
        var payment = this.loanAmount / (this.loanTerm * this.loanProgram);
        var interest =
            (this.interestRate * this.loanAmount) /
            (this.loanTerm * this.loanProgram);
        return Math.round((payment + interest) * 100) / 100;
    }

    getInterestPaid() {
        return Math.round(this.loanAmount * this.interestRate * 100) / 100;
    }

    setMonthlyPayment(idLocation) {
        document.getElementById(idLocation).innerText =
            "$" + this.monthlyPayment;
    }

    setPrincipalPaid(idLocation) {
        document.getElementById(idLocation).innerText = "$" + this.loanAmount;
    }

    setInterestPaid(idLocation) {
        document.getElementById(idLocation).innerText = "$" + this.interestPaid;
    }
}

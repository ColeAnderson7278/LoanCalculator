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
    loanInfo.setMonthlyInterest("monthlyInterestHolder");
    loanInfo.setMonthlyLoan("monthlyLoanHolder");
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
        this.monthlyInterest = this.getMonthlyInterest();
        this.monthlyLoan = this.getMonthlyLoan();
        this.interestPaid = this.getInterestPaid();
    }

    getMonthlyPayment() {
        var payment = this.loanAmount / (this.loanTerm * this.loanProgram);
        var interest =
            (this.interestRate * this.loanAmount) /
            (this.loanTerm * this.loanProgram);
        return Math.round((payment + interest) * 100) / 100;
    }

    getMonthlyInterest() {
        return (
            Math.round(
                ((this.interestRate * this.loanAmount) /
                    (this.loanTerm * this.loanProgram)) *
                    100
            ) / 100
        );
    }

    getMonthlyLoan() {
        return (
            Math.round(
                (this.loanAmount / (this.loanTerm * this.loanProgram)) * 100
            ) / 100
        );
    }

    getInterestPaid() {
        return Math.round(this.loanAmount * this.interestRate * 100) / 100;
    }

    setMonthlyPayment(idLocation) {
        document.getElementById(idLocation).innerText =
            "$" + this.monthlyPayment;
    }

    setMonthlyInterest(idLocation) {
        document.getElementById(idLocation).innerText =
            "Interest Rate: $" + this.monthlyInterest;
    }

    setMonthlyLoan(idLocation) {
        document.getElementById(idLocation).innerText =
            "Payment Before Interest: $" + this.monthlyLoan;
    }

    setPrincipalPaid(idLocation) {
        document.getElementById(idLocation).innerText = "$" + this.loanAmount;
    }

    setInterestPaid(idLocation) {
        document.getElementById(idLocation).innerText = "$" + this.interestPaid;
    }
}

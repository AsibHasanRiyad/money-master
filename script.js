function inputTaker(id){
    const input = document.getElementById(id);
    const inputValue = input.value;
    const inputValueNumber = parseFloat(inputValue);
        return inputValueNumber;
}

// function calculator
function calculator() {
    const income = inputTaker('income');
    const food = inputTaker('food');
    const rent = inputTaker('rent')
    const clothes = inputTaker('clothes')
    const totalExpenses = food + rent + clothes;
    if (isNaN(totalExpenses)) {
        return alert ('please insert a number')
    }

    // expenses
    const expenses = document.getElementById('expenses');
    expenses.innerText = totalExpenses
    // balance
    const remainBalance = income - totalExpenses
    const balance = document.getElementById('balance');
    balance.innerText = remainBalance;

    
}

//savings
function savings() {
    const save = inputTaker('save')
    const balance = document.getElementById('balance').innerText;
    const remainBalanceNumber = parseFloat(balance);
    const savingAmount = remainBalanceNumber * (save / 100);
    if (isNaN(savingAmount)) {
        return alert ('insert a number')
    }
    const saving = document.getElementById('saving-amount');
    saving.innerText = savingAmount;
    const remainBalance = document.getElementById('remain-balance');
    const balanceLeft = remainBalanceNumber - savingAmount;
    remainBalance.innerText = balanceLeft;
}
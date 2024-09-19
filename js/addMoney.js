// Add money to the account
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    const addMoneyInput = document.getElementById('input-add-money').value;
    const pinNumerInput = document.getElementById('input-pin-number').value;

    if(pinNumerInput === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const newBalance = parseFloat(balance) + parseFloat(addMoneyInput);
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money! Please try again.');
    }
});
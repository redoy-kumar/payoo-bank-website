// Add money to the account
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    const cashOutInput = document.getElementById('input-cash-out').value;
    const pinNumerInput = document.getElementById('cash-out-pin').value;

    if(pinNumerInput === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const newBalance = parseFloat(balance) - parseFloat(cashOutInput);
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out! Please try again.');
    }
});
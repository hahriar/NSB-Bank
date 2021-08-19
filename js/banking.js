document.getElementById('deposit-button').addEventListener('click', function(){

    // get the deposit money llll

    
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    
    const newDepositTotal = parseFloat(depositTotal.innerText) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;




    // update account Blance 
    
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalanceTotal;

    // clear the diposit input field

    depositInput.value = '';
});
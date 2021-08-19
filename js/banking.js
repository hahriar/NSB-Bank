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
    const previousWithdrawTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousWithdrawTotal + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalanceTotal;

    // clear the diposit input field

    depositInput.value = '';
});

//Withdraw Ammount Even Handler llll

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

 // Withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);


    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // Update Balance section 

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;


    // clear withdraw input

    withdrawInput.value = '';
    

});
// login system add
document.getElementById('login-btn').addEventListener('click', function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(email === 'sontan@baap.com' && password === 'secret') {
        const login = document.getElementById('login')
        login.classList.add('hidden');
        const bankProcess = document.getElementById('bank-process');
        bankProcess.classList.remove('hidden');
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500
          });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
})
// login system ends here
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositElement = document.getElementById('deposit').value;
    const deposit = parseFloat(depositElement);
    const depositAmount = document.getElementById('deposit-amount')
    const totalDeposit = deposit + parseFloat(depositAmount.innerText);
    depositAmount.innerText = totalDeposit
    // get the total amount
    const totalBalanceElement = document.getElementById('total-balances')
    const totalBalance = parseFloat(totalBalanceElement.innerText)
    const totalBalanceCalculate = totalBalance + totalDeposit
    totalBalanceElement.innerText = totalBalanceCalculate
    document.getElementById('deposit').value = ''
});
// withdraw method add
document.getElementById('withdraw').addEventListener('click',function(){
    const withdrawElement = document.getElementById('withdraw-amount').value;
    const withdraw = parseFloat( withdrawElement)
    const totalBalanceElement = document.getElementById('total-balances')
    const totalBalance = parseFloat(totalBalanceElement.innerText)
    const afterWithdraw = totalBalance - withdraw
    totalBalanceElement.innerText = afterWithdraw
    const withdrawTableElement = document.getElementById('withdraw-table')
    const withdrawTable = parseFloat(withdrawTableElement.innerText)
    const totalWithdraw = withdraw + withdrawTable
    withdrawTableElement.innerText = totalWithdraw
    document.getElementById('withdraw-amount').value = ''
});
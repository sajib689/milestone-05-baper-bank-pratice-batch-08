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
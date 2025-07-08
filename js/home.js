function displayUserName() {
    if (localStorage.getItem('userDataArrayReg') != null) {
      var loguser = localStorage.getItem('login_usrname')
        console.log(loguser);
        document.getElementById('username_welcome_msg').innerText = `Welcome, ${loguser}`

    }
}
displayUserName()
function logout(){
  localStorage.removeItem('login_usrname')
  window.location.href = 'https://karenayman.github.io/login-register-system/'
}
var userName = document.getElementById('reg_username')
var userPass = document.getElementById('reg_pass')
var userEmail = document.getElementById('reg_email')
var userDataArrayReg = []
function userRegister() {
    if (regEmailValidation() && regPassValidation() && userName !== null && dataExist()) {
        var signUpData = {
            'userName': userName.value,
            'uaerPass': userPass.value,
            'userEmail': userEmail.value
        }
        //console.log(signUpData);
        userDataArrayReg.push(signUpData);
        console.log(userDataArrayReg);
        localStorage.setItem("userDataArrayReg", JSON.stringify(userDataArrayReg))
        document.getElementById('reg_success').classList.remove('d-none');
        document.getElementById('reg_success').classList.add('d-block');
    }
}
function regEmailValidation() {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(userEmail.value) === true) {
        document.getElementById('reg_error_username').style.display = 'none'
        document.getElementById('reg_error_username').classList.remove('d-block');
        return true
    } else if (userEmail.value === null || userEmail.value === "") {
        document.getElementById('reg_error_username').classList.remove('d-none');
        document.getElementById('reg_error_username').classList.add('d-block');
        document.getElementById('reg_error_username').innerText = 'Your Email is empty please enter your own email'
        return false
    } else if (regex.test(userEmail.value) === false) {
        document.getElementById('reg_error_username').classList.remove('d-none');
        document.getElementById('reg_error_username').classList.add('d-block');
        document.getElementById('reg_error_username').innerText = 'Your Email is not valid'
        return false
    }
}
function regPassValidation() {
    var regex = /^[0-9]{9}[A-Za-z]{1}$/;
    if (regex.test(userPass.value) === true) {
        document.getElementById('reg_error_password').style.display = 'none'
        document.getElementById('reg_error_password').classList.remove('d-block');
        return true
    } else if (userPass.value === null || userPass.value === "") {
        document.getElementById('reg_error_password').classList.remove('d-none');
        document.getElementById('reg_error_password').classList.add('d-block');
        document.getElementById('reg_error_password').innerText = 'Your Password is empty please enter your own password'
        return false
    } else if (regex.test(userPass.value) === false) {
        document.getElementById('reg_error_password').classList.remove('d-none');
        document.getElementById('reg_error_password').classList.add('d-block');
        document.getElementById('reg_error_password').innerText = 'Your Password should be 9 digit and one character'
        return false
    }
}
function dataExist() {
    if (localStorage.getItem('userDataArrayReg') != null) {
        userDataArrayReg = JSON.parse(localStorage.getItem('userDataArrayReg'))
        for (var i = 0; i < userDataArrayReg.length; i++) {
            var existUsername = userDataArrayReg[i].userName
            var existEmail = userDataArrayReg[i].userEmail
            if (existUsername === userName.value || existEmail === userEmail.value) {
                document.getElementById('reg_error_password').classList.remove('d-none');
                document.getElementById('reg_error_password').classList.add('d-block');
                document.getElementById('reg_error_password').innerText = 'This Account Already Exist'
                return false
            } else {
                document.getElementById('reg_error_password').style.display = 'none'
                document.getElementById('reg_error_password').classList.remove('d-block');
                return true
            }
        }
    } else { 
        var signUpData = {
            'userName': userName.value,
            'uaerPass': userPass.value,
            'userEmail': userEmail.value
        }
        //console.log(signUpData);
        userDataArrayReg.push(signUpData);
        console.log(userDataArrayReg);
        localStorage.setItem("userDataArrayReg", JSON.stringify(userDataArrayReg))
    }
}
// if (localStorage.getItem('userDataArrayReg') != null) {
//     userDataArrayReg = JSON.parse(localStorage.getItem('userDataArrayReg'))
//     //displayBookmark(userDataArrayReg);
// }
//console.log(localStorage.getItem('userDataArrayReg'));
//console.log(JSON.parse(localStorage.getItem('userDataArrayReg')));


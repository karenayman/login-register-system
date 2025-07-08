var userPassLogin = document.getElementById('login_pass')
var userEmailLogin = document.getElementById('login_email')

function userDataExist() {
   
        if(userPassLogin.value === null || userEmailLogin.value === null || userPassLogin.value === "" || userEmailLogin.value === ""){
                    document.getElementById('access_empty').classList.add('d-block');
                    document.getElementById('access_empty').classList.remove('d-none');
                    document.getElementById('access_wrong').classList.add('d-none');
                    return false
        } 
        if (localStorage.getItem('userDataArrayReg') == null && userPassLogin.value != "" && userEmailLogin.value != ""){
            document.getElementById('access_wrong').classList.add('d-block');
            document.getElementById('access_wrong').classList.remove('d-none');
            document.getElementById('access_empty').classList.add('d-none');
        }
    if (localStorage.getItem('userDataArrayReg') != null) {
        userDataArrayReg = JSON.parse(localStorage.getItem('userDataArrayReg'))
        console.log(userDataArrayReg);
        for (var i = 0; i < userDataArrayReg.length; i++) {
            var loginPassword = userDataArrayReg[i].uaerPass
            var loginEmail = userDataArrayReg[i].userEmail
            
            console.log(loginEmail);
            console.log(loginPassword);
            if (loginPassword === userPassLogin.value && loginEmail === userEmailLogin.value) {
                console.log(loginEmail);
                console.log(loginPassword);
                console.log(userPassLogin.value);
                console.log(userEmailLogin.value);
               localStorage.setItem('login_usrname', userDataArrayReg[i].userName)
                window.location.pathname = '/home.html';
                document.getElementById('access_empty').classList.add('d-none');
                document.getElementById('access_wrong').classList.add('d-none');
                return true
            } else {
                document.getElementById('access_wrong').classList.add('d-block');
                document.getElementById('access_wrong').classList.remove('d-none');
                document.getElementById('access_empty').classList.add('d-none');
            }
            // else if(userPassLogin.value === null || userEmailLogin.value === null || userPassLogin.value === "" || userEmailLogin.value === ""){
            //     document.getElementById('access_empty').classList.add('d-block');
            //     document.getElementById('access_empty').classList.remove('d-none');
            //     document.getElementById('access_wrong').classList.add('d-none');
            //     return false
            // } 
            // else { //if(loginPassword !== userPassLogin.value && loginEmail !== userEmailLogin.value)
            //     document.getElementById('access_wrong').classList.add('d-block');
            //     document.getElementById('access_wrong').classList.remove('d-none');
            //     document.getElementById('access_empty').classList.add('d-none');
            //     return false
            // }
        }

    
    } 
    
    
}
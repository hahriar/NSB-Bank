document.getElementById('submit-login').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    //user password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    if(userEmail == 'abc@def.com' && userPassword == 'abcd'){
        window.location.href= 'banking.html';
    }

});

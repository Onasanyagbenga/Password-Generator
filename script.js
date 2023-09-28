let allChar = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()-_=+[]{}|:''<>,./?" ;
let size = 8 ;

function createPass(){
    let password = "" ;
    for (let i = 0; i < size; i++){
        let randomIndex = Math.floor(Math.random() * allChar.length) ;
        password += allChar.charAt(randomIndex) ;
    }
    document.getElementById('password').value = password ;
    // return password // this line is for console use ONLY!
}
// console.log( createPass() )

function copyPassword(){
    password.select()
    document.execCommand('copy')
    alert('Copied to Clipboard: ' + password.value);
}

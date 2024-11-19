const passwordBox=document.getElementById("Password");
const lenght=14;

const lowerCase="abcdefghijklmnopqrstuvwxyz";
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number="0123456789";
const allChars=lowerCase+upperCase+number;
function createPassword(){
    let password="";
    
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    while(lenght>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}


let h2 = document.getElementById("Myh2");
const passlength = 6;
const includeLower = true;
const includeUpper = true;
const includeSpecial = true;
const includeNum = true;

function generatePassword(length, includeLower, includeUpper, includeNum, includeSpecial){
    const lowerchar = 'abcdefghijklmnopqrstuvwxyz';
    const Upperchar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const Numberchar = '0123456789';
    const Specialchar = '!@#$%^&*()_+-=';
    let allowedChar = '';
    let password = '';

    allowedChar += includeLower ? lowerchar : "";
    allowedChar += includeUpper ? Upperchar : "";
    allowedChar += includeNum ? Numberchar : "";
    allowedChar += includeSpecial ? Specialchar : "";

    if(length <= 0) return `Password Length should be greater than 1`;
    if(allowedChar.length === 0) return `Atleast one set of char should be included`;

    for(let i = 1; i<=length; i++){
        let randomindex = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[randomindex];
    }
    h2.textContent = password;
}



// const pass = password(passlength, includeLower, includeUpper, includeNum, includeSpecial);
// console.log(`Generated Password: ${pass}`);
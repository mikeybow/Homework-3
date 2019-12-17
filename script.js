var hasBigLetter = false;
var hasSmallLetter = false;
var hasNumber = false;
var isLength = false;
var hasSpecial = false;
var hasSpecialCaseLetter = '!"()*+,-./:;<=>?@[]^_`{|}~';

function validateLength(charLength) {
    if (charLength.length >= 8 && charLength.length <= 128) {
        return isLength = true;
    };
};

function validateCapital (passwordCap) {
    for(var i = 0; i < passwordCap.length; i++) {
        if(passwordCap[i] === passwordCap[i].toUpperCase() && /^[a-zA-Z]/.test(passwordCap[i])) {
            return hasBigLetter = true;
        };
    };
};

function validateLower (passwordLower) {
    for(var j = 0; j < passwordLower.length; j++) {
        if(passwordLower[j] === passwordLower[j].toLowerCase() && /^[a-zA-Z]/.test(passwordLower[j])) {
            return hasSmallLetter = true;
        };
    };
};

function validateNumber (passwordNumber) {
    for(var k = 0; k < passwordNumber.length; k++) {
        if(!isNaN(parseInt(passwordNumber[k]))) {
            return hasNumber = true;
        };
    };
};


function validateSpecialChar (passwordSpecialChar,special) {
    for(var l = 0; l < passwordSpecialChar.length; l++) {
        for(var m = 0; m < special.length; m++) {
            if(passwordSpecialChar[l] === special[m]) {
                return hasSpecial = true;
            };
        };
    };
};

document.querySelector(".GeneratePasswordButton").addEventListener('click', function() {
    var userPassword = document.querySelector('#userPass').value;
    validateCapital(userPassword);
    validateLower(userPassword);
    validateNumber(userPassword);
    validateSpecialChar(userPassword, hasSpecialCaseLetter);
    validateLength(userPassword);
    
    console.log(hasBigLetter, hasSmallLetter, hasNumber, hasSpecial, isLength)

    console.log(userPassword);
    
    if(hasBigLetter && hasSmallLetter && hasNumber && hasSpecial && isLength) {
        alert('You have entered a valid password')
    }
    else {
        alert('You have entered a invalid password')
    }

    hasBigLetter = false;
    hasSmallLetter = false;
    hasNumber = false;
    hasSpecial = false;
    isLength = false

});

document.querySelector(".CopytoClipboard").addEventListener('click', function() {
    var copyText = document.querySelector('#userPass');
    copyText.select();
    document.execCommand("copy");
});
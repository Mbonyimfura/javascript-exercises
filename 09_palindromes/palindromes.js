const palindromes = function (str) {
    const reverseString=str.toLowerCase().replace(/[^a-z0-9]/g,'')
    return reverseString.split('').reverse().join('')===reverseString
    };

// Do not edit below this line
module.exports = palindromes;

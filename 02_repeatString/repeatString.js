const repeatString = function(str,n) {
    if(n<0){
        return "ERROR"
    }
    let repeatString='';
        for(let i=0;i<n;i++){
    repeatString+=str;
        }
        return repeatString;
    };

// Do not edit below this line
module.exports = repeatString;

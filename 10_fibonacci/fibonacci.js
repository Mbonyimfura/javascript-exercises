const fibonacci = function(number) {
    if(number<0) return 'OOPS'
    let a=0,b=1, c;
    for(let i=2;i<=number;i++){
      c=a+b;
      a=b;
      b=c
    }
    return b
    };

// Do not edit below this line
module.exports = fibonacci;

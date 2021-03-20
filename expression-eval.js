// expresssion evaluation
// done

function exprEval(str) {
  let vStk = [];
  let oStk = [];

  function applyOP(a1,b1, op) {
    let a = parseInt(a1);
    let b = parseInt(b1);
    if(op == '/') {
      return a/b;
    } else if ( op == '*') {
      return a*b;
    } else if ( op == '-') {
      return a-b;
    } else {
      return a+b;
    }
  }

  function isOperator(itm) {
    let op = {
      "+": 2,
      "-": 2,
      "/": 3,
      "*" : 3
    }
    return op[itm];
  }

  function isDigit(n) {
    if ( n >= "0" && n <= "9") {
      return true;
    }
    return false;
  }


  for (let i =0; i < str.length; i++) {
    //console.log(str[i],'===> str[i]');
      if (str[i] == ' ') {
        continue;
      } else if ( str[i] == "(") {
        oStk.push(str[i]);
      }  else if ( str[i] == ")") {
          console.log( oStk, 'ooostacks');
          while (oStk.length && oStk[oStk.length -1] != "(" ) {
            var a = vStk.pop();
            var b = vStk.pop();
            var op = oStk.pop();
            var result = applyOP(b,a,op);
            vStk.push(result);
             console.log( oStk, 'ooostacks');
          };
          
          oStk.pop();
      }

      else if ( isOperator(str[i]) ) {
        if (oStk.length && isOperator(oStk[oStk.length -1 ]) >=  isOperator(str[i])) {
            var a = vStk.pop();
            var b = vStk.pop();
            var op = oStk.pop();
            var result = applyOP(b,a,op);
            vStk.push(result);
            oStk.push(str[i]);
        } else { 
            oStk.push(str[i]);
        }
      } else {
        let num = str[i];
        while(isDigit(str[i + 1])) {
          num = num + str[i + 1];
          i++;
        }
        vStk.push(num);
      }
      console.log(vStk, oStk, 'stacks');
  }

  //console.log(vStk, oStk, 'stacks');
  while (oStk.length) {
    var a = vStk.pop();
    var b = vStk.pop();
    var op = oStk.pop();
    var result = applyOP(b,a,op);
    vStk.push(result);
  }
  return vStk[0];
};



const result = exprEval("(2000 - 3000) + (5000 + 8000)");

console.log(result);
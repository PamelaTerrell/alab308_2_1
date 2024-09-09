let x = 5;
let y = 4;
let operand = "*";
switch (operand) {
   case "+":
       console.log(x + y);
       break;
   case "-":
       console.log(x - y);
       break;
   case "*":
       console.log(x * y);
       break;
   case "/":
       console.log(x / y);
       break;
   default:
       console.log("Invalid Operand")
       break;
}
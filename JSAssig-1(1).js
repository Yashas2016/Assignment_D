 //What will the code below output to the console and why ?

console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" -"B" + 2);

// + --> acts as concatenation operation in the console.log that's console.log(1+"2") and. console.log(1+  +"2"  +3) --> 1+ concatenate with +"2" --> 1+2 =3 addition perform. 

//console. log("A"-"B"+"2") --> The output will be "NaN2" as in JavaScript if you are trying to use any operator expect "+" on string ( means " - ",        " / ", " * " ) then it will display "NaN". And if you used "+" then it will concatenate two string as "+" means concatenation. So "A"-"B" will be "NaN" and concate(+) 2 will produce "NaN2"





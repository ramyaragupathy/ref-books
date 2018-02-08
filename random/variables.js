/*
- The first character must be an ASCII letter (either uppercase or lowercase), or an underscore (_) character. 
- A number cannot be used as the first character.
- Subsequent characters must be letters, numbers, or underscores (_).
- The variable name must not be a reserved word.
*/


//var 123 = 'yes'; //syntaxerror: Unexpected number
//var he llo ='yes'; //syntaxerror: Unexpected identifier
//var he/llo ='yes'; //syntaxerror: Unexpected token /
var he;llo ='yes'; 
//console.log(he;llo); //syntaxerror: missing ) after argument list
console.log(he); //undefined
//console.log(she);// Reference error: she is not defined
console.log(llo); // yes
//var h&t; //syntaxerror: Unexpected token &
var _hello;

var q= `what
gets
printed out 
of this?`;
console.log(q);

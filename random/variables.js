/*
- The first character must be an ASCII letter (either uppercase or lowercase), 
or an underscore (_) character. 
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

var num = 100;
var str = `Does this replace 'num' with ${num}?`
console.log(str);

console.log('AAAA'<'Z'); //true



var a = {
  num: 0,
  valueOf: function() {
    return this.num += 1
  }
};
const equality = (a==1 && a==2 && a==3);
console.log(equality); // true
const reverseEquality = (a==3 && a==2 && a==1);
console.log(reverseEquality); // false

var b = 0;

function valueOf(num){
	return num += 1;
}
 var checkVar = (a==1 && a==2 && a==3);
 console.log(equality);
// var aﾠ = 1;
// var a = 2;
// var ﾠa = 3;
// if(aﾠ==1 && a== 2 &&ﾠa==3) {
//     console.log("Why hello there!")
// }


// var a_ = 1;
// var a = 2;
// var _a = 3;
// if(a_==1 && a== 2 &&_a==3) {
//     console.log("Why hello there!")
// }

// for(let i = 0; i<10; i++) {
//   console.log(i) //0,1,2,3,4,5,6,7,8,9
// }
// console.log(i) //undefined

// var i
// i = 34
// for(let i =0; i<4; i++){
//  console.log(i) // 0,1,2,3
// }
// console.log(i) //34


// const dog={
//   age: 3
// }
// dog.age = 5
// //dog = { name: 'biko'} //error: assignment to constant variable not possible


// const multiplier = 3.4
// discount = 5.6 // this will throw an error
// //[23, 56, 67].map((num)=> num * discount)


console.log(Math.max('r','z')); //NaN
console.log(Math.max('r','a',1));//NaN
console.log(Math.max(1));//1

var num = 5;
var anotherNum = String(num);
var yetAnotherNum = Boolean(num);
console.log(typeof anotherNum); //string
console.log(yetAnotherNum); //true
console.log(typeof yetAnotherNum); //boolean


console.log(Number('abc'));//NaN








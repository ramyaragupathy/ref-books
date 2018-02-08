var checkZero = 0;
var checkUndefined;
var checkNull = null;
var checkStr = '';

if(!checkZero){
	console.log('0 is false');
}

if(!checkUndefined){
	console.log('undefined is false');
}

if(!checkNull){
	console.log('null is false');
}

if(!checkStr){
	console.log('"" is false');
}


console.log("1" || "2"); //1
console.log("0" || "2"); //0
console.log(0 || "2"); //2, because number 0 is false
console.log("" || "2"); //2, because "" is false
console.log("1" && "2"); //2
console.log("0" && "2"); //2
console.log(0 && "2"); //0, because number 0 is false
console.log("" && "2"); //"", because "" is false
console.log(1 && 2); //2
console.log(2 && (10 * 10 > 50)); //true


console.log(!false); //true
var testBool = !( false );
console.log(testBool); //true
testBool = ! ( false && true );
console.log(testBool) //true

console.log(1+ 1 == 2 && 10 * 10 > 50); //true *,+,>,&&
console.log(1+ 1 == 5 && 10 * 10 > 50); //false
console.log(1+ 1 == 1 && 10 * 10 > 50); //false
console.log(2 && 10 * 10 > 50); //true *,>,&&
console.log(100 == 1 && 10 * 10 > 50); //false *,>,&&,==
console.log(100 == 100 * 10 > 50 && 100); //false *,>,&&,==


console.log(1 == (100 * 10 > 50) && 100); //100
console.log(1 == (100 && 10) * 10 > 50); //true operator precedence(),*,>,==

console.log(2 == true); //false
console.log(true == 2); //false



/*Write a function countBs that takes a string as its only argument and 
returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except 
it takes a second argument that indicates the character that is to be counted 
(rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

function countChar(str, char){
	if(char === undefined){
		return 'Please provide a character value for count';
	} else{
		var length = str.length;
		var count = 0;
		for(i=0;i<length;i++){
			if(str[i] === char){
				count++;
			}
		}
		return count;
	}
	
}

console.log(countChar("BBC", 'D')); //0
console.log(countChar("BBC", 'C')); //1
console.log(countChar("BBC", 'B')); //2
console.log(countChar("BBC", )); //'Please provide a character value for count
console.log(countChar("BBC")); //'Please provide a character value for count

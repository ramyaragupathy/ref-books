/*Write a function countBs that takes a string as its only argument and returns a number that indicates 
how many uppercase “B” characters are in the string.*/

function countBs(str){
	var length = str.length;
	var count = 0;
	for(i=0;i<length;i++){
		if(str[i] === 'B'){
			count++;
		}
	}
	return count;
}

console.log(countBs("BBC")); //2

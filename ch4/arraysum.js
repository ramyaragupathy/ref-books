/*Write a range function that takes two arguments, start and end, and 
returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that 
indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, 
corresponding to the old behavior. 

The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
 */


function range(start, end, step){
	var arr = [];
	if (step === undefined || step === 0){
		step = 1;
	} 
	if(end>start){
		if(step<0){
			step = -step;
		}
		for(i=start;i<=end;i += step){
			arr.push(i);
		}
		return arr;
	} else if (start >end){
		if(step>0){
			step = -step;
		}
		for(i=start;i>=end;i += step){
			arr.push(i);
		}
		return arr;
	}
	
}


function sum(arr){
	var sum = 0;
	arr.forEach(function(item){
		sum+=item;
	});
	return sum;
}

console.log(range(0,10)); // [0,1,2,3,4,5,6,7,8,9,10]
console.log(range(-1,10)); // [-1,0,1,2,3,4,5,6,7,8,9,10]
console.log(range(-1,-5)); // [-1,-2,-3,-4,-5]
console.log(range(-5,-19)); // [-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19]
console.log(range(-10,0)); //[-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0]
console.log(range(-10,-1)); //[-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]
console.log(range(0,10,2)); // [0,2,4,6,8,10]
console.log(range(-1,10,3)); // [-1,2,5,8]
console.log(range(-1,-5,0)); // [-1,-2,-3,-4,-5]
console.log(range(-5,-19)); // [-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19]
console.log(range(-10,0,0)); //[-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0]
console.log(range(-10,-1,2)); //[-10,-8,-6,-4,-2]
console.log(range(5,2)); // [5,4,3,2]
console.log(range(5,2,2)); // [5,3]
console.log(range(5,2,-2)); // [5,3]
console.log(range(0,10,-2)); //[0,2,4,6,8,10]

console.log(sum(range(0,10))); // 55
console.log(sum(range(-1,10))); // 54
console.log(sum(range(-1,-5))); // -15
console.log(sum(range(-5,-19))); // -180
console.log(sum(range(-10,0))); // -55
console.log(sum(range(-10,-1))); // -55
console.log(sum(range(0,10,2))); // 30
console.log(sum(range(-1,10,3))); // 14
console.log(sum(range(-1,-5,0))); // -15
console.log(sum(range(-5,-19))); // -180
console.log(sum(range(-10,0,0))); // -55
console.log(sum(range(-10,-1,2))); // -30
console.log(sum(range(5,2))); // 14
console.log(sum(range(5,2,2))); // 8
console.log(sum(range(5,2,-2))); // 8
console.log(sum(range(0,10,-2))); // 30

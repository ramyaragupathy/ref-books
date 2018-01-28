
function deepEqual(obj1, obj2){
    if(obj1 === null || obj2 === null){
    	return false;
    } else if (obj1 === obj2){
		//console.log('same to same');
		return true;
	}  else {
		//console.log(Object.keys(obj1).length)
		//console.log(Object.keys(obj2).length)
		if(Object.keys(obj1).length === Object.keys(obj2).length){

			//console.log('same number of properties')
        	for(var property in obj1){
        		//console.log(obj1[property]);
        		//console.log(obj2[property]);
        	 	if(!(property in obj2) || !deepEqual(obj1[property], obj2[property])){
        	 		return false;
        	 	} else{
        	 		return true;
        	 	}
      			
       	 }
    	} else{
    		return false;
    	}

	}

	

}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj,obj));
console.log(deepEqual(null,null));
console.log(deepEqual(null,obj));
console.log(deepEqual(obj,null));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual({'name':1}, {'name':123}));
console.log(deepEqual({'name':1}, {'name':1}));
console.log(deepEqual({'name':'ramya'}, {'name':123}));
console.log(deepEqual({'name':'ar'}, {'name':{123:123,212:212}}));

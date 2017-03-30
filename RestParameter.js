

	function getArrLength(...myArr){
		var result1=myArr.length; // Assign myArr length to result1 
		console.log (result1);
	}


	function multiplyByTwo(...myArr){
		for(x in myArr){				//Loop through the myArr and multiply each element by 2
			console.log(myArr[x]*2);
		}
	}

	function sortRestArgs(...myArr){
		var result2= myArr.sort();		//Sort myArr and assign the sorted array to result2
		console.log(result2);
	}

		
	getArrLength(2,3,4); // Logs 3
	multiplyByTwo(1,2,3,4); // Logs 2 4 6 and 8
	sortRestArgs(1,9,7,8,2); // [1, 2, 7, 8, 9]
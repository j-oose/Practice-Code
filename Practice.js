var practice = [[1,2],[3,4]];
console.log(practice)

var array = [1,2,3,4,5,6,7]

//What does shift do:  It removes the first element from the array
// console.log(array.shift());


//Each Function - A function that loops through a collection
//takes in a callback
//if that collection is an array then loop through it and invoke the callback
//if that collection however is an object then you looop through the object
//Invoking it's key value pairs.


var each = function(collection, callback) {
	if(Array.isArray(collection)) {
		for(var i = 0; i < collection.length; i++) {
			callback(collection[i],i);
		}
	} else if (typeof collection === 'object') {
		for(var key in collection) {
			callback(collection[key], key)
		}
	}
}


var map = function(collection, callback) {
	var results = [];
	each(collection, function(element, index) {
		results.push(callback(element, index));
	})
	 return results;
}

var filter = function(collection,test) {
	var results = [];
	each(collection, function(element, index) {
		if(test(element)) {
			results.push(element)
		}
	})
	return results;
}


var testArray = [1,2,3,4,6,8,10,12,31,32,44,66,78,80,90,101]
var newArray = [1,2,3,4]
var testArrayTwo = ['h','e','l','l','o']
var testString = "coderbyte"

var evenNumbers = function(array) {
	return filter(array, function(values) {
		if(values %2 === 0) {
			return values
		}
	});
};

console.log(evenNumbers(testArray))

console.log(evenNumbers(testArray).length);

var reverseArray = function(array) {
	var newArr = [];
	each(array,function(element) {
		newArr.unshift(element);
	
	});
	return newArr.join();
};

console.log(reverseArray(testArray));

var reverseArrayTwo = function(array) {
	var newbieArr = [];
	for(var i = 0; i < array.length; i++) {
		newbieArr.unshift(array[i]);
	};
	return newbieArr.join("");
};

console.log(reverseArrayTwo(testString));


var map = function(collection, callback) {
	var results = [];
	each(collection, function(element, index) {
		results.push(callback(element, index)) 

		});
		return results;
	};


var filter = function(collection, callback) {
	var results = [];

		each(collection, function(element, index) {
			if(test(element)) {	
			results.push(element)
			};
	});

		return results;

};

// var reduce = function(collection, callback, startValue) {
// 	each(collection, function(element) {
// 		startValue = callback(startValue, element)
// 	});	
// 	return startValue;
// }

// var message = ["reducing","is","simple"];

// console.log(reduce(message));

var countries = {
    China: 1371980000,
    India: 1276860000,
    'United States': 321786000,
    Indonesia: 255461700,
    Brazil: 204873000,
    Pakistan: 190860000
};
countries = Object.keys(countries).filter(function(key) {
    // Countries under 1000000000
    return countries[key] <= 1000000000;
});
console.log(JSON.stringify(countries));

var array = [1,2,[[3,3]],4,4,[5],5]


var flatten = function(nestedArray) {
	var newArray = [];

var flatArr = function(array) {
	each(array, function(element) {
		if(!Array.isArray(element)) {
			newArray.push(element);
		} else {
			flatArr(element);
		}
	});
};

flatArr(nestedArray);
return newArray;

};


console.log(flatten(array));

//Using the JavaScript language, have the function LetterChanges(str) 
//take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
//Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 


// function LetterChanges(str) { 

//   // code goes here  
//   return str; 
         
// }
   
// // keep this function call here 
// LetterChanges(readline());                            

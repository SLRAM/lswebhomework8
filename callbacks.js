/*  For today's homework your job is to write functions
 *  that make the following invocations work.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  var greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
 */


// Write a function called firstItem that passes the first item of the given array to the callback function

var foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

function firstItem(arr,cb) {
	var item= arr[0];
	cb(item);
}

firstItem(foods, (firstItem) => {
  console.log('The first item is ' + firstItem);
});

// Write a function called getLength that passes the length of the array into the callback

function getLength(arr,cb) {
	var length= arr.length;
	cb(length);
}

getLength(foods, (length) => {
  console.log('The length of the array is ' + length);
});

// Write a function called last which passes the last item of the array into the callback

function last(arr,cb) {
	var end= arr[arr.length-1];
	cb(end);
}

last(foods, (lastItem) => {
  console.log('The last item in the array is ' + lastItem);
});

// Write a function called sumNums that adds two numbers and passes the result to the callback

function sumNums(num1,num2,cb) {
	var add= num1+num2;
	cb(add);
}

sumNums(5, 10, (sum) => {
  console.log('The sum is ' + sum);
});

// Write a function called multiplyNums that multiplies two numbers and passes the result to the callback

function multiplyNums(num1,num2,cb) {
	var multy= num1*num2;
	cb(multy);
}

multiplyNums(5, 10, (product) => {
  console.log('The product is ' + product);
});

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false

function contains(arr,item,cb) {
	var find= arr.indexOf(item)
	cb(find);
}

contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

function removeDuplicates(arr, cb) {
	var newFoodArr = [];
	for (var i = 0; i < arr.length; i+=){
		if(newFoodArr.indexOf(arr[i]) == -1) {
			newFoodArr.push(arr[i]);
		}
		else{
			var index = newFoodArr.indexOf(arr[i]);
			console.log(arr[i]);
			newFoodArr.splice(index,1);
		}
	}
	cb(newFoodArr);
};

removeDuplicates(foods, (uniqueFoods) => {
  console.log('foods with duplicates removed: ' + uniqueFoods);
});

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.

function forEach(arr,cb) {
	for(var i=0; i<arr.length; i+=1) {
		var value= arr[i];
		var index=i;
		cb(value,index)

	}

};

forEach(foods, (value, index) => {
  console.log(`${value} is at index ` + index);
});
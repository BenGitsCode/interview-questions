/**
You have an array of negative and positive numbers. Please move all negative numbers to the left and all positive numbers to the right without disrupting the original order.
example input: [-6, 2, 1, 2, -10, -4, 8]
example output: [-6, -10, -4, 2, 1, 2, 8]
**/

// iteration

// less than or greater than 0 if /else check

// push into new array

// do negatives first to keep with negs on left pos on right requirement

//Decarling arrays needed
var array = [-6, 2, 1, 2, -10, -4, 8];
var newArr = [];
var posArr = [];
var negArr = [];


for (var i = 0; i < array.length; i++) {
    //console.log(array[i]);
    if (array[i] < 0) {
     newArr.push(array[i]);
    }
    console.log(newArr);
}

for (var i = 0; i < array.length; i++) {
  //console.log(array[i]);
  if (array[i] > 0) {
   newArr.push(array[i]);
  }

  console.log(newArr);
}


/* Refactored to use only one for loop

for (var i = 0; i < array.length; i++) {
 if (array[i] < 0) {
  posArr.push(array[i]);
 } else {
  negArr.push(array[i]);
 }
 newArr = posArr.concat(negArr);
 console.log(newArr);
}

*/








/*============talk through problem============

Desccribe how you would go about creating a function to select k random items out of an input array of size n. The input array contains only unique items, and the result set should be only unique items.
 k <= n

int[] input = {-6, 2, 1, -10, -4, 8};
int k = 3;
possible output: {2, -10, 8}  NOT {2, -10, 2}

*/

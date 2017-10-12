function maxMinProduct(operations, x) {
  let elements = []
  // this will be the final solution array
  let arr = []

  if (operations.length !== x.length) {
    console.error('operations and x are different lengths')
    return false
  }

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === 'push') {
      arr.push(x[i])
    } else if (operations[i] === 'pop') {
      let currentIndex = arr.findIndex(element => {
        if (element === x[i]) {
          return x[i]
        }
        console.log('Element is => ', x[i])
      })
      console.log('currentIndex is ', currentIndex)
      arr.splice(currentIndex, 1)

      console.log('arr inside else if => ', arr)
    }
    let minimum = Math.min(...arr)
    console.log('...arr at jump ', ...arr)

    let maximum = Math.max(...arr)
    let product = minimum * maximum

    console.log('min is => ', minimum, 'max is => ', maximum)
    elements.push(product)
    // push product in each loop to elements
  }
  console.log('final elements array is => ', elements)
  return elements
}

let testArray = [28, 3, 8, 2]
// output [2, 3, 8, 28]
// output [56, ]
let testOps = ['push', 'pop', 'pop', 'push']
// maxMinProduct(testOps, testArray)

let ops = ['push', 'push', 'pop', 'push', 'pop', 'push', 'push', 'pop']
let newArr = [4, 2, 2, 5, 4, 17, 20, 17]
maxMinProduct(ops, newArr)

// If I had been using git when I started this, these would be in previous
// commits instead of a messy graveyard of comments and annotations.

// function maxMin(operations, x) {
//   let elements = [];
//   let arr = [];

//   for (var i = 0; i < operations.length; i++) {
//     let banana = arrr.operations[i];
//     console.log('banana is ', banana);

//     if (operations[i] === 'push') {
//       arrr.push(x[i]);
//     } else {
//       arrr.pop(x[i]);
//     }
//     // find min and max indices multiplay their values and push product into elements
//     let small = arrr.Math.min();
//     let big = arrr.Math.max();
//     let product = big * small;
//     elements.push(product);
//   }
//   return elements;
// }

// maxMin(['push', 'pop', 'push', 'push'], [1, 28, 3, 62]);

// operations is an array like ['push', 'push', 'push', 'pop']
// x is an array
// x.length is  === operations.length

// let elements = [1, 4, 6 ,9,2,5, 8,1,3]
// let queue = []
// queue the placeholder array for push/pop

// console.log(sorted)

// function push(x) {
//   return queue.push(x);
// }

// function pop(x) {
//   let index = queue.findIndexOf(x);
//   return queue.splice(index, 1);
// }

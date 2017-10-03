function maxMin(operations, x) {
  let elements = [];
  let arr = [];

  for (var i = 0; i < operations.length; i++) {
    let banana = arrr.operations[i];
    console.log('banana is ', banana);

    if (operations[i] === 'push') {
      arrr.push(x[i]);
    } else {
      arrr.pop(x[i]);
    }
    // find min and max indices multiplay their values and push product into elements
    let small = arrr.Math.min();
    let big = arrr.Math.max();
    let product = big * small;
    elements.push(product);
  }
  return elements;
}

maxMin(['push', 'pop', 'push', 'push'], [1, 28, 3, 62]);

// operations is an array like ['push', 'push', 'push', 'pop']
// x is an array
// x.length is  === operations.length

// let elements = [1, 4, 6 ,9,2,5, 8,1,3]
// let queue = []
// queue the placeholder array for push/pop

// console.log(sorted)

function push(x) {
  return queue.push(x);
}

function pop(x) {
  let index = queue.findIndexOf(x);
  return queue.splice(index, 1);
}

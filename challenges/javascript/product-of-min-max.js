function maxMin (operations, x) {
  var elements = []
  var final = []


  for (var i = 0; i < operations.length; i++) {
      final.operations[i]
        
    if (operations[i] == 'push') {
      final.push(x[i])
    }        else {
      final.pop(x[i])
    }
     // find min and max indices multiplay their values and push product into elements
      let small = final.Math.min()
      let big = final.Math.max()
      let product = big * small
      elements.push(product)
    }
  return elements
}

// operations is an array like ['push', 'push', 'push', 'pop']
// x is an array
// x.length is  === operations.length

// let elements = [1, 4, 6 ,9,2,5, 8,1,3]
// let queue = []
// queue the placeholder array for push/pop

// console.log(sorted)

function push (x) {
  return queue.push(x)
}

function pop (x) {
  let index = queue.findIndexOf(x)
  return queue.splice(index, 1)
}
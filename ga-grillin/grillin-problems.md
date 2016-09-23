#### Coding Questions:

*Question: What is the value of `foo`?*
```javascript
var foo = 10 + '20';
```

*20. Permutations
Question: How would you create all permutation of a string?

Answer: This could be a tough one based on you level of knowledge about algorithm.

```javascript
function permutations(str){
var arr = str.split(''),
    len = arr.length, 
    perms = [],
    rest,
    picked,
    restPerms,
    next;

    if (len == 0)
        return [str];

    for (var i=0; i<len; i++)
    {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);

        restPerms = permutations(rest.join(''));

       for (var j=0, jLen = restPerms.length; j< jLen; j++)
       {
           next = picked.concat(restPerms[j]);
           perms.push(next.join(''));
       }
    }
   return perms;
};
permutations("banana");

Explanation:

Idea: Idea is very simple. We will convert the string to an array. from the array we will pick one character and then permute rest of it. After getting the permutation of the rest of the characters, we will concatenate each of them with the character we have picked.
step-1 First copy original array to avoid changing it while picking elements
step-2 Use splice to removed element from the copied array. We copied the array because splice will remove the item from the array. We will need the picked item in the next iteration.
step-3 [1,2,3,4].splice(2,1) will return [3] and remaining array = [1,2,4]
step-4 Use recursive method to get the permutation of the rest of the elements by passing array as string
step-5 Finally, concat like a+permute(bc) for each

write a sum() function that accepts any number of arguments, and returns their sum. Then, ask them to use that function (without modification) to sum all the values in an array. They should write a function that looks like this:

```javascript
function sum() {
  var i, l, result = 0;
  for (i = 0, l = arguments.length; i < l; i++) {
    result += arguments[i];
  }
  return result;
}
sum(1,2,3); // 6
```
And they should invoke it on your array like this (context for apply can be whatever, I usually use null in that case):

```javascript
var data = [1,2,3];
sum.apply(null, data); // 6
```

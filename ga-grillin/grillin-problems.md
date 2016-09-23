# Table of Contents
- [String type coercion](String type coercion)
- [Quick Brown Fox 3d arrays](Quick Brown Fox 3d arrays)
- [Permutations](## Permutations)
- [sum function](#sum)
- [Check Prime](#check prime)

## Table of Contents

- [Background](#background)
- [Installation](#installation)
- [Usage](#usage)
  - [Generator](#generator)
  - [Badge](#badge)
  - [Example Readmes](#example-readmes)
- [Contribute](#contribute)
- [License](#license)


## Coding Questions:

## String type coercion
#### What is the value of `foo`?*
```javascript
var foo = 10 + '20';
```
## Quick Brown Fox 3d arrays


You're given an array of arrays of words, e.g.:
```javascript
[['quick', 'lazy'], ['brown', 'black', 'grey'], ['fox', 'dog']].
```

Write a generalized function that prlets all combinations of one word from the first vector, one word from the second vector, etc.
The solution may not use recursion.
NOTE: the number of vectors and number of elements within each vector may vary.

For the input above, it should prlet (in any order):
quick brown fox
quick brown dog
quick black fox
quick black dog
...
lazy grey dog


## Permutations
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
```

#### Explanation:

Idea: Idea is very simple. We will convert the string to an array. from the array we will pick one character and then permute rest of it. After getting the permutation of the rest of the characters, we will concatenate each of them with the character we have picked.
step-1 First copy original array to avoid changing it while picking elements
step-2 Use splice to removed element from the copied array. We copied the array because splice will remove the item from the array. We will need the picked item in the next iteration.
step-3 [1,2,3,4].splice(2,1) will return [3] and remaining array = [1,2,4]
step-4 Use recursive method to get the permutation of the rest of the elements by passing array as string
step-5 Finally, concat like a+permute(bc) for each

## sum

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

## Check Prime

Question: How would you verify a prime number?

Answer: a prime number is only divisible by itself and - So, i will run a while loop and increase by 1. (look at the code example. If you dont get it. this is not your cake. do learn javaScript basics and come back.)

```javascript
function isPrime(n){
  var divisor = 2;

  while (n > divisor){
    if(n % divisor == 0){
     return false;
    }
    else
      divisor++;
  }
  return true;
}

> isPrime(137);
  = true
> isPrime(237);
  = false
```

### Interviewer: Can you make this better?

##### You: yes. the divisor are increased 1 at a time. after 3 i can increase by 2. if a number is divisible by any even number, it will be divisible by 2.

### Extra: if you dont have to increase the divisor up to the number. you can stop much earlier. let me explain it in the following steps (just seat back and read as many times as needed)

### Explanation
step-1: Any number will not be divisible by a number bigger than half of it. for example, 13 will never be divisible by 7, 8, 9 .. it could be as big as half of it for even number. for example, 16 will be divisible by 8 but will never be by 9, 10, 11, 12...
Decision: a number will never be divisible by a number bigger than half of its values. So, we dont have to loop 50%
step-2: Now, if a number is not divisible by 3. (if it is divisible by 3, then it wouldn't be a prime number). then it would be divisible any number bigger than the 1/3 of its value. for example, 35 is not divisible by 3. hence it will be never divisible by any number bigger than 35/3 will never be divisible by 12, 13, 14 ... if you take an even number like 36 it will never be divisible by 13, 14, 15
Decision: a number could be divisible by numbers 1/3 of its value.
step-3: For example u have the number 127. 127 is not divisible by 2 hence you should check upto 63.5. Secondly, 127 is not divisible by 3. So, you will check up to 127/3 approximately 42. It is not divisible by 5, divisor should be less than 127/5 approximately 25 not by 7. So, where should we stop?
Decision: divisor would be less than Math.sqrt (n)


### moar
Question: How would you remove duplicate members from an array?

Answer: will start a while looping and keep an object/ associated array. If i find an element for the first time i will set its value as true (that will tell me element added once.). if i find a element in the exists object, i will not insert it into the return array.

```javascript
function removeDuplicate(arr){
  var exists ={},
      outArr = [],
      elm;

  for(var i =0; i<arr.length; i++){
    elm = arr[i];
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm] = true;
   }
  }
  return outArr;
}

> removeDuplicate([1,3,3,3,1,5,6,7,8,1]);
  = [1, 3, 5, 6, 7, 8]

```


## string reverse
Question: How would you reverse a string in JavaScript?

Answer: I can loop through the string and concatenate letters to a new string

### try 1

```javascript
function reverse(str){
  var rtnStr = '';
  for(var i = str.length-1; i>=0;i--){
    rtnStr +=str[i];
  }
  return rtnStr;
}

reverse('you are a nice dude');
result = "edud ecin a era uoy"
```
Interviewer: You know concatenation performed well in modern browsers but becomes slow in older browsers like IE8. Is there any different way, you can reverse a string?

Answer: sure. i can use an array and also add some checking. if string is null or other than string this will fail. let me do some type check as well. Using this array is like using string buffer in some server side languages.

try 2

```javascript
function reverse(str){
  var rtnStr = [];
  if(!str || typeof str != 'string' || str.length < 2 ) return str;

  for(var i = str.length-1; i>=0;i--){
    rtnStr.push(str[i]);
  }
  return rtnStr.join('');
}
```

Interviewer: What is the run time complexity?

You: O(n)

Interviewer: Can you make this better?

You: I can loop through half of the index and it will save little bit. (this is kind of useless, might not impress interviewer)

try 3
```javascript
function reverse(str) {
  str = str.split('');
  var len = str.length,
      halfIndex = Math.floor(len / 2) - 1,
      revStr;
  for (var i = 0; i <= halfIndex; i++) {
    revStr = str[len - i - 1];
    str[len - i - 1] = str[i];
    str[i] = revStr;
  }
  return str.join('');
}
```
Interviewer: That works, but can u do it in a recursive way?

You: sure.

try 4
```javascript
function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}
```

try 5
Interviewer: Can you use any build in method to make it little cleaner?

You: yes.

```javascript
function reverse(str){
  if(!str || str.length <2) return str;

  return str.split('').reverse().join('');
}
```
try 6
Question: Can you make reverse function as string extension?

Answer: I need to add this function to the String.prototype and instead of using str as parameter, i need to use this

```javascript
String.prototype.reverse = function (){
  if(!this || this.length <2) return this;

  return this.split('').reverse().join('');
}

> 'abc'.reverse();
  = 'cba'
```

rds
Question: How would you reverse words in a sentence?

Answer: You have to check for white space and walk through the string. Ask is there could be multiple whitespace.


```javascript
function reverseWords(str){
 var rev = [],
     wordLen = 0;
 for(var i = str.length-1; i>=0; i--){
   if(str[i]==' ' || i==0){
     rev.push(str.substr(i,wordLen+1));
     wordLen = 0;
   }
   else
     wordLen++;
 }
 return rev.join(' ');
}
```

A quick solution with build in methods:

```javascript
function reverseWords(str){
  return str.split(' ').reverse();
}
```


Question: If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reverse.

Answer: To do this, i have to do both string reverse and word reverse.

```javascript
function reverseInPlace(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

> reverseInPlace('I am the good boy');
 = "I ma eht doog yob"
```
Interviewer: ok. fine. can you do it without using build in reverse function?

you: (you mumbled): what the heck!!

```javascript
//sum two methods.
//you can simply split words by ' '
//and for each words, call reverse function
//put reverse in a separate function


//if u cant do this,
//have a glass of water, and sleep
```


### reverse in place
Question: If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reverse.

Answer: To do this, i have to do both string reverse and word reverse.

```javascript
function reverseInPlace(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

> reverseInPlace('I am the good boy');
 = "I ma eht doog yob"
```

#### Interviewer: ok. fine. can you do it without using build in reverse function?

### you: (you mumbled): what the heck!!


//sum two methods.
//you can simply split words by ' '
//and for each words, call reverse function
//put reverse in a separate function


//if u cant do this,
//have a glass of water, and sleep

## First non repeating char (for in loop)
Question: How could you find the first non repeating char in a string?

Answer: You must ask follow up questions.

Clarification: Is it case sensitive?

Interviewer: interviewer might say no.

Clarification: is it very long string or couple hundred?

Interviewer: Why does that matter

you: for example, if it is a very long string say a million characters and i want to check whether 26 English characters are repeating. I might check whether all characters are duplicated in every 200 letters (for example) other than looping through the whole string. this will save computation time.

Interviewer: For simplicity, you string is "the quick brown fox jumps then quickly blow air"

Clarification: (silly question) ascii or unicode.

```javascript
function firstNonRepeatChar(str){
  var len = str.length,
      char,
      charCount = {};
  for(var i =0; i<len; i++){
    char = str[i];
    if(charCount[char]){
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  for (var j in charCount){
    if (charCount[j]==1)
       return j;
  }
}

firstNonRepeatChar('the quick brown fox jumps then quickly blow air');
 result = "f"
```

## Remove duplicate char
Question: How will you remove duplicate characters from a sting?

#### You: This is very similar to first non repeating char. You will asks similar question. Is it case sensitive.

#### If interviewer says, this is case sensitive then life become easier you. If he says no. you can either use string.toLowercase() to make whole string lower. he might not like it. because return string will not posses the same case. So

```javascript
function removeDuplicateChar(str){
  var len = str.length,
      char,
      charCount = {},
      newStr = [];
  for(var i =0; i<len; i++){
    char = str[i];
    if(charCount[char]){
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  for (var j in charCount){
    if (charCount[j]==1)
       newStr.push(j);
  }
  return newStr.join('');
}
 removeDuplicateChar('Learn more javascript dude');
  result "Lnmojvsciptu"
```

check palindrome
Question: How will you verify a word as palindrome?

Answer: if you reverse a word and it becomes same as the previous word, it is called palindrome.

```javascript
function isPalindrome(str){
  var i, len = str.length;
  for(i =0; i<len/2; i++){
    if (str[i]!== str[len -1 -i])
       return false;
  }
  return true;
}

> isPalindrome('madam')
  = true
> isPalindrome('toyota')
  = false
```
#### or you can use build in method

```javascript
function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}
```
Note:this has one problem. It is not guaranteed that for in loop will be executed in order.

For case insensitive: when u r setting property of charCount or increase counter, just make the char.toLowerCase(). or you can do something fancy with charCode (if you can deal with it.)

#### inRuby

```ruby
pal = "Never a foot too far, even."
class String
  def palindrome?
    letters = self.downcase.scan(/\w/)
    letters == letters.reverse
  end
end
pal.palindrome? #=> true
```

```ruby
def check_palindromic(variable)
  if variable.reverse == variable #Check if string same when reversed
    puts "#{ variable } is a palindrome."
  else # If string is not the same when reversed
    puts "#{ variable } is not a palindrome."
  end
end
```

#### recursive solution string indexing

```ruby
def palindrome?(string)
  if string.length == 1 || string.length == 0
    true
  else
    if string[0] == string[-1]
      palindrome?(string[1..-2])
    else
      false
    end
  end
end
```

```ruby
def is_palindrome(value)
 value.downcase!

 # Reverse the string
 reversed = ""
 count = value.length

 while count > 0
  count -= 1
  reversed += value[count]
 end
# Instead of writing codes for reverse string
# we can also use reverse ruby method
# something like this value == value.reverse
if value == reversed
  return "#{value} is a palindrom"
 else
  return "#{value} is not a palindrom"
 end
end

puts "Enter a Word"
a = gets.chomp
p is_palindrome(a)
```
## Duplicates from two lists
```javascript
var array1 = ['12','1','10','19','100'];
var array2 = ['12','10','19'];
```
I need to a method to get the unique from two arrays and put them in array3 Array3 should be -: var array3 = ['1','100'];

```javascript
var array3 = array1.filter(function(obj) { return array2.indexOf(obj) == -1; });
```
```javascript
var unique = [];
for(var i = 0; i < array1.length; i++){
    var found = false;
    for(var j = 0; array2.length; j++){
     if(array1[i] == array2[j]){
      found = true;
      break;
    }
   }
   if(found == false){
   unique.push(array1[i]);
  }
}
```
```javascript
var array1 = ['12','1','10','19','100'];
var array2 = ['12','10','19'];
var o = {};
for(var i in array1) {
    o[i] = 1;
}
for(var i in array2) {
    o[i] = 0;
}
var array3 = [];
for(var i in o) {
    if(o[i] == 1) {
        array3.push(i);
    }
}
```

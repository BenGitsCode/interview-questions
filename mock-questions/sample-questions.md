Whiteboarding Questions

Anagrams

An anagram is a word formed by rearranging the letters of another, like "topside" and "deposit". In some cases, there might be as many (or more) anagrams than there are characters, like "post", "spot", "stop" and "tops".

Write a program to find all of the anagrams in a dictionary in which there are at least 4 letters in the word and at least as many anagrams as there are letters.

The dictionary will be a file on disk with one line per word. Your operating system likely already has such a file in /usr/dict/words or /usr/share/dict/words.

The output produced by your code should be in this format:

emit, item, mite, time
merit, miter, mitre, remit, timer
reins, resin, rinse, risen, serin, siren
inert, inter, niter, retin, trine
inset, neist, snite, stein, stine, tsine


Oblique

The oblique function slices a matrix (2d array) into diagonals. The de-oblique function takes diagonals of a matrix, and reassembles the original rectangular one.
input for oblique
0 1 2 3 4 5
6 7 8 9 10 11
12 13 14 15 16 17
18 19 20 21 22 23
24 25 26 27 28 29
30 31 32 33 34 35

(and the output to de-oblique)
output for oblique
0
1 6
2 7 12
3 8 13 18
4 9 14 19 24
5 10 15 20 25 30
11 16 21 26 31
17 22 27 32
23 28 33
29 34
35

Given the input, produce the output.

Bonus question: Now do the reverse.


Magic Squares

A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15. Here's an example:
8 1 6
3 5 7
4 9 2

The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.

Write a function that, given a grid containing the numbers 1-9, determines whether it's a magic square. Use whatever format you want for the grid, such as a 2-dimensional array, or a 1-dimensional array of length 9, or a function that takes 9 arguments. You do not need to parse the grid from the program's input, but you can if you want to. You don't need to check that each of the 9 numbers appears in the grid: assume this to be true.
Example inputs/outputs
[8, 1, 6, 3, 5, 7, 4, 9, 2] => true
[2, 7, 6, 9, 5, 1, 4, 3, 8] => true
[3, 5, 7, 8, 1, 6, 4, 9, 2] => false
[8, 1, 6, 7, 5, 3, 4, 9, 2] => false
Optional bonus
Verify magic squares of any size, not just 3x3.

HTTP Requests

Consider the following JavaScript code that is executed in a browser:
function startAjaxQueue(){
for (var i = 0; i < 50; i++){
executeAjaxCallAsync();
}
};

Assuming that executeAjaxCallAsync() uses a standard XmlHttpRequest asynchronously to retrieve data from server, how many concurrent HTTP requests would you expect to be created by this loop?

Array Method

I give you a method, arrayMethod, that will return the first value in an array when you call the method. Each additional time you call arrayMethod it will return the next value in the array until it reaches the end of the array and returns null. After returning null, the next time you call arrayMethod it will return the first value in the array again and continue to move through the array until returning null again. Please note that arrayMethod can be used on any array of any size.

example of how this works:
A = [1, 2, 3, 4]

If you call arrayMethod on A twice it will return “2” from A
If you call arrayMethod a fifth time it will return “NULL”
If you call arrayMethod a sixth time it will return “1” from A
if you call arrayMethod an eighth time it will return “3” from A

Question 1.
I need you to write me a method that will return a random value from any array that arrayMethod is being applied to. Let’s call this randomValueMethod. You can answer in any language or pseudocode you want.

(solve the above before asking Question 2)

Question 2.
Revise your solution so that your randomValueMethod does not use arrays to store any data from arrayMethod (assuming you haven’t already done this in Question 1).

(solve the above before asking Question 3)

Question 3
Revise your solution again so that your randomValueMethod does not require arrayMethod to return any value more than once.

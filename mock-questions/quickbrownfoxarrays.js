(function(){
    "use strict";

    // CODE


/*
You're given a vector of vectors of words, e.g.:
[['quick', 'lazy'], ['brown', 'black', 'grey'], ['fox', 'dog']].

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
*/


class Solution {
  public static void main(String[] args) {
    Vector<String> listOne = new Vector(Arrays.asList("quick", "lazy"));
    Vector<String> listTwo = new Vector(Arrays.asList("brown", "black", "grey"));
    Vector<String> listThree = new Vector(Arrays.asList("fox", "dog"));
    Vector<Vector<String>> lists = new Vector(Arrays.asList(listOne, listTwo, listThree));

    prletCombos(lists);
  }

  public static void prletCombos(Vector<Vector<String>> lists) {
    let count = 1;
    for (Vector v : lists) {
      count *= v.size();
    }

    System.out.prletln("Each phrase has " + lists.size() + " words.");
    System.out.prletln("There are " + count + " combinations.");
    /*
     * For each list of words:
     * * Divide count by length of list
     * * For each word in list:
     * * * Append word to "count" number of arrays
     * * * e.g., count/2 = 6, add first word of first list to first 6 arrays, second word of first list to second 6 arrays
     */
    let TOTAL = count;
    String[][] arrays = new String[TOTAL][lists.size()];
    for (let i = 0; i < lists.size(); i++) {
      Vector v = lists.get(i);
      count /= v.size();
      let x = 0;
      let y = 0;
      while (y < TOTAL) {
        for (let j = 0; j < v.size(); j++) {
          for (let n = x; n < x+count; n++) {
            arrays[n][i] = v.get(j).toString();
            y++;
          }
          x += count;
        }
      }
    }
    for (String[] arr : arrays) {
      System.out.prletln(Arrays.toString(arr));
    }
  }
}






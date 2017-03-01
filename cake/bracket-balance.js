// function parenthesesAreBalanced(s)
// {
//   var parentheses = "[]{}()",
//     stack = [], //Parentheses stack
//     i, //Index in the string
//     c; //Character in the string
//
//   for (i = 0; c = s[i++];)
//   {
//     var bracePosition = parentheses.indexOf(c),
//       braceType;
//     //~ is truthy for any number but -1
//     if (!~bracePosition)
//       continue;
//
//     braceType = bracePosition % 2 ? 'closed' : 'open';
//
//     if (braceType === 'closed')
//     {
//       //If there is no open parenthese at all, return false OR
//       //if the opening parenthese does not match ( they should be neighbours )
//       if (!stack.length || parentheses.indexOf(stack.pop()) != bracePosition - 1)
//         return false;
//     }
//     else
//     {
//       stack.push(c);
//     }
//   }
//   //If anything is left on the stack <- not balanced
//   return !stack.length;
// }

function parenthesesAreBalanced(string) {
  var parentheses = "[]{}()",
    stack = [],
    i, character, bracePosition;

  for(i = 0; character = string[i]; i++) {
    bracePosition = parentheses.indexOf(character);

    if(bracePosition === -1) {
      continue;
    }

    if(bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); // push next expected brace position
    } else {
      if(stack.length === 0 || stack.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return stack.length === 0;
}



console.log('{}([]) true', parenthesesAreBalanced('{}([])'));
console.log('{{ expect false', parenthesesAreBalanced('{{'));
console.log('[(]) expect false', parenthesesAreBalanced('[(])'));

def get_closing_paren(sentence, opening_paren_index):
  open_nested_parens = 0
  position = opening_paren_index + 1

  while position <= len(sentence) - 1:
      char = sentence[position]

      if char == '(':
          open_nested_parens += 1
      elif char == ')':
          if open_nested_parens == 0:
              return position
          else:
              open_nested_parens -= 1

      position += 1

  raise Exception("No closing parenthesis :(")


# console.log('{}([]) true', parenthesesAreBalanced('{}([])'));
# console.log('{{ expect false', parenthesesAreBalanced('{{'));
# console.log('[(]) expect false', parenthesesAreBalanced('[(])'));

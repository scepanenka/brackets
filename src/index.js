module.exports = function check(str, bracketsConfig) {
  let bracketsStack = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][1]) {
        if (bracketsStack.length>0 && bracketsStack[bracketsStack.length - 1] === bracketsConfig[j][0]) {
          bracketsStack.pop()
        } else {
          bracketsStack.push(str[i]);
        }
      } else if (str[i] === bracketsConfig[j][0]) {
        bracketsStack.push(str[i]);
      }
    }
  }

  if (bracketsStack.length > 0) return false
  else return true;
};
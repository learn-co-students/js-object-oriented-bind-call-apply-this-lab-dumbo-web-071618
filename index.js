//Your code here
function justInvoke(arg){
  return arg()
}

function setThisWithCall(arg, name, age){
  return arg.call(name,age)
}

function setThisWithApply(arg, name, [age, hairColor]){
  return arg.apply(name, [age, hairColor])
}

function returnNewFunctionOf(functionToBeCopied, name){
  return functionToBeCopied.bind(name)
}

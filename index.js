//Your code here
justInvoke = (fn) => {
    return fn()
}

setThisWithCall = (fn, thisValue,arg) => {
    return fn.call(thisValue, arg)
}

setThisWithApply = (fn, thisValue,args) => {
    return fn.apply(thisValue,args)
}

returnNewFunctionOf = (fn, thisValue) => {
    return fn.bind(thisValue)
}
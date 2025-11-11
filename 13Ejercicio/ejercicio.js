/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
  const cache = {}
  return function(a,b) {
    const key = `${a},${b}`
    if(cache[key]) return cache[key] + ' Ya estaba guardado'

    const result = fn(a, b)
    cache[key] = result
    return result + ' Guardado'
  }
}

const sumar = (a, b) => a + b

const memoizedSum = memoize(sumar)
console.log(memoizedSum(2, 3))
console.log(memoizedSum(2, 3))
console.log(memoizedSum(2, 3))


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
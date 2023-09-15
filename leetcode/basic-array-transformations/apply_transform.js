/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    a = new Array(arr.length)
    for(let i = 0; i < a.length; i++) {
        a[i] = (fn(arr[i], i))
    }
    return a
};
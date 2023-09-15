/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let i = 0;
    let res = [];
    let ch = [];
    for(let elem of arr){
        ch.push(elem);
        i++;
        if(i === size) {
            i = 0;
            res.push(ch);
            ch = [];
        }
    }
    if(ch.length > 0){
        res.push(ch);
    }
    return res;
};

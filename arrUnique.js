/*方法一：数组去重
 *
 *
 * @param {Array} 去重的数组
 * @return {Array} 去重后的数组
 */
function arrUnique(arr) {
    if (!arr || !Array.isArray(arr)) {
        return;
    }

    var res = [],
        tempObj = {};

    for(var i = 0, len = arr.length; i < len; i++) {
        if (!(arr[i] in tempObj) || !(tempObj[arr[i]] === arr[i])) {
            res.push(arr[i]);
            tempObj[arr[i]] = arr[i];
        }
    }

    return res;
}
// test
arrUnique([3, 5, 3, 7, 12, 7, 1, 1]);// [3, 5, 7, 12, 1]
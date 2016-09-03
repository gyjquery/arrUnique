/*方法一：数组去重
 *
 *
 * @param {Array} 去重的数组
 * @return {Array} 去重后的数组
 */
function arrUnique(arr) {
    // 容错
    if (!arr || !Array.isArray(arr)) {
        return;
    }

    var res = [],
        tempObj = {};

    for (var i = 0, len = arr.length; i < len; i++) {
        if (!(arr[i] in tempObj) || !(tempObj[arr[i]] === arr[i])) {
            res.push(arr[i]);
            tempObj[arr[i]] = arr[i];
        }
    }

    return res;
}

// test
arrUnique([3, 5, 3, 7, 12, 7, 1, 1]);// [3, 5, 7, 12, 1]


/*方法二：数组去重，利用indexOf()方法,需要注意的是IE低版本并没有该方法，此处没做兼容
 *
 *
 * @param {Array} 去重的数组
 * @return {Array} 去重后的数组
 */
function arrUnique(arr) {
    // 容错
    if (!arr || !Array.isArray(arr)) {
        return;
    }

    var res = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        var item = arr[i];
        if (res.indexOf(item) === -1) {
            res.push(item);
        }
    }
    return res;
}

// test
arrUnique([3, 5, 3, 7, 12, 7, 1, 1]);// [3, 5, 7, 12, 1]

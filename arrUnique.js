/**
 * 方法一：数组去重，利用hash对象的思想
 *
 * @param {Array} arr 去重的数组
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


/**
 * 方法二：数组去重，利用indexOf()方法,需要注意的是IE低版本并没有该方法，此处没做兼容
 *
 * @param {Array} arr 去重的数组
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


/**
 * 方法三：数组去重，underscore的数组去重源码实现，该地方不可测试。
 * 如果要测试，需要完整的underscore中的相关代码
 *
 * @param {Array} array 去重的数组
 * @param {Boolean} isSorted 是否已经排好序
 * @param {Function} iteratee 迭代函数
 * @param {Object} context 上下文环境
 * @return {Array} 去重后的数组
 */
_.uniq = _.unique = function (array, isSorted, iteratee, context) {
    // 没有传入 isSorted 参数
    // 转为 _.unique(array, false, undefined, iteratee)
    if (!_.isBoolean(isSorted)) {
        context = iteratee;
        iteratee = isSorted;
        isSorted = false;
    }

    // 如果有迭代函数
    // 则根据 this 指向二次返回新的迭代函数
    if (iteratee != null) {
        iteratee = cb(iteratee, context);
    }

    // 结果数组，是 array 的子集
    var result = [];

    // 已经出现过的元素（或者经过迭代过的值）
    // 用来过滤重复值
    var seen = [];

    for (var i = 0, length = getLength(array); i < length; i++) {
        var value = array[i],
        // 如果指定了迭代函数
        // 则对数组每一个元素进行迭代
        // 迭代函数传入的三个参数通常是 value, index, array 形式
        computed = iteratee ? iteratee(value, i, array) : value;

        // 如果是有序数组，则当前元素只需跟上一个元素对比即可
        // 用 seen 变量保存上一个元素
        if (isSorted) {
            // 如果 i === 0，是第一个元素，则直接 push
            // 否则比较当前元素是否和前一个元素相等
            if (!i || seen !== computed) {
                result.push(value);
            }
            // seen 保存当前元素，供下一次对比
            seen = computed;
        }
        else if (iteratee) {
            // 如果 seen[] 中没有 computed 这个元素值
            if (!_.contains(seen, computed)) {
                seen.push(computed);
                result.push(value);
            }
        }
        else if (!_.contains(result, value)) {
            // 如果不用经过迭代函数计算，也就不用 seen[] 变量了
            result.push(value);
        }
    }

    return result;
};

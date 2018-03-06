module.exports = function longestConsecutiveLength(array) {

    if (array.length == 0) {
        return 0;
    }

    array.sort((a, b) => a - b);

    var countMax = 1;
    var count = 1;
    var diff = 0;

    for (var i = 0; i < array.length - 1; i++) {
        diff = array[i + 1] - array[i];
        if (diff == 0) {
            continue;
        }
        if (diff == 1) {
            count++;
            if (countMax < count) {
                countMax = count;
            }
        } else {
            count = 1;
        }
    }
    return countMax;
}
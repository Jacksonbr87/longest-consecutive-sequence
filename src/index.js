module.exports = function longestConsecutiveLength(array) {

    if (array.length == 0) {
        return 0;
    }

    var set = [];
    var longestConsecutiveLength = 1;

    while (true) {
        // console.log("init array = " + array);
        // console.log("arrayLength start = " + array.length);
        var left = array[array.length - 1] - 1;
        var right = array[array.length - 1] + 1;
        var count = 1;

        // console.log(left, right);

        while (array.indexOf(left) != -1) {
            count++;
            // console.log("array element = " + array[array.indexOf(left)]);
            array.splice(array.indexOf(left), 1);
            left--;
            // console.log("array after decrement = " + array);
        }

        while (array.indexOf(right) != -1) {
            count++;
            // console.log("array element = " + array[array.indexOf(right)]);
            array.splice(array.indexOf(right), 1);
            right++;
            // console.log("array after increment = " + array);
        }

        // console.log("array before pop = " + array);
        array.pop();
        // console.log("array after pop = " + array);

        longestConsecutiveLength = Math.max(count, longestConsecutiveLength);

        // console.log("longestConsecutiveLength = " + longestConsecutiveLength);
        // console.log("---------------------------");
        if (array.length == 0)
            break;
    }
    return longestConsecutiveLength;
}
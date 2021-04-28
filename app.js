/**
 * Converts an array of integers to an array of strings with their phonetic equivalents,
 * and prints the array of strings to the console.
 * @param {Array} arr - array of integers to be converted to their phonetic equivalent
 */
function convertPhonetics(arr) {
    var conversions = {
        '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four',
        '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine'
    };

    var output = '';
    var converted;

    // iterate through each integer in the array
    arr.forEach((num, idx) => {
        converted = '';

        // convert each digit in each integer
        for (let i = 0; i < num.length; i++) {
            converted += conversions[num[i]];
        }

        // append the converted integer to the output
        output += converted;
        if (idx !== arr.length - 1) {
            output += ',';
        }
    });
    console.log(output);
}

module.exports = { convertPhonetics }

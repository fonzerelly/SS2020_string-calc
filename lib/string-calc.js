const stringCalc = (txt) => {
    let delimiter = ',';
    if (txt.indexOf('//') === 0) {
        delimiter = txt.slice(2).split('\n')[0];
    }
    const strList = txt.split(new RegExp(`(${delimiter}|\n)`));

    const numList = strList.map((str) => {
        return parseInt(str, 10)
    }).filter((num) => {
        return !isNaN(num);
    })

    let result = 0;
    numList.forEach((num) => {
        if (num < 0) {
            throw new Error ('negatives not allowed');
        }
        result += num;
    })
    return result;
}

module.exports = {
    stringCalc
}
const seperateByDelimiter = (delimiter, txt) => {
    let result = [];
    txt.split('\n').forEach((line) => {
        result = result.concat(line.split(delimiter))
    });
    return result;
}

const parseDelimiter = (txt) => {
    let delimiter = ',';
    if (txt.indexOf('//') === 0) {
        delimiter = txt.slice(2).split('\n')[0];
    }
    if (delimiter.length > 1) {
        delimiter = delimiter.slice(1, delimiter.length-1);
    }
    return delimiter;
}

const stringCalc = (txt) => {

    const delimiter = parseDelimiter(txt);

    const strList = seperateByDelimiter(delimiter, txt);

    const numList = strList.map((str) => {
        return parseInt(str, 10)
    }).filter((num) => {
        return !isNaN(num);
    }).filter((num) => {
        return num <= 1000;
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
const seperateByDelimiterRecursivly = (delimiters, lines) => {
    if (delimiters.length === 0) {
        return lines;
    }
    let result = [];
    lines.forEach((line) => {
        result = result.concat(line.split(delimiters[0]))
    });
    return seperateByDelimiterRecursivly(delimiters.slice(1), result);
}

const cleanDelimiter = (delimiter) => delimiter
    .replace(/\//g, '')
    .replace(/\[/g, '')
    .replace(/\]/g, '');

const parseDelimiters = (txt) => {
    if (txt.indexOf('//') !== 0) {
        return ','
    }
    const delimiterLine = txt.split('\n')[0]
    return delimiterLine.split('][').map(cleanDelimiter)
}

const stringCalc = (txt) => {

    const delimiters = parseDelimiters(txt);
    const lines = txt.split('\n')
    const strList = seperateByDelimiterRecursivly(delimiters, lines);
    const numList = convertToNumList(strList);
    return sum(numList);
}

module.exports = {
    stringCalc
}

function sum(numList) {
    let result = 0;
    numList.forEach((num) => {
        if (num < 0) {
            throw new Error('negatives not allowed');
        }
        result += num;
    });
    return result;
}

function convertToNumList(strList) {
    return strList.map((str) => {
        return parseInt(str, 10);
    }).filter((num) => {
        return !isNaN(num);
    }).filter((num) => {
        return num <= 1000;
    });
}

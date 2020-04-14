const seperateByDelimiter = (delimiters, txt) => {
    let result = [];
    txt.split('\n').forEach((line) => {
        result = result.concat(line.split(delimiters[0]))
    });
    return result;
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
    const strList = seperateByDelimiter(delimiters, txt);

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
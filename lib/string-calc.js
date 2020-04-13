const stringCalc = (txt) => {
    const strList = txt.split(',');

    const numList = strList.map((str) => {
        return parseInt(str, 10)
    }).filter((num) => {
        return !isNaN(num);
    })

    let result = 0;
    numList.forEach((num) => {
        result += num;
    })
    return result;
}

module.exports = {
    stringCalc
}
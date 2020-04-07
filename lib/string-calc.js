const stringCalc = (txt) => {
    const strList = txt.split(',');

    const firstNum = (strList[0].length === 0)?0:parseInt(strList[0], 10);
    let secondNum;
    if (strList[1]) {
        secondNum = (strList[1].length === 0)?0:parseInt(strList[1], 10);
    } else {
        secondNum = 0;
    }
    
    return firstNum + secondNum;
}

module.exports = {
    stringCalc
}
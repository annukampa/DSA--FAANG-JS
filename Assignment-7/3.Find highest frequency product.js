//['yellowShirt', 'redHat', 'blackShirt', 'bluePants', 'redHat','pinkHat', 'blackShirt', 'yellowShirt',
//'greenPants', 'greenPants', 'greenPants']

function findMaxFrequency(arr) {
    let prodObj = {};
    let maxNum = 0;
    let prodArr = [];
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
        if (!prodObj[arr[i]]) {
            prodObj[arr[i]] = 1;
        } else {
            prodObj[arr[i]]++;
        }
        maxNum = prodObj[arr[i]] > maxNum ? prodObj[arr[i]] : maxNum;
    }

    prodArr = Object.keys(prodObj).filter(key => prodObj[key] === maxNum);
    prodArr.sort();
    return prodArr.length > 1 ? prodArr[prodArr.length - 1] : prodArr[0];
}

findMaxFrequency(['yellowShirt', 'redHat', 'blackShirt', 'bluePants', 'redHat','pinkHat', 'blackShirt', 'yellowShirt']);

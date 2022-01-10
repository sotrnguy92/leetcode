/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    let i = a.length-1;
    let j = b.length-1;
    let carryOver = 0;
    let result = '';

    while(i >=0 || j >= 0 || carryOver) {
        if(i >= 0) {
            carryOver += parseInt(a[i])
            i--;
        }
        if (j >= 0){
            carryOver += parseInt(b[j])
            j--;
        }

        result = JSON.stringify(carryOver%2).concat(result)

        if(carryOver > 1){
            carryOver = 1
        }else{
            carryOver =0;
        }
    }
    return result;
};

addBinary('1', '1');

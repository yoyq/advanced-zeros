module.exports = function getZerosCount(number, base) {
    let obj = {};
    let mas = [];
    let c = 2;

    while (base > 1) {
        if (base % c === 0) {
            let n = base / c;
            obj[c] ? obj[c]++ : obj[c]=1;
            base = n;
        } else {
            c++;
        }
    }

    for (let p in obj) {
        if (!obj.hasOwnProperty(p)) { continue; }
        let r = 0;
        let num = +p;

        while (num < number) {
            r+= parseInt(number / num);
            num = num * p;
        }

        mas.push(parseInt(r / obj[p]));
    }

    return Math.min(...mas);
}
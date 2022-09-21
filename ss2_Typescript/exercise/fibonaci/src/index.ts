//Tìm số fibonacy ở vị trí number
function getFibonacy(number: number): number {
    if (number == 1) {
        return 0;
    }
    if (number <= 3) {
        return 1;
    }
    return getFibonacy(number - 1) + getFibonacy(number - 2);
}


//Tạo dãy fibonacy có n số
function getListFibonacy(n: number): Array<number> {
    let arrFibo = [];
    for (let i = 1; i <= n; i++) {
        arrFibo.push(getFibonacy(i))
    }
    return arrFibo;
}


//Tính tổng các số trong dãy Fibonaci
let sum = 0;
let array = getListFibonacy(10)
console.log(array)
array.forEach(e => {
    sum += e;
})
console.log(sum)
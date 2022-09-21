// let sum: number = 0;
// let count: number = 0;
// let i:number = 2;
// while (count<30){
//     let isPrime:boolean = true;
//     if (i==2){
//         sum+=i;
//         count++;
//         i++;
//         continue;
//     }
//     for (let j = 2; j < Math.sqrt(i); j++) {
//         if (i%j==0){
//             isPrime = false;
//             break
//         }
//     }
//     if (!isPrime){
//         continue;
//     }
//     sum+=i;
//     count++;
//     i++;
// }
// console.log(sum);
var sum = 0;
var count = 0;
for (var i = 2; count < 30; i++) {
    var isPrime = true;
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    for (var j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (!isPrime) {
        continue;
    }
    sum += i;
    count++;
}
console.log(sum);

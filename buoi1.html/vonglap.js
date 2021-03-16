// //vòng lăp for
// for (let i = 0; i < 10; i++){
//     console.log(i);
// }
// //vòng lăp while
// console.log('vòng lặp while')
// let j=0
// while (j < 10) {
//     console.log(i)
//     j++
// }

// //do while:check điều kiện trước khi thực hiện


//cho n, n<50,liệt tất cả các số chưa hết cho 5 trong khoảng từ 0 đến n
function chiahetcho5(n){
    if (n < 0 || n > 50) {
        return
    }
    let dem=0
    for (let i = 0; i <= n; i++) {
        if (i % 5 === 0) {
            console.log(i)
            dem++
        }
    }
    console.log('có tất cả ${dem}so chia het cho 5')
}

/* ============== 4 ============== */
function retest04(n) {
    let sum = 0;
    let first = 0;
    let second = 1;
    let fibo;
    for (i = 2; i < n; i++) {
        fibo = first + second;
        first = second;
        second = fibo;
        console.log(fibo)
    }
    return fibo
}

console.log(retest04(3))

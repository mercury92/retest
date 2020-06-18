
/* ============== 1 ============== */
function retest01(a, b) {
    a = prompt("enter number A")
    b = prompt("enter number B")
    let n = 2;
    let sum;
    while (n <= a && n <= b) {
        while (a % n == 0 && b % n == 0) {
            a = a / n
            b = b / n
        }
        n++
    }
    sum = a + "/" + b
    return sum
}
console.log(retest01())


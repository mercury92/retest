
/* ============== 9 ============== */
function retest9() {
    let sum = 0;
    for (n = 1; n < 157; n = n + 2) {
        sum = sum + (n * (n + 2) * (n + 4))
    }
    return sum
}
console.log(retest9())

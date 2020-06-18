
/* ============== 8 ============== */
function retest8() {
    let sum = 0;
    for (n = 1; n < 157; n++) {
        sum = sum + (n * (n + 1) * (n + 2))
    }
    return sum
}

console.log(retest8())



/* ============== 6 ============== */
function retest6() {
    let sum = 0;
    for (n = 1; n < 88; n++) {
        sum = sum + n * (n + 1)
        console.log(sum)
    }
    return sum
}

console.log(retest6())

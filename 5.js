
/* ============== 5 ============== */
function retest05() {
    let sum = 0;
    for (n = 1; n <= 18954; n++) {
        if (n % 2 == 0) {
            n = n * -1
            sum = sum + n
            n = n * -1
        }
        else {
            sum = sum + n

        }
    }

    return sum
}
console.log(retest05())


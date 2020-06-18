
/* ==============  13 ============== */
function retest13() {
    n = prompt("enter number")
    let Min = n
    let Max = n
    let sum
    while (n !== "stop") {
        if (Min > n) {
            Min = n
        }
        else if (Max < n) {
            Max = n
        }
        sum = Max - Min
        n = prompt("enter number")
    }
    return sum
}
console.log(retest13())

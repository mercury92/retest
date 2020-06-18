
/* ==============  10 ============== */
function retest10() {
    n = prompt("enter number")
    let Min = n
    while (n !== "stop") {
        if (Min > n) {
            Min = n
        }
        n = prompt("enter number")
    }
    return Min
}
console.log(retest10())


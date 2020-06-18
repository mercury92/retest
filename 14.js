
/* ==============  14 ============== */
function retest14() {
    n = prompt("enter number")
    let sum = 0
    let i = 0;

    while (n !== "stop") {
        n = parseInt(n)
        console.log
        sum = sum + n
        console.log(sum)
        i++
        n = prompt("enter number")
    }
    return sum / i
}
console.log(retest14())


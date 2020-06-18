/* ==============  11 ============== */

function retest11() {
    n = prompt("enter number 1")
    let Min1 = n
    n = prompt("enter number 2")
    let Min2 = n
    n = prompt("enter number 3")
    let Min3 = n
    while (n !== "stop") {
        if (Min1 > n) {
            Min1 = n
        }
        else if (Min2 > n) {
            Min2 = n
        }
        else if (Min3 > n) {
            Min3 = n
        }
        sum = `${Min1} ${Min2} ${Min3}`
        n = prompt("enter number")

    }
    return sum
}
console.log(retest11())

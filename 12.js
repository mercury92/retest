
/* ==============  12 ============== */
function retest12() {
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
        sum = `min:${Min} max:${Max}`
        n = prompt("enter number")
    }
    return sum
}


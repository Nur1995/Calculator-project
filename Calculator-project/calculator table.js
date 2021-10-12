var result = document.getElementById("result")


function dis(val) {
    result.value += val
}

function solve() {
    let x = result.value
    let y = eval(x)
    result.value = y
}

function clr() {
    result.value = ""
}

function backSpace() {
    result.value = result.value.slice(0, -1);
}
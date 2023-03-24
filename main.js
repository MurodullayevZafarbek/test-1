function signx(x) {
    if (x > 0) {
        return 1
    } else if (x == 0) {
        return 0
    }
    return -1
}

function RootsCount(a, b, c) {
    if (a == 0) {
        return "a 0 ga teng bo`lmasin"
    }
    let d = b ** 2 - 4 * a * c
    if (d > 0) {
        return 2
    } else if (d == 0) {
        return 1
    }
    return 0
}

function CircleS(r) {
    return Math.PI * r ** 2
}

function RingS(r1, r2) {
    if (r1 < r2) {
        return "Bunday bo`lishi mumkum emas"
    }
    return CircleS(r1) - CircleS(r2)
}
function Range(a, b) {
    if (a > b) {
        return 0
    }
    let sum = 0
    for (let i = a; i <= b; i++) {
        sum += i
    }
    return sum
}
// console.log(Range(3, 8), Range(8, 5));
function Calc(a, b, op) {
    switch (op) {
        case 1: return a - b;
        case 2: return a * b;
        case 3: return a / b;
        default: return a + b
    }
}
function Quarter(x, y) {
    if (x == 0 || y == 0) {
        return "bunday mumkun emas"
    }

    if (x > 0 && y > 0) {
        return 1
    } else if (x > 0 && y < 0) {
        return 4
    } else if (x < 0 && y > 0) {
        return 2
    } else if (x < 0 && y < 0) {
        return 3
    }
    return "jinnni bo`lma"
}
function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function mul(a, b) {
    return a*b;
}

function div(a, b) {
    return a/b;
}

var a = 5;
var b = 4;

console.log(a + " + " + b + " = " + plus(a,b));
console.log(a + " - " + b +" = " + minus(a,b));
console.log(a + " * " + b +" = " + mul(a,b));
console.log(a + " / " + b +" = " + div(a,b));
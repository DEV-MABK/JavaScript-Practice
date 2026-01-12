// var, let, const are keywords used to declare variables
// var & let can be reassigned, const cannot

// ---------------- VAR ----------------

var b = 10; // global scope
console.log(b); // 10

console.log(a); // undefined (due to hoisting, NOT TDZ)
var a = 20;
console.log(a); // 20

{
    var a = 30; // var ignores block scope
}
console.log(a); // 30

(function () {
    var c = 10;
    console.log(c); // 10
})();
// console.log(c); Error (function scoped)

// ---------------- LET ----------------

let d = 10;
console.log(d); // 10

// let d = 20; Cannot redeclare

{
    let e = 10;
    console.log(e); // 10
}
// console.log(e); Error (block scoped)

(() => {
    let f = 10;
    console.log(f); // 10
})();

// ---------------- CONST ----------------

const g = 10;
console.log(g); // 10

{
    const h = 20;
    console.log(h); // 20
}

(() => {
    const i = 30;
    console.log(i); // 30
})();

// ---------------- REASSIGNING ----------------

let q = 10;
q = 200;
console.log(q); // 200

const r = 100;
// r = 300; Error (cannot reassign const)
console.log(r); // 100

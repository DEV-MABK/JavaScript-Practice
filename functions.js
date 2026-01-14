// What are functions?
// Functions are blocks of reusable logic
// Instead of repeating the same task again and again,
// wrap it in a function and reuse it with different input.

//============ Function Declaration ============
function greet(){
    console.log("hey");
}
// Function Calling
greet();

//========= Parameters vs Arguments ==========
function abc(name){
    console.log(name);
}
abc("AbuBakar");
// name → parameter
// "AbuBakar" → argument

//============ Return Values ===========
function sum(v1 = 0, v2 = 0){
    return v1 + v2;
}
let total = sum(4, 5); // 9
// return sends a result back to where the function was called

//========= Function Expression ============
let qwerty = function(){
    console.log("Mahnoor");
}
qwerty();

//============= Arrow Function ===========
let xyz = () => {
    console.log("Zindagi");
};
xyz();

//========== Default + Rest + Spread =========

// Default Parameter Function
function pak(v1 = 2, v2 = 10){
    return v1 + v2;
}
pak();

// Rest Parameter Function
function web(...val){
    console.log(val);
}
web("amazon.com", "tiktok.com", "fiverr.com");

// Spread Operator
let webs = ["amazon.com", "tiktok.com", "fiverr.com"];
web(...webs);

//=========== First Class Function ===========
let abcd = function(lal){
    lal();
};
abcd(function() {
    console.log("I am AbuBakar");
});

//=========== Higher Order Function ===========
function multiply(firstVal, secondVal){
    return () => {
        console.log(firstVal * secondVal);
    };
}
multiply(6, 9)(); // 54

//============ Pure vs Impure Function =========

// Pure Function (no side effects)
function pureSum(a, b){
    return a + b;
}
pureSum(2, 3);

// Impure Function (depends on external state)
let c = 20;
function oly(){
    c++;
}
oly();

//========= Closures =========
function wel(){
    let x = 12;
    return function(){
        console.log(x);
    };
}
const innerFunc = wel();
innerFunc(); // 12

//============ Lexical Scoping =========
function abcde(){
    let v = 7;
    function qwert(){
        function jkl(){
            console.log(v); // accessible due to lexical scope
        }
        jkl();
    }
    qwert();
}
abcde();

//=========== IIFE ===========
(function yae(){
    console.log("I like u");
})();

//======== Hoisting: Declaration vs Expression =========

// Function Declaration (hoisted)
kal();
function kal(){
    console.log("AbuBakar");
}

// Function Expression (not hoisted)
fol(); //Error
let fol = function(){
    console.log("Sweetie");
};
//----------------------------------------------------------

// Practice

// Pass a function into another function (First-Class Function)
function sell(val) {
    val();
}

sell(function(){
    console.log("v8");
});

// Assign a function to a variable
let a = () => {
    console.log("King");
};
a();

// Write a BMI calculator
function bmiCalculator(weight, height){
    return weight / (height * height);
}

// toFixed must be CALLED
console.log(bmiCalculator(68, 1.8288).toFixed(2)); // BMI with 2 decimals

// Create a reusable Discount Calculator (Closure + Higher Order Function)
function discountCalculator(discount){
    return function(price){
        return price - price * (discount / 100);
    };
}

let discounter = discountCalculator(10);
console.log(discounter(200)); // 180

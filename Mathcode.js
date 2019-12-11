function Mathcode(x, z) {

    if (!x == 0 && z == 0) return "not match";
    if (x === 0 && z !== 0) return "not match";
    if (x === 0 && z === 0) return "not match";
    return x / z;
};

function clc(a, b) {
    return a + b;

}
function sum(a, b) {
    return a / b;

}
function ext(a, b) {
    return a * b;

}


function Login(user, password) {
    if (typeof (user) == "string" & password.length < 6) return true; else return false;

}

function Power(a, b) {

    if (a === "Zero" && b === "Zero") return "positive";
    if (a === "Zero" && b === "positive") return "positive";
    if (a === "Zero" && b === "negitive") return "Negitive";
    if (a === "negitive" && b === "positive") return "negitive";
    if (a === "negitive" && b === "Zero") return "Negitive";
};

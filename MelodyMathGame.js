var mode = "none";
var dif = "none";
var num1;
var num2;
var sign = "";
var answer;
var answered = 0;
var correct = 0;
function mAdd() {
    if (mode === "none") { hide1Show2(); mode = "Addition" }
    sign = "+"
    if (dif === "Easy") {
        num1 = Math.floor((Math.random() * 100) + 1);
        num2 = Math.floor((Math.random() * 100) + 1);
    } else if (dif === "Hard") {
        num1 = Math.floor((Math.random() * 900) + 100);
        num2 = Math.floor((Math.random() * 900) + 100);
    }
    if (num1 < num2) {
        mAdd()
    }
    document.getElementById("num1").innerHTML = num1
    document.getElementById("sign").innerHTML = "+"
    document.getElementById("num2").innerHTML = num2
    answer = num1 + num2
}
function mSub() {
    if (mode === "none") { hide1Show2(); mode = "Subtraction" }
    sign = "-"
    if (dif === "Easy") {
        num1 = Math.floor((Math.random() * 100) + 1);
        num2 = Math.floor((Math.random() * 100) + 1);
    } else if (dif === "Hard") {
        num1 = Math.floor((Math.random() * 900) + 100);
        num2 = Math.floor((Math.random() * 900) + 100);
    }
    if (num1 < num2) {
        mSub()
    }
    document.getElementById("num1").innerHTML = num1
    document.getElementById("sign").innerHTML = "-"
    document.getElementById("num2").innerHTML = num2
    answer = num1 - num2
}
function mMul() {
    if (mode === "none") { hide1Show2(); mode = "Multiplication" }
    sign = "x"
    if (dif === "Easy") {
        num1 = Math.floor((Math.random() * 10) + 1);
        num2 = Math.floor((Math.random() * 10) + 1);
    } else if (dif === "Hard") {
        num1 = Math.floor((Math.random() * 40) + 10);
        num2 = Math.floor((Math.random() * 40) + 10);
    }
    if (num1 < num2) {
        mMul()
    }
    document.getElementById("num1").innerHTML = num1
    document.getElementById("sign").innerHTML = "x"
    document.getElementById("num2").innerHTML = num2
    answer = num1 * num2
}
function mDiv() {
    if (mode === "none") { hide1Show2(); mode = "Division" }
    sign = "\u00F7"
    if (dif === "Easy") {
        num2 = Math.floor((Math.random() * 10) + 2);
        num1 = Math.floor((Math.random() * 10) + 1) * num2;
    } else if (dif === "Hard") {
        num2 = Math.floor((Math.random() * 10) + 10);
        num1 = Math.floor((Math.random() * 20) + 10) * num2;
    }
    document.getElementById("num1").innerHTML = num1
    document.getElementById("sign").innerHTML = "\u00F7"
    document.getElementById("num2").innerHTML = num2
    answer = num1 / num2
}
function mSupriseMe() {
    if (mode === "none") { hide1Show2(); mode = "Suprise Me!" }
    let chosen = Math.floor((Math.random() * 4) + 1)
    if (chosen === 1) { mAdd() }
    if (chosen === 2) { mSub() }
    if (chosen === 3) { mMul() }
    if (chosen === 4) { mDiv() }
}
function checkAnswer() {
    answered++
    document.getElementById("answered").innerHTML = `Answered : ${answered}`
    let ans = parseInt(document.getElementById("ans").value);
    if (ans === answer) {
        correct++
        document.getElementById("correct").innerHTML = `Correct : ${correct}`
        runGame()
    } else if (ans !== answer) {
        document.getElementById("b1").classList.add("hide")
        if (Number.isInteger(ans)) {
            document.getElementById("wrong").innerHTML = `Incorrect, the correct answer for ${num1} ${sign} ${num2} is ${answer}, not ${ans}`
        } else {
            document.getElementById("wrong").innerHTML = `Incorrect, the correct answer for ${num1} ${sign} ${num2} is ${answer}`
        }
        document.getElementById("wrong").classList.remove("hide")
        document.getElementById("understand").classList.remove("hide")
    }
}
function understand() {
    document.getElementById("b1").classList.remove("hide")
    document.getElementById("wrong").classList.add("hide")
    document.getElementById("understand").classList.add("hide")
    runGame()
}
function easy() {
    dif = "Easy"
    hide2Show3()
}
function hard() {
    dif = "Hard"
    hide2Show3()
}
function hide1Show2() {
    document.getElementById("addB").classList.add("hide")
    document.getElementById("subB").classList.add("hide")
    document.getElementById("mulB").classList.add("hide")
    document.getElementById("divB").classList.add("hide")
    document.getElementById("ranB").classList.add("hide")
    document.getElementById("centerText").innerHTML = "Select A Difficulty"
    document.getElementById("easymode").classList.remove("hide")
    document.getElementById("hardmode").classList.remove("hide")
}
function hide2Show3() {
    document.getElementById("centerText").innerHTML = `${mode} | ${dif} mode`
    document.getElementById("easymode").classList.add("hide")
    document.getElementById("hardmode").classList.add("hide")
    document.getElementById("num1").classList.remove("hide")
    document.getElementById("sign").classList.remove("hide")
    document.getElementById("num2").classList.remove("hide")
    document.getElementById("equals").classList.remove("hide")
    document.getElementById("ans").classList.remove("hide")
    document.getElementById("sBut").classList.remove("hide")
    document.getElementById("correct").classList.remove("hide")
    document.getElementById("answered").classList.remove("hide")
    runGame()
}
function runGame() {
    document.getElementById("ans").value = " "
    if (mode === "Addition") {
        mAdd()
    } else if (mode === "Subtraction") {
        mSub()
    } else if (mode === "Multiplication") {
        mMul()
    } else if (mode === "Division") {
        mDiv()
    } else if (mode === "Suprise Me!") {
        mSupriseMe()
    }
}
function refreshPage() {
    window.location.reload();
} 

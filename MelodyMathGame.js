var score = 0;
var num1;
var num2;
var answer;
var sign = "0";
var answered = 0;
var notdone = false;
var started = false;
var randomMode = false;
var easyMode = false;
var hardMode = false;
var modeselected = false;
var selected = "z";
var started = false;
function easy(){
    if(modeselected){return;}
    easyMode = true;
    document.getElementById("easyMode").classList.add("selected")
    modeselected = true;
    if(selected === "add"){mAdd()}
    if(selected === "sub"){mSub()}
    if(selected === "mul"){mMul()}
    if(selected === "div"){mDiv()}
}
function hard(){
    if(modeselected){return;}
    hardMode = true;
    document.getElementById("hardMode").classList.add("selected")
    modeselected = true;
    if(selected === "add"){mAdd()}
    if(selected === "sub"){mSub()}
    if(selected === "mul"){mMul()}
    if(selected === "div"){mDiv()}
}
function mAdd() {
    if(!started){document.getElementById("addB").classList.add("selected")}
    started = true;
    selected = "add"
    if(!modeselected){return;}
    started = true;
    if (notdone) {
        return;
    }
    notdone = true;
    if (!randomMode) {
        document.getElementById("addB").classList.add("selected")
    }
    if (easyMode) {
        num1 = Math.floor((Math.random() * 100) + 1);
        num2 = Math.floor((Math.random() * 100) + 1);
    } else if (hardMode) {
        num1 = Math.floor((Math.random() * 999) + 1);
        num2 = Math.floor((Math.random() * 999) + 1);
    }
    document.getElementById("num1").innerHTML = num1
    sign = document.getElementById("sign1")
    sign.innerHTML = "+"
    document.getElementById("num2").innerHTML = num2
    answer = num1 + num2
}
function mSub() {
    if(!started){document.getElementById("subB").classList.add("selected")}
    started = true;
    selected = "sub"
    if(!modeselected){return;}
    if (notdone) {
        return;
    }
    notdone = true;
    if (!randomMode) {
        document.getElementById("subB").classList.add("selected")
    }
    if (easyMode) {
        num1 = Math.floor((Math.random() * 100) + 1);
        num2 = Math.floor((Math.random() * 100) + 1);
    } else if (hardMode) {
        num1 = Math.floor((Math.random() * 999) + 1);
        num2 = Math.floor((Math.random() * 999) + 1);
    }

    if (num1 < num2) {
        notdone = false;
        mSub()
    } else {
        document.getElementById("num1").innerHTML = num1
        sign = document.getElementById("sign1")
        sign.innerHTML = "-"
        document.getElementById("num2").innerHTML = num2
        answer = num1 - num2
    }
}
function mMul() {
    if(!started){document.getElementById("mulB").classList.add("selected")}
    started = true;
    selected = "mul"
    if(!modeselected){return;}
    if (notdone) { return; }
    notdone = true;
    if (!randomMode) {
        document.getElementById("mulB").classList.add("selected")
    }
    if (easyMode) {
        num1 = Math.floor((Math.random() * 10) + 1);
        num2 = Math.floor((Math.random() * 10) + 1);
    } else if (hardMode) {
        num1 = Math.floor((Math.random() * 100) + 1);
        num2 = Math.floor((Math.random() * 10) + 1);
    }

    if (num1 < num2) {
        notdone = false;
        mMul()
    } else {
        document.getElementById("num1").innerHTML = num1
        sign = document.getElementById("sign1")
        sign.innerHTML = "x"
        document.getElementById("num2").innerHTML = num2
        answer = num1 * num2
    }
}
function mDiv() {
    if(!started){document.getElementById("divB").classList.add("selected")}
    started = true;
    selected = "div"
    if(!modeselected){return;}
    if (notdone) { return; }
    notdone = true;
    if (!randomMode) {
        document.getElementById("divB").classList.add("selected")
    }
    if (easyMode) {
        num1 = Math.floor((Math.random() * 81) + 1);
        num2 = Math.floor((Math.random() * 7) + 3);
    } else if (hardMode) {
        num1 = Math.floor((Math.random() * 1000) + 1);
        num2 = Math.floor((Math.random() * 7) + 3);
    }

    if (num1 % num2 !== 0) {
        notdone = false;
        mDiv()
    } else {
        document.getElementById("num1").innerHTML = num1
        sign = document.getElementById("sign1")
        sign.innerHTML = "\u00F7"
        document.getElementById("num2").innerHTML = num2
        answer = num1 / num2
    }
}
function mSupriseMe() {
    if (notdone) { return; }
    document.getElementById("ranB").classList.add("selected")
    started = true;
    randomMode = true;
    let randomS = Math.floor((Math.random() * 4) + 1)
    if (randomS === 1) {
        mAdd()
    } else if (randomS === 2) {
        mSub()
    } else if (randomS === 3) {
        mMul()
    } else if (randomS === 4) {
        mDiv()
    }
}
function checkAnswer() {
    if (!started) { return; }
    answered++
    document.getElementById("total").innerHTML = answered
    let ans = document.getElementById("ans1").value
    ans = parseInt(`${ans}`)
    answer = parseInt(`${answer}`)
    if (randomMode) {
        if (ans === answer) {
            score++
            document.getElementById("score").innerHTML = score
            document.getElementById("ans1").value = " "
            notdone = false;
            mSupriseMe()
        } else {
            alert(`Incorrect, the answer was ${answer}`)
            document.getElementById("ans1").value = ""
            notdone = false;
            mSupriseMe()
        }
    } else {
        if (ans === answer) {
            score++
            document.getElementById("score").innerHTML = score
            document.getElementById("ans1").value = " "
            if (sign.innerHTML === "+") {
                notdone = false;
                mAdd()
            } else if (sign.innerHTML === "-") {
                notdone = false;
                mSub()
            } else if (sign.innerHTML === "x") {
                notdone = false;
                mMul()
            } else if (sign.innerHTML === "/") {
                notdone = false;
                mDiv()
            }
        } else {
            alert(`Incorrect, the answer was ${answer}`)
            document.getElementById("ans1").value = ""
            if (sign.innerHTML === "+") {
                notdone = false;
                mAdd()
            } else if (sign.innerHTML === "-") {
                notdone = false;
                mSub()
            } else if (sign.innerHTML === "x") {
                notdone = false;
                mMul()
            } else if (sign.innerHTML === "/") {
                notdone = false;
                mDiv()
            }
        }
    }
}
function refreshPage() {
    window.location.reload();
} 

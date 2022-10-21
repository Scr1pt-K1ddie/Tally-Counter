var newVal = document.getElementById("main_area").innerHTML;
newVal = localStorage.getItem("currentVal");

function minusFunc() {
    if (newVal <= 0) {
        newVal = 0;
    }
    newVal--;
    document.getElementById("main_area").innerHTML = newVal;
    saveToLocalStorage();
}

function plusFunc() {
    newVal++;
    localStorage.setItem("currentVal", newVal);
    document.getElementById("main_area").innerHTML = newVal;
}

function saveToLocalStorage() {
    localStorage.setItem("currentVal", newVal);
}

function getFromLocalStorage() {
    newVal = localStorage.getItem("currentVal");
    document.getElementById("main_area").innerHTML = newVal;
}

function resetFunc() {
    document.getElementById("main_area").innerHTML = 0;
    newVal = 0;
    saveToLocalStorage();
}
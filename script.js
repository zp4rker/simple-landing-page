function main() {
    // --- BOOKMARKS --- //

    const aB1 = document.querySelector("#aB1");
    const imgB1 = document.querySelector("#imgB1");
    const aB1Setting = document.querySelector("#aB1Setting");
    const imgB1Setting = document.querySelector("#imgB1Setting");

    const aB2 = document.querySelector("#aB2");
    const imgB2 = document.querySelector("#imgB2");
    const aB2Setting = document.querySelector("#aB2Setting");
    const imgB2Setting = document.querySelector("#imgB2Setting");

    const aB3 = document.querySelector("#aB3");
    const imgB3 = document.querySelector("#imgB3");
    const aB3Setting = document.querySelector("#aB3Setting");
    const imgB3Setting = document.querySelector("#imgB3Setting");

    const aB4 = document.querySelector("#aB4");
    const imgB4 = document.querySelector("#imgB4");
    const aB4Setting = document.querySelector("#aB4Setting");
    const imgB4Setting = document.querySelector("#imgB4Setting");

    // load user prefs
    if (localStorage.getItem("aB1") != null) {
        aB1.href = aB1Setting.value = localStorage.getItem("aB1");
    }
    if (localStorage.getItem("aB2") != null) {
        aB2.href = aB2Setting.value = localStorage.getItem("aB2");
    }
    if (localStorage.getItem("aB3") != null) {
        aB3.href = aB3Setting.value = localStorage.getItem("aB3");
    }
    if (localStorage.getItem("aB4") != null) {
        aB4.href = aB4Setting.value = localStorage.getItem("aB4");
    }
    if (localStorage.getItem("imgB1") != null) {
        imgB1.src = imgB1Setting.value = localStorage.getItem("imgB1");
    }
    if (localStorage.getItem("imgB2") != null) {
        imgB2.src = imgB2Setting.value = localStorage.getItem("imgB2");
    }
    if (localStorage.getItem("imgB3") != null) {
        imgB3.src = imgB3Setting.value = localStorage.getItem("imgB3");
    }
    if (localStorage.getItem("imgB4") != null) {
        imgB4.src = imgB4Setting.value = localStorage.getItem("imgB4");
    }

    // make settings work
    aB1Setting.oninput = function () {
        var newValue = aB1Setting.value;
        aB1.href = newValue;
        localStorage.setItem("aB1", newValue);
    }
    aB2Setting.oninput = function () {
        var newValue = aB2Setting.value;
        aB2.href = newValue;
        localStorage.setItem("aB2", newValue);
    }
    aB3Setting.oninput = function () {
        var newValue = aB3Setting.value;
        aB3.href = newValue;
        localStorage.setItem("aB3", newValue);
    }
    aB4Setting.oninput = function () {
        var newValue = aB4Setting.value;
        aB4.href = newValue;
        localStorage.setItem("aB4", newValue);
    }
    imgB1Setting.oninput = function () {
        var newValue = imgB1Setting.value;
        imgB1.src = newValue;
        localStorage.setItem("imgB1", newValue);
    }
    imgB2Setting.oninput = function () {
        var newValue = imgB2Setting.value;
        imgB2.src = newValue;
        localStorage.setItem("imgB2", newValue);
    }
    imgB3Setting.oninput = function () {
        var newValue = imgB3Setting.value;
        imgB3.src = newValue;
        localStorage.setItem("imgB3", newValue);
    }
    imgB4Setting.oninput = function () {
        var newValue = imgB4Setting.value;
        imgB4.src = newValue;
        localStorage.setItem("imgB4", newValue);
    }

    // --- SETTINGS --- //

    const settingsIcon = document.querySelector("#b5");
    const settingsContainer = document.querySelector("#settingsContainer");
    const bookmarkSettingsContainer = document.querySelector("#bookmarkSettingsContainer");

    // make settings icon display settings when clicked
    settingsIcon.onclick = function () {
        if (settingsContainer.style.display == 'none') {
            settingsContainer.style.display = 'grid';
        } else {
            settingsContainer.style.display = 'none';
        }
    }

    // make settings category container work
    document.querySelector("#bookmarkSettingCategory").onclick = function () {
        bookmarkSettingsContainer.style.display = 'grid';
    }
}

// run main after window loads
window.onload = main;
async function main() {
    await new Promise(r => setTimeout(r, 350));
    document.querySelector("#apexContainer").style.display = "block"
}

window.onload = main;
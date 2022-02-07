const changeIcon = document.getElementById("icon");

const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const quick_fix = document.querySelector(".quick_fix-bg");
let clickCounter = 0;

changeIcon.addEventListener("click", () => {
    clickCounter += 1;

    if(clickCounter === 1) {
        // Background Change
        bg1.style.backgroundImage="url('/images/bg-mobile-light.jpg')";
        bg2.style.backgroundColor="hsl(0, 0%, 98%)";
        quick_fix.style.backgroundColor="hsl(0, 0%, 98%)";

        // List Item Container Change
    }

    if(clickCounter === 2) {
        // Background Change
        bg1.style.backgroundImage="url('/images/bg-mobile-dark.jpg')";
        clickCounter = 0;
        bg2.style.backgroundColor="hsl(235, 21%, 11%)";
        quick_fix.style.backgroundColor="hsl(235, 21%, 11%)";

        // List Item Container Change
    }
})
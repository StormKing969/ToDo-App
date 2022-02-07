const changeIcon = document.getElementById("icon");

const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
let clickCounter = 0;

changeIcon.addEventListener("click", () => {
    clickCounter += 1;

    if(clickCounter === 1) {
        bg1.style.backgroundImage="url('/images/bg-mobile-light.jpg')";
        bg2.style.backgroundColor="hsl(0, 0%, 98%)";
    }

    if(clickCounter === 2) {
        bg1.style.backgroundImage="url('/images/bg-mobile-dark.jpg')";
        clickCounter = 0;
    }
})
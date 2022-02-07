const changeIcon = document.getElementById("icon");
let clickCounter = 0;

// Background 
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const quick_fix = document.querySelector(".quick_fix-bg");

// List Item Container
const input_section = document.querySelector(".user_input");
const todo_list_display = document.querySelector(".todo_container");

// User Selection
const user_selection_display = document.querySelector(".user_selection");

// Instruction
const direction_display = document.querySelector(".direction");

changeIcon.addEventListener("click", () => {
    clickCounter += 1;

    if(clickCounter === 1) {
        // Change icon
        changeIcon.src = "../images/icon-moon.svg";
        changeIcon.alt="moon icon";

        // Background Change
        bg1.style.backgroundImage="url('/images/bg-mobile-light.jpg')";
        bg2.style.backgroundColor="hsl(236, 33%, 92%)";
        quick_fix.style.backgroundColor="hsl(236, 33%, 92%)";

        // List Item Container Change
        input_section.classList.add("user_input-th2");
        todo_list_display.classList.add("todo_container-th2");

        // User Selection
        user_selection_display.classList.add("user_selection-th2");

        // Instruction
        direction_display.classList.add("direction-th2");
    }

    if(clickCounter === 2) {
        clickCounter = 0;
        // Change icon
        changeIcon.src = "../images/icon-sun.svg";
        changeIcon.alt="sun icon";
        
        // Background Change
        bg1.style.backgroundImage="url('/images/bg-mobile-dark.jpg')";
        bg2.style.backgroundColor="hsl(235, 21%, 11%)";
        quick_fix.style.backgroundColor="hsl(235, 21%, 11%)";

        // List Item Container Change
        input_section.classList.remove("user_input-th2");
        todo_list_display.classList.remove("todo_container-th2");

        // User Selection
        user_selection_display.classList.remove("user_selection-th2");

        // Instruction
        direction_display.classList.remove("direction-th2");
    }
})
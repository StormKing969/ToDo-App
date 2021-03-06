const theme_btn = document.getElementById("theme");

const background_img_tag = document.querySelector(".background_img img");

const h1_tag = document.querySelector(".title");
const drag_drop_tag = document.querySelector(".drag_drop");

const input_box_tag = document.querySelector(".user_input_box");
const check_mark_tag = document.querySelectorAll(".check_mark");
const userInput_form_tag = document.querySelector(".userInput_form input");

const list_display_tag = document.querySelector(".list_display");
const item_display_tag = document.querySelectorAll(".item_display");
const item_content_tag = document.querySelectorAll(".item_content");
const clear_content_tag = document.querySelector(".items_clear button");

const statues_tag = document.querySelector(".statues");
const all_link_tag = document.querySelectorAll(".all_link");
const active_link_tag = document.querySelectorAll(".active_link");
const completed_link_tag = document.querySelectorAll(".completed_link");

function theme() {
    if(theme_btn.src.includes("sun") === true) {
        theme_btn.src = "../images/icon-moon.svg"

        background_img_tag.src = "../images/bg-mobile-light.jpg"
        document.body.classList.add("light_body");  

        h1_tag.classList.add("light_header");   
        drag_drop_tag.classList.add("light_drag-drop"); 
        
        input_box_tag.classList.add("light_input_box"); 
        check_mark_tag.forEach(item => {
            item.classList.add("light_check_mark"); 
        })
        userInput_form_tag.classList.add("light_userInput_form"); 

        list_display_tag.classList.add("light_list_display"); 
        item_display_tag.forEach(item => {
            item.classList.add("light_item_display"); 
        })
        item_content_tag.forEach(item => {
            item.classList.add("light_item_content"); 
        })
        clear_content_tag.classList.add("light_items_clear"); 
        
        statues_tag.classList.add("light_statues"); 
        
    } else if(theme_btn.src.includes("moon") === true) {
        theme_btn.src = "../images/icon-sun.svg"

        background_img_tag.src = "../images/bg-mobile-dark.jpg"
        document.body.classList.remove("light_body");

        h1_tag.classList.remove("light_header");   
        drag_drop_tag.classList.remove("light_drag-drop");  

        input_box_tag.classList.remove("light_input_box"); 
        check_mark_tag.forEach(item => {
            item.classList.remove("light_check_mark"); 
        }) 
        userInput_form_tag.classList.remove("light_userInput_form"); 

        list_display_tag.classList.remove("light_list_display"); 
        item_display_tag.forEach(item => {
            item.classList.remove("light_item_display"); 
        })
        item_content_tag.forEach(item => {
            item.classList.remove("light_item_content"); 
        }) 
        clear_content_tag.classList.remove("light_items_clear");

        statues_tag.classList.remove("light_statues"); 
    }
}

// ==============================================================================

document.addEventListener('readystatechange', event => { 
    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        if(window.location.pathname === "/") {
            all_link_tag.forEach(item => {
                item.classList.add("active");
            })
            
            active_link_tag.forEach(item => {
                item.classList.remove("active");
            })

            completed_link_tag.forEach(item => {
                item.classList.remove("active");
            })
        } 

        if(window.location.pathname === "/active") {
            active_link_tag.forEach(item => {
                item.classList.add("active");
            })

            all_link_tag.forEach(item => {
                item.classList.remove("active");
            })

            completed_link_tag.forEach(item => {
                item.classList.remove("active");
            })
        }

        if(window.location.pathname === "/completed") {
            completed_link_tag.forEach(item => {
                item.classList.add("active");
            })

            all_link_tag.forEach(item => {
                item.classList.remove("active");
            })

            active_link_tag.forEach(item => {
                item.classList.remove("active");
            })
        }

        theme_btn.addEventListener("click", () => {
            theme();
        })
    }
});
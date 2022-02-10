const homeURL = window.location.origin + "/";
const activeURL = window.location.origin + "/active";
const completedURL = window.location.origin + "/completed";

const full_list = document.getElementById("full-list");
const active_list = document.getElementById("active-list");
const completed_list = document.getElementById("completed-list");

let currentURL = window.location.href

document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        if(currentURL == homeURL) {
            full_list.classList.add("active");
            active_list.classList.remove("active");
            completed_list.classList.remove("active");
        }
        
        
        if(currentURL == activeURL) {
            active_list.classList.add("active");
            full_list.classList.remove("active");
            completed_list.classList.remove("active");
        } 
        
        
        
        if(currentURL == completedURL) {
            completed_list.classList.add("active");
            full_list.classList.remove("active");
            active_list.classList.remove("active");
        } 
    }
});


// if(currentURL == homeURL) {
//     full_list.classList.add("active");
//     active_list.classList.remove("active");
//     completed_list.classList.remove("active");
// }


// if(currentURL == activeURL) {
//     active_list.classList.add("active");
//     full_list.classList.remove("active");
//     completed_list.classList.remove("active");
// } 



// if(currentURL == completedURL) {
//     completed_list.classList.add("active");
//     full_list.classList.remove("active");
//     active_list.classList.remove("active");
// } 
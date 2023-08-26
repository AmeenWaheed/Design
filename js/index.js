let skills = document.querySelector(".skills");
let progress = document.querySelectorAll(".prog span");

// window.onscroll = function () {
    
// }

// Stats Section
let stats = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .box .num");
let started = false;

window.onscroll = function () {
    // Action on stats section
    if (window.scrollY >= stats.offsetTop - 100) {
        if (!started) {
            nums.forEach(num => startCount(num));
        }
        started = true;
    }

    // Action on section skills
    if (window.scrollY >= skills.offsetTop - 100) {
        progress.forEach(span => span.style.width = span.dataset.progress);
    }
}

function startCount(element) {
    let goal = element.dataset.goal;

    let counter = setInterval(() => {
        element.innerHTML++;
        if (element.innerHTML == goal) {
            clearInterval(counter);
        }
    }, 2000 / goal);
}
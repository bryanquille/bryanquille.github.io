const body = document.querySelector("body");
const navbar = document.querySelector("#navbar");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const navLinks = document.querySelectorAll(".navlink");
const header = document.querySelector(".header");
const hero = document.querySelector("#hero");
const openModalBtn = document.querySelector('#open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const backScreen = document.querySelector('#back-screen');
const projectsModal = document.querySelector('#projects-modal');
const icons = [
'<i class="random-icons fa-solid fa-computer-mouse"></i>',
'<i class="random-icons fa-solid fa-robot"></i>',
'<i class="random-icons fa-solid fa-mug-hot"></i>',
'<i class="random-icons fa-solid fa-star"></i>',
'<i class="random-icons fa-solid fa-wand-magic-sparkles"></i>',
'<i class="random-icons fa-solid fa-music"></i>',
'<i class="random-icons fa-solid fa-poo"></i>',
'<i class="random-icons fa-solid fa-face-smile"></i>',
'<i class="random-icons fa-solid fa-ghost"></i>',
'<i class="random-icons fa-solid fa-headphones"></i>',
'<i class="random-icons fa-solid fa-fire"></i>',
'<i class="random-icons fa-solid fa-hippo"></i>',
'<i class="random-icons fa-solid fa-umbrella"></i>',
'<i class="random-icons fa-solid fa-gear"></i>',
'<i class="random-icons fa-solid fa-droplet"></i>',
'<i class="random-icons fa-solid fa-plane"></i>',
'<i class="random-icons fa-solid fa-lemon"></i>',
'<i class="random-icons fa-solid fa-tree"></i>',
'<i class="random-icons fa-solid fa-bicycle"></i>',
'<i class="random-icons fa-solid fa-snowflake"></i>',
'<i class="random-icons fa-solid fa-gamepad"></i>',
'<i class="random-icons fa-solid fa-fish"></i>',
'<i class="random-icons fa-solid fa-bug"></i>',
'<i class="random-icons fa-solid fa-rocket"></i>',
'<i class="random-icons fa-solid fa-motorcycle"></i>',
'<i class="random-icons fa-solid fa-puzzle-piece"></i>',
'<i class="random-icons fa-solid fa-vr-cardboard"></i>',
];
const iconsContainer = document.createElement("div");
iconsContainer.setAttribute("class", "icons-container");
hero.appendChild(iconsContainer);

// Mobile menu
openMenu.addEventListener("click", () => {
    navbar.classList.add("visible");
    body.setAttribute("style", "overflow: hidden;")
});

closeMenu.addEventListener("click", () => {
    navbar.classList.remove("visible");
    body.removeAttribute("style")
});

const navLinksArray = Array.from(navLinks);
navLinksArray.forEach((item) => {
    item.addEventListener("click", () => {
        navbar.classList.remove("visible");
        body.removeAttribute("style")
    });
});


// Positioning Random Icons
const sortIconsRandom = () => {
    icons.sort(() => Math.random() - 0.5);
    iconsContainer.innerHTML = icons.join("");
    const sortedRandomIcons = document.querySelectorAll(".random-icons");
    return sortedRandomIcons;
}

const randomPosition = (arr) => {
    let randomNumbers = {width: [], height: []};
    let w = hero.offsetWidth - (arr[0].offsetWidth * 2);  
    let w0 = arr[0].offsetWidth;
    let w1 = w/2;
    let h = hero.offsetHeight - (arr[0].offsetHeight * 1.5);  
    let h0 = header.offsetHeight + arr[0].offsetHeight;
    let h1 = h/2;

    for (let i=0; i<arr.length; i++) {
        if (i<arr.length * (1/4)) {
            randomNumbers.width.push(Math.floor(Math.random() * (w1 - w0) + w0));
            randomNumbers.height.push(Math.floor(Math.random() * (h1 - h0) + h0));
        } else if (i<arr.length * (1/2)) {
            randomNumbers.width.push(Math.floor(Math.random() * (w - w1) + w1));
            randomNumbers.height.push(Math.floor(Math.random() * (h1 - h0) + h0));
        } else if (i<arr.length * (3/4)) {
            randomNumbers.width.push(Math.floor(Math.random() * (w1 - w0) + w0));
            randomNumbers.height.push(Math.floor(Math.random() * (h - h1) + h1));
        } else {
            randomNumbers.width.push(Math.floor(Math.random() * (w - w1) + w1));
            randomNumbers.height.push(Math.floor(Math.random() * (h - h1) + h1));
        }
    }
    return randomNumbers;
}

const positionIcons = (randomNum, arr) => {
    for (let i=0; i<arr.length; i++) {
        arr[i].setAttribute("style",`top:${randomNum.height[i]}px; left:${randomNum.width[i]}px;`);
    }
}

const sortedRandomIcons = sortIconsRandom();
const randomNumbers = randomPosition(sortedRandomIcons);
positionIcons(randomNumbers, sortedRandomIcons);

setInterval(() => {
    const sortedRandomIcons = sortIconsRandom();
    const randomNumbers = randomPosition(sortedRandomIcons);
    positionIcons(randomNumbers, sortedRandomIcons);
}, 5000);

// Open and close modal with List of 100 projects
openModalBtn.addEventListener('click', () => {
    backScreen.classList.remove('hidden-modal');
    projectsModal.classList.remove('hidden-modal');
    body.setAttribute("style", "overflow: hidden;")
});

const closeModalBtnsArray = Array.from(closeModalBtns);
closeModalBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        backScreen.classList.add('hidden-modal');
        projectsModal.classList.add('hidden-modal');
        body.removeAttribute("style")
    });
});

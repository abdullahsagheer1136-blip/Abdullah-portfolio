/*=========================================
            LOADER
=========================================*/

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 800);

});


/*=========================================
        MOBILE NAVIGATION
=========================================*/

const menu = document.getElementById("menu");

const navbar = document.getElementById("navbar");

menu.addEventListener("click", function () {

    navbar.classList.toggle("active");

    if (menu.classList.contains("fa-bars")) {

        menu.classList.remove("fa-bars");

        menu.classList.add("fa-times");

    }

    else {

        menu.classList.remove("fa-times");

        menu.classList.add("fa-bars");

    }

});


/*=========================================
      CLOSE MENU AFTER CLICK
=========================================*/

const links = document.querySelectorAll("#navbar a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

        menu.classList.remove("fa-times");

        menu.classList.add("fa-bars");

    });

});

// MODE


let modebtn = document.querySelector("#mode");
let currmode = "dark";
let body = document.querySelector("body");
modebtn.addEventListener("click",()=>{
    if(currmode === "dark"){
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    } else{
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
console.log(currmode);
})
/*=========================================
            STICKY HEADER
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        header.style.background = "#111";

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";

    }

    else {

        header.style.background = "rgba(0,0,0,.55)";

        header.style.boxShadow = "none";

    }

});


/*=========================================
          SCROLL TO TOP
=========================================*/

const topButton = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});


topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================
          TYPING EFFECT
=========================================*/

const words = [

    "Software Engineer (Student)",

    "Frontend Developer",

    "Web Designer",

    "Bootstrap Developer",
    
    "Office Management"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

const typing = document.getElementById("typing");

function typeText() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex);

        charIndex++;

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeText, 1200);

            return;

        }

    }

    else {

        typing.textContent = current.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeText, deleting ? 70 : 120);

}

typeText();
/*=========================================
        SCROLL REVEAL ANIMATION
=========================================*/

const revealElements = document.querySelectorAll(

    ".about-container, .skill, .service-card, .project-card, .timeline-item, .certificate-card, .experience-card, .info-box"

);

function revealOnScroll() {

    revealElements.forEach(function (element) {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0px)";

        }

    });

}

revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(60px)";

    element.style.transition = "0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*=========================================
            ACTIVE NAVBAR
=========================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (

            window.scrollY >= sectionTop &&

            window.scrollY < sectionTop + sectionHeight

        ) {

            currentSection = section.getAttribute("id");

        }

    });

    links.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/*=========================================
        ANIMATED COUNTERS
=========================================*/

const counters = document.querySelectorAll(".counter-box h2");

let counterStarted = false;

function startCounters() {

    const section = document.getElementById("counter");

    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight && !counterStarted) {

        counterStarted = true;

        counters.forEach(function (counter) {

            const target = parseInt(counter.innerText);

            let value = 0;

            const speed = target / 80;

            const update = function () {

                if (value < target) {

                    value += speed;

                    counter.innerText = Math.ceil(value) + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", startCounters);

startCounters();


/*=========================================
        SKILL BAR ANIMATION
=========================================*/

const progressBars = document.querySelectorAll(".progress-bar");

let skillsAnimated = false;

function animateSkills() {

    const skills = document.getElementById("skills");

    if (!skills) return;

    if (

        skills.getBoundingClientRect().top <

            window.innerHeight - 100 &&

        !skillsAnimated

    ) {

        skillsAnimated = true;

        progressBars.forEach(function (bar) {

            const width = bar.style.width;

            bar.style.width = "0";

            setTimeout(function () {

                bar.style.width = width;

            }, 300);

        });

    }

}

window.addEventListener("scroll", animateSkills);

animateSkills();


/*=========================================
        CONTACT FORM
=========================================*/

// const form = document.getElementById("contactForm");

// if (form) {

//     form.addEventListener("submit", function (e) {

//         e.preventDefault();

//         alert("✅ Thank you! Your message has been sent.");

//         form.reset();

//     });

// }

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function () {

        alert("successfully Sending your message...✅");
        form.reset();

    });

}

/*=========================================
        IMAGE FLOAT EFFECT
=========================================*/

const image = document.querySelector(".image-box");

let move = 0;

setInterval(function () {

    move += 0.05;

    if (image) {

        image.style.transform =

            "translateY(" + Math.sin(move) * 10 + "px)";

    }

}, 30);


/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log("Portfolio Loaded Successfully 🚀");
/*=========================================
        MOUSE GLOW EFFECT
=========================================*/

const glow = document.createElement("div");

glow.id = "mouseGlow";

document.body.appendChild(glow);

glow.style.position = "fixed";
glow.style.width = "250px";
glow.style.height = "250px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
"radial-gradient(circle, rgba(255,123,0,.25) 0%, transparent 70%)";
glow.style.transform = "translate(-50%, -50%)";
glow.style.zIndex = "0";
glow.style.transition = "0.08s linear";

document.addEventListener("mousemove", function(e){

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});


/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

const buttons = document.querySelectorAll(".btn, .btn2");

buttons.forEach(function(btn){

    btn.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const size = Math.max(btn.clientWidth, btn.clientHeight);

        circle.style.width = size + "px";

        circle.style.height = size + "px";

        circle.style.left =

        e.offsetX - size/2 + "px";

        circle.style.top =

        e.offsetY - size/2 + "px";

        circle.style.position = "absolute";

        circle.style.borderRadius = "50%";

        circle.style.background =

        "rgba(255,255,255,.4)";

        circle.style.transform = "scale(0)";

        circle.style.animation =

        "ripple .6s linear";

        btn.appendChild(circle);

        setTimeout(function(){

            circle.remove();

        },600);

    });

});


/*=========================================
        PARALLAX EFFECT
=========================================*/

window.addEventListener("scroll",function(){

    const hero = document.querySelector(".hero");

    let value = window.scrollY;

    if(hero){

        hero.style.backgroundPositionY =

        value * 0.3 + "px";

    }

});


/*=========================================
        HERO IMAGE ROTATION
=========================================*/

const heroImage = document.querySelector(".image-box");

if(heroImage){

heroImage.addEventListener("mousemove",function(){

    heroImage.style.transform =

    "rotate(4deg) scale(1.05)";

});

heroImage.addEventListener("mouseleave",function(){

    heroImage.style.transform =

    "rotate(0deg) scale(1)";

});

}


/*=========================================
        RANDOM GLOW
=========================================*/

setInterval(function(){

    document.documentElement.style.setProperty(

    "--primary",

    "#ff7b00"

    );

},3000);


/*=========================================
        SMOOTH SECTION SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target =

        document.querySelector(

        this.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*=========================================
        PAGE VISIBILITY
=========================================*/

document.addEventListener("visibilitychange",function(){

    if(document.hidden){

        document.title="Come Back 😊";

    }

    else{

        document.title="Abdullah | Portfolio";

    }

});


/*=========================================
        FOOTER YEAR
=========================================*/

const year = new Date().getFullYear();

const copy = document.querySelector(".copyright");

if(copy){

copy.innerHTML=

"© "+year+" Abdullah Sagheer | All Rights Reserved.";

}


/*=========================================
        FINISH
=========================================*/

console.log("Premium Portfolio Ready 🚀");
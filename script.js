// ==========================
// ПЛАВНАЯ ПРОКРУТКА
// ==========================

const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function(e) {

        e.preventDefault();

        const id = this.getAttribute('href');

        const section = document.querySelector(id);

        section.scrollIntoView({
            behavior: 'smooth'
        });

    });
});

// ==========================
// АНИМАЦИЯ ПОЯВЛЕНИЯ БЛОКОВ
// ==========================

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.classList.add('hidden');

    observer.observe(section);

});

// ==========================
// АКТИВНЫЙ ПУНКТ МЕНЮ
// ==========================

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute('id');

        }

    });

    links.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === '#' + current) {

            link.classList.add('active');

        }

    });

});

// ==========================
// КНОПКА "НАВЕРХ"
// ==========================

const topButton = document.querySelector('.top-btn');

window.addEventListener('scroll', () => {

    if (!topButton) return;

    if (window.scrollY > 300) {

        topButton.style.display = 'flex';

    } else {

        topButton.style.display = 'none';

    }

});

if (topButton) {

    topButton.addEventListener('click', () => {

        window.scrollTo({

            top: 0,
            behavior: 'smooth'

        });

    });

}

// ==========================
// BURGER MENU
// ==========================

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {

    nav.classList.toggle("active");

});

// ==========================
// LIGHT / DARK THEME
// ==========================

const themeBtn = document.getElementById("theme-btn");

const body = document.body;


// сохраняем тему после перезагрузки

if(localStorage.getItem("theme") === "light"){

    body.classList.add("light");

    themeBtn.textContent = "☀️";

}


themeBtn.addEventListener("click", ()=>{


    body.classList.toggle("light");


    if(body.classList.contains("light")){

        localStorage.setItem("theme","light");

        themeBtn.textContent="☀️";

    }

    else{

        localStorage.setItem("theme","dark");

        themeBtn.textContent="🌙";

    }


});
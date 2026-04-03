const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const body = document.body;

function toggleMenu() {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("no-scroll");
}

// Открытие/закрытие по бургеру
burger.addEventListener("click", toggleMenu);

// Закрытие по клику на затемнение
overlay.addEventListener("click", toggleMenu);

// ⭐ Закрытие по клику на ссылку меню
document.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("click", () => {
        toggleMenu(); // закрываем меню
    });
});
// Плавный скролл к секциям
// =========================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
let clickCount = localStorage.getItem("clickCount") || 0; // Загружаем счетчик из localStorage
document.getElementById("counter").textContent = clickCount;

function animateHeart() {
    const heart = document.getElementById("heart");
    const counter = document.getElementById("counter");

    heart.classList.add("active");
    setTimeout(() => {
        heart.classList.remove("active");
    }, 300);

    clickCount++;
    counter.textContent = clickCount;
    localStorage.setItem("clickCount", clickCount); // Сохраняем счетчик в localStorage
}
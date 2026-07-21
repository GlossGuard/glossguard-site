// Placeholder for future interactive features
console.log("GlossGuard site loaded");

// Before & After Slider
const sliders = document.querySelectorAll('.ba-slider');

sliders.forEach(slider => {
    slider.addEventListener('input', (e) => {
        const container = e.target.closest('.ba-container');
        const afterImg = container.querySelector('.after');
        afterImg.style.clipPath = `inset(0 ${100 - e.target.value}% 0 0)`;
    });
});

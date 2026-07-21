// Placeholder for future interactive features
console.log("GlossGuard site loaded");

// Gallery → open Before/After slider
const galleryImages = document.querySelectorAll('.gallery-grid img');
const sliderSection = document.querySelector('.before-after');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        sliderSection.scrollIntoView({ behavior: "smooth" });
    });
});
;

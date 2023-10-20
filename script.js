const carousel = document.querySelector(".carousel");
let scrollValue = 0;

function swipeCarousel(direction) {
    const itemWidth = carousel.clientWidth;
    scrollValue += direction * itemWidth;
    scrollValue = Math.min(Math.max(0, scrollValue), itemWidth * (carousel.children.length - 1));
    carousel.style.transform = `translateX(-${scrollValue}px)`;
}

function autoChangeCarousel() {
    swipeCarousel(1); // Swipe left
}

// Add event listeners for swiping (optional, for manual control)
document.querySelector(".carousel-container").addEventListener("touchstart", (e) => {
    let startX = e.touches[0].clientX;
    document.addEventListener("touchmove", (e) => {
        let diff = startX - e.touches[0].clientX;
        if (diff > 50) {
            swipeCarousel(1); // Swipe left
        } else if (diff < -50) {
            swipeCarousel(-1); // Swipe right
        }
    });
    document.addEventListener("touchend", () => {
        document.removeEventListener("touchmove", null);
        document.removeEventListener("touchend", null);
    });
}

// Automatically change the carousel every 4 seconds
setInterval(autoChangeCarousel, 4000);

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".boxes");

    const checkVisibility = () => {
        boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            const boxBottom = box.getBoundingClientRect().bottom;

            // Check if the box is fully visible in the viewport
            if (boxTop < window.innerHeight && boxBottom > 0) {
                box.style.opacity = "1";
                box.style.transform = "translateY(0)";
            } else {
                box.style.opacity = "0";
                box.style.transform = "translateY(100%)";
            }
        });
    };

    // Check visibility on page load and scroll
    window.addEventListener("load", checkVisibility);
    window.addEventListener("scroll", checkVisibility);
});
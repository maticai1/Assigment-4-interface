document.addEventListener("DOMContentLoaded", function () {
    // Animation for arrow in masthead
    const arrow = document.querySelector(".masthead .arrow");

    if (arrow) {
        arrow.style.animation = "bounce 1.5s infinite";
    }

    // Hover effect for CTA buttons
    const ctaButtons = document.querySelectorAll(".cta");

    ctaButtons.forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Hover effect for Hover Buttons
    const hoverButtons = document.querySelectorAll(".hover-box");

    hoverButtons.forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("shadow-2xl");
    } else {
        header.classList.remove("shadow-2xl");
    }
});
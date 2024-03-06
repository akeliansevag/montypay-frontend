export const stickyNav = () => {
    window.addEventListener("scroll", () => {
        let offset = window.scrollY;
        const sticky = document.querySelector("header");
        if (offset > 10) {
            document.body.classList.add("dark-header")
            sticky.classList.add("bg-quaternary");
            // sticky.classList.remove(["absolute"]);
        } else {
            document.body.classList.remove("dark-header")
            // sticky.classList.add("absolute");
            sticky.classList.remove("bg-quaternary");
        }
    });
};
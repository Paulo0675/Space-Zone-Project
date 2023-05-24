class MobileNavbar {
    constructor(mobileMenu) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";
    }
    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log ("HEY"));
    }
    
    init() {
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;

    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
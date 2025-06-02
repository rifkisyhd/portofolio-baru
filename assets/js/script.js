// tittle web
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | rifkisyhd";
    document.getElementById("favicon").setAttribute("href", "assets/images/favicon.png"); // Ganti dengan icon Font Awesome
  } else {
    document.title = "Jangan lupa kembali ya";
    document.getElementById("favicon").setAttribute("href", "assets/images/favhand.png"); // Ganti dengan icon Font Awesome
    document.getElementById("favicon").setAttribute("href", "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z'/%3E%3C/svg%3E"); // Contoh icon Font Awesome
  }
});

// resposive navbar
document.getElementById("menu-toggle").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
});//   end responsive navbar



// navbar menu active
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const navLinks = document.querySelectorAll("#menu a");
    const sections = document.querySelectorAll("section");

    // Menutup menu saat link diklik (untuk tampilan mobile)
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            menu.classList.add("hidden");
        });
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    document.querySelector("#menu a.active")?.classList.remove("active");
                    const id = entry.target.getAttribute("id");
                    const navLink = document.querySelector(`#menu a[href="#${id}"]`);
                    if (navLink) {
                        navLink.classList.add("active");
                    }
                }
            });
        },
        { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});
// end navbar menu active
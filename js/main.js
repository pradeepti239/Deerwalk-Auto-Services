//top when reload
$(document).ready(function(){
    $(this).scrollTop(0);
})

// for navigation

const indicators = document.querySelectorAll(".indicator");
const sections = document.querySelectorAll("section");

const resetCurrentActiveIndicator = () => {
    const activeIndicator = document.querySelector(".active");
    activeIndicator.classList.remove("active");
};

const onSectionLeavesViewport = (section) => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    resetCurrentActiveIndicator();
                    const element = entry.target;
                    const indicator = document.querySelector(
                        `a[href='#${element.id}']`
                    );
                    indicator.classList.add("active");
                    return;
                }
            });
        },
        {
            root: null,
            rootMargin: "0px",
            threshold: 0.65,
        }
    );
    observer.observe(section);
};

indicators.forEach((indicator) => {
    indicator.addEventListener("click", function (event) {
        event.preventDefault();
        document
            .querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
        resetCurrentActiveIndicator();
        this.classList.add("active");
    });
});

sections.forEach(onSectionLeavesViewport);


//for gallery
$('#gallery').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    stagePadding:100,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})


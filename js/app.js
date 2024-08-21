//AOS animation--------------------------------------
AOS.init();

// hide navbar---------------------------------------
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('#navbar');

    if (window.scrollY > 20) {
        navbar.classList.add('navbar-hide')
    } else {
        navbar.classList.remove('navbar-hide')
    }
})


// hide toggle menu after click on nav link------------
const navItems = document.querySelector(".navbar-nav")
const navbarToggler = document.querySelector(".navbar-toggler")
const navbarCollapse = document.querySelector(".navbar-collapse")

navItems.addEventListener('click', () => {
    console.log('triggered')
    navbarToggler.classList.add("collapsed")
    navbarCollapse.classList.remove("show")
})


//scroll-to-top button------------------------------------
document.addEventListener('scroll', () => {
    const toTopButton = document.querySelector('#to-top');

    if (window.scrollY > 200) {
        toTopButton.classList.add('show')
    } else {
        toTopButton.classList.remove('show')
    }
})



// Counterup-----------------------------------------------------------------------------
let activated = false
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".container");

document.addEventListener("scroll", () => {

    if (!activated && window.scrollY > 200) {

        counters.forEach(counter => {
            let start = 0;
            let end = counter.dataset.count
            // console.log(end)

            let count = setInterval(() => {
                start++;
                counter.textContent = start;
                if (start == end) {
                    clearInterval(count);
                }
            }, 2000 / end)
        })
        activated = true;
    }
})

// -------------------------------------------------------------------------

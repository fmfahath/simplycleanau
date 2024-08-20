//scroll-to-top button------------------------------------
document.addEventListener('scroll', () => {
    const toTopButton = document.querySelector('#to-top');

    if (window.scrollY > 200) {
        toTopButton.classList.add('show')
    } else {
        toTopButton.classList.remove('show')
    }
})

// counter up--------------------------------------------
// const counters = document.querySelectorAll(".counters span");
// const container = document.querySelector(".container");

// let activated = false

// window.onscroll = () => {
//     if (!activated) {
//         if (window.scrollY >= container.offsetTop) {
//             counters.forEach(counter => {
//                 let start = 0;
//                 let end = counter.dataset.count
//                 // console.log(end)

//                 let count = setInterval(() => {
//                     start++;
//                     counter.textContent = start;
//                     if (start == end) {
//                         clearInterval(count);
//                     }
//                 }, 2000 / end)
//             })
//         }
//         activated = true;
//     }
// }

// -----------------------------------------------------------------------------
let activated = false
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".container");

document.addEventListener("scroll", () => {

    console.log('counter triggered')
    console.log('state: ', activated)
    console.log('counter scroll:', window.scrollY)

    if (!activated && window.scrollY > 200) {
        console.log("conter in");

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

// const innerWidth = window.innerWidth;
// const docElmWidth = document.documentElement.clientWidth;
// const docbdyWidth = document.body.clientWidth;

// console.log(innerWidth, docElmWidth, docbdyWidth)

// alert('Current scroll from the top: ' + window.scrollY);

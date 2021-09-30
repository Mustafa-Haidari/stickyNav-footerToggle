const nav = document.querySelector('#main');
const footer = document.querySelector('footer');
const x = document.querySelector('#footer-btn');
const li = document.querySelectorAll('nav li a');
const topOfNav = nav.offsetTop;
console.log("top of nav: " + topOfNav)


function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
    }
}

function showFooter() {
    footer.classList.toggle('showFoot');
    if (footer.classList.contains('showFoot')) {
        x.style.transform = 'rotate(0deg)';
        x.style.marginTop = '30px';
        x.style.borderRadius = '5px 5px 0px 0';
    } else {
        x.style.marginTop = '10px';
        x.style.borderRadius = '50%';
        x.style.transform = 'rotate(180deg)';
    }
}

window.addEventListener('scroll', fixNav);
x.addEventListener('click', showFooter);


// for (var i = 0; i < li.length; i++) {
//     li[i].addEventListener('click', function () {
//         let d = this.getAttribute('data-u');
//         if (footer.classList.contains('showFoot')) {
//             d.style.paddingTop = '20%';
//             // document.body.style.paddingTop = '20%';
//             // console.log(d)
//         } 
//         // else if (window.scroll) {
//         //     console.log(d)
//         // }
//     });
// }
const menuShow = document.querySelector('#nav-icon a .menu');
const menuClose = document.querySelector('#nav-icon a .close');
const info = document.querySelector('.nav-info');
const arrowUp = document.querySelector('.arrow-up');
const navHeader = document.querySelector('.nav-header #nav-contain');

// Menu show
menuShow.onclick = function (e) {
    e.preventDefault();
    info.classList.toggle('nav-info_show');
    e.target.classList.remove('active');
    menuClose.classList.add('active');
}

menuClose.onclick = function (e) {
    e.preventDefault();
    info.classList.toggle('nav-info_show');
    e.target.classList.remove('active');
    menuShow.classList.add('active');
}

// Arrow up
window.addEventListener('scroll', function (e) {
    if(window.scrollY > 600) {
        Object.assign(arrowUp.style, {  
            visibility: 'visible',
            opacity: 1,
        });
    } else {
        Object.assign(arrowUp.style, {  
            visibility: 'hidden',
            opacity: 0,
        });
    }
})

arrowUp.onclick = function (e) {
    window.scroll({top: 0, behavior: "smooth"});
}

// Header show
window.addEventListener('scroll', function (e) {
    if(window.scrollY > 300) {
        
    } 
})


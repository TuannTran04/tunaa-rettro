const menuShow = document.querySelector('#nav-icon a .menu');
const menuClose = document.querySelector('#nav-icon a .close');
const info = document.querySelector('.nav-info');


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



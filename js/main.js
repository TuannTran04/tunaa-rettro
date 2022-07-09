const menuShow = document.querySelector('.nav_icon a .menu');
const menuClose = document.querySelector('.nav_icon a .close');
const info = document.querySelector('.nav_info');
const arrowUp = document.querySelector('.arrow-up');
const navHeader = document.querySelector('.nav_header');
const navHeaderHide = document.querySelector('.nav_contain.hide');


// Menu show
menuShow.onclick = function (e) {
    e.preventDefault();
    info.classList.toggle('nav_info_show');
    e.target.classList.remove('active');
    menuClose.classList.add('active');
}

menuClose.onclick = function (e) {
    e.preventDefault();
    info.classList.toggle('nav_info_show');
    e.target.classList.remove('active');
    menuShow.classList.add('active');
}

// Arrow up
window.addEventListener('scroll', function (e) {
    if (window.scrollY > 600) {
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
    window.scroll({ top: 0, behavior: "smooth" });
}

// Header show
window.addEventListener('scroll', function (e) {
    if (window.scrollY > 300 && window.scrollY < 700) {
        navHeader.classList.add('hide');
        info.classList.add('hide');
    }
    else {
        navHeader.classList.remove('hide');
        info.classList.remove('hide');
    }
})

// Show select list and choose options
var navigationSelect = document.querySelector('.form_select_area_1');
var navigationSelect2 = document.querySelector('.form_select_area_2');
var navigationSelect3 = document.querySelector('.form_select_area_3');

function initSelect(elem) {
    var selectWrap = elem.querySelector('.form_select_appear');
    var dropSelect = elem.querySelector('.form_select_list');
    var options = elem.querySelectorAll('.option');
    const current = elem.querySelector('.current');
    
    selectWrap.addEventListener('click', function (e) {
        e.stopPropagation();
        selectWrap.classList.toggle('open');
        dropSelect.classList.toggle('open');
    });
    
    options.forEach(function (currentOption) {
        currentOption.addEventListener('click', function (e) {
            e.stopPropagation();
            current.innerText = currentOption.textContent;
            selectWrap.classList.toggle('open');
            dropSelect.classList.toggle('open');
        });
    });
};

initSelect(navigationSelect);
initSelect(navigationSelect2);
initSelect(navigationSelect3);

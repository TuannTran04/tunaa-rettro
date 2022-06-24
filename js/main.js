const menuShow = document.querySelector('.nav_icon a .menu');
const menuClose = document.querySelector('.nav_icon a .close');
const info = document.querySelector('.nav_info');
const arrowUp = document.querySelector('.arrow-up');
const navHeader = document.querySelector('.nav_header');
const navHeaderHide = document.querySelector('.nav_contain.hide');
const selectAppears = document.querySelectorAll('.form_select_appear');
const selectAppearLists = document.querySelectorAll('.form_select_list');
const options = document.querySelectorAll('.option');
const currents = document.querySelectorAll('.current');
console.log(selectAppears);
console.log(selectAppearLists);
console.log(currents);


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
selectAppears.forEach(function (selectAppear, index) {
    selectAppear.addEventListener('click', function (e) {
        selectAppear.classList.toggle('open');
        selectAppearLists[index].classList.toggle('open');
    } ) 
})


var optionss = options.forEach(function(option, index) {
    option.addEventListener('click', function (e) {
        let textOp = option.innerText;
        console.log(textOp);
        
        
    })
})


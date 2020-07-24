
$('.owl_mobile').owlCarousel({
loop:true,
margin:10,
nav:true,
responsive:{
    0:{
        items:3
    },
    600:{
        items:3
    },
    1000:{
        items:3
    }
}
})


let menuMobile = document.querySelector('.menu_mobile');
let wrapWeb = document.querySelector('.wrap_web');
let beforButton = document.querySelector('.befor_button');
let menuClick = document.querySelectorAll('.menu_click');
let buttonFour = document.querySelectorAll('.button_four');
let newClass = document.querySelectorAll('.new_class');
let noneNew = document.querySelectorAll('.none_new');
let blockNew = document.querySelectorAll('.block_new');



menuClick.forEach(function(item, i){
    item.addEventListener('click', function() {
    menuMobile.classList.toggle('left_menu');
    wrapWeb.classList.toggle('wrap_bacground');
});
});

buttonFour.forEach(function(ite, a) {
    ite.addEventListener('click', function(){
    beforButton.classList.toggle('acctive_befor');
    wrapWeb.classList.toggle('black_back');
    for(let i = 0; i < newClass.length; i++){
        newClass[i].classList.toggle('back_class');     
    }
    for(let i = 0; i < blockNew.length; i++){
        blockNew[i].classList.toggle('two_none');     
    } 
    for(let i = 0; i < noneNew.length; i++){
        noneNew[i].classList.toggle('one_block');     
    }   
    })
})     

/*====================================================================================================

--------------------------Detail--------------------------

Theme Name: Getup
Author: Ridwan ( Akang Kancil )
Support: akangkancil@yahoo.com
file: Javascript
Descriptions: Getup Project HTML Template With Category Simple Portfolio
Version: 1.0

--------------------------Sitemap Code--------------------------

_1.  home
|
_2.  about
|
_3.  portfolio
|
_4.  services

====================================================================================================*/

// ============ 1. home

let containerLoad = document.querySelector('.container-load');
    load = document.querySelector('.container-load .load');
    navbarBox = document.querySelector('.navbar');
    
    window.addEventListener('load', function(){
        load.style.animation="hide-slow 5s";
        setTimeout(() => {
            containerLoad.style.display="none";
        }, 5000);
    })

// ============ 2. about

$(document).ready(function(){
    $('.partner-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        puseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

// ============ 3. portfolio

let containerItem = document.querySelector('.gallery-portfolio').children,
    item = containerItem.length,
    overlayImg = document.querySelector('.modal .pict-show');
    btnNextItem = document.querySelector('.carousel-control-next');
    btnPrevItem = document.querySelector('.carousel-control-prev');

    for(let i = 0 ; i < item ; i++){
        containerItem[i].addEventListener('click', function(){
            itemIndex=i;
            show();
        })
    }
    
    btnNextItem.addEventListener('click', function(){
        if( itemIndex == item-1){
            itemIndex = 0;
        }else{
            itemIndex++;
        }
        show();
    })

    btnPrevItem.addEventListener('click', function(){
        if( itemIndex == 0 ){
            itemIndex = item-1;
        }else{
            itemIndex--;
        }
        show();
    })

    function show(){
        imgSrc = containerItem[itemIndex].querySelector('.thumb .thumb-pict').getAttribute('src');
        overlayImg.src = imgSrc;
    }


    let navBox = document.querySelector('.navbar');
        navMenu = document.querySelectorAll('.navbar .navbar-nav .nav-item .nav-link');
        btnClose = document.querySelector('.btn-close-content');
        btnContact = document.querySelector('.btn-contact');
        sectionContent = document.querySelectorAll('section');
        homeBox = document.querySelector('.home');

    navMenu.forEach(ok=>{
        ok.addEventListener('click', function(){
            navBox.querySelector('.active-menu').classList.remove('active-menu');
            ok.classList.add('active-menu');
            let value = ok.textContent;

            sectionContent.forEach(showContent=>{
                if(showContent.getAttribute('data-id')=== value){
                    showContent.classList.add('d-block');
                    showContent.classList.remove('d-none');
                    showContent.style.animation="show-slow 1.5s ease-in-out";
                    btnClose.classList.remove('d-flex');
                    btnClose.classList.remove('d-none');
                    navBox.classList.add('bg-cdark');
                    navBox.classList.add('bdr-down');
                    navBox.style.animation="show-down 1s ease-in-out";
                    btnClose.style.animation="show-slow 1s ease-in-out";
                    setTimeout(() => {
                        navBox.style.animation="";                        
                        btnClose.style.animation="";
                    }, 1000);
                    load.style.animation="hide .5s";
                    containerLoad.style.display="flex";
                    setTimeout(() => {
                    containerLoad.style.display="none";
                    }, 500);
                }else{
                    showContent.classList.remove('d-block');
                    showContent.classList.add('d-none');
                }

                btnClose.addEventListener('click', function(){
                    btnClose.classList.remove('d-flex');
                    btnClose.classList.add('d-none');
                    showContent.classList.add('d-none');
                    navBox.classList.add('bg-transparent')
                    navBox.classList.remove('bg-cdark')
                    navBox.style.animation="show-down 1s ease-in-out";
                    navBox.classList.remove('bdr-down');
                    btnClose.style.animation="show-down 1s ease-in-out";
                    homeBox.classList.remove('d-none');
                    homeBox.style.animation="show-slow 1.5s ease-in-out";
                    setTimeout(() => {
                        showContent.style.animation="";   
                        homeBox.style.animation="";
                        }, 1500);
                    load.style.animation="hide-boom 1.5s";
                    containerLoad.style.display="flex";
                    setTimeout(() => {
                    containerLoad.style.display="none";
                    }, 1500);
                    ok.classList.remove('active-menu');
                    navBox.querySelector('.navbar-nav .d-none').classList.add('active-menu');
                })

                btnContact.addEventListener('click', function (){
                    let valueCs = btnContact.textContent;
                        tes = document.querySelector('.menu-c');
                    if(showContent.getAttribute('data-cs-id')=== valueCs ){
                        showContent.classList.add('d-block');
                        showContent.classList.remove('d-none');
                        load.style.animation="hide .5s";
                        containerLoad.style.display="flex";
                        ok.classList.remove('active-menu');
                        tes.classList.add('active-menu');
                        setTimeout(() => {
                            containerLoad.style.display="none";
                        }, 500);
                    }else{
                        showContent.classList.remove('d-block');
                        showContent.classList.add('d-none');
                    }
                })

            })
        })
    })

// ============ 4. services

var testimonial = document.querySelector('#testimonial');
var carousel = new bootstrap.Carousel(testimonial, {
  interval: 2000,
  wrap: true,
  touch: true,
  pause: false
})
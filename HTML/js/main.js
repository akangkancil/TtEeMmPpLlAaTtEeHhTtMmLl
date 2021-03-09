// variabel

let containerLoader = document.querySelector('.container-load');
    navbar   = document.querySelector('.navbar');
    navbarLink   = document.querySelectorAll('.navbar .nav-link');
    sectionHome = document.querySelector('.home');
    homePict   = document.querySelector('.home .pict-home');
    homeMouse   = document.querySelector('.home .mouse-down');
    line1Text  = document.querySelector('.home .line-1 h1');
    line1Line  = document.querySelector('.home .line-1 .line');
    line2Text  = document.querySelector('.home .line-2 h3');
    line2Line  = document.querySelector('.home .line-2 .line');
    section   = document.querySelector('section');



// page load this

window.addEventListener('load', ()=>{
    
    containerLoader.classList.add('hidden');

setTimeout(() => {
        navbar.style.opacity='1';
        navbar.style.animation = 'y 1.5s ease-in-out';
        homePict.style.opacity='1';
        homePict.style.animation = 'y 8.5s ease-in-out';
        homeMouse.style.opacity='1';
        homeMouse.style.animation = 'y 9s ease-in-out';
        line1Text.style.animation = 'y 2.5s ease-in-out';
        line1Text.style.opacity = '1';
        line1Line.style.animation = 'r 2.5s ease-in-out';
        line1Line.style.opacity = '1';
        line2Text.style.animation = 'y 4.5s ease-in-out';
        line2Text.style.opacity = '1';
        line2Line.style.animation = 'l 3s ease-in-out';
        line2Line.style.opacity = '1';
    },0);
})

// page scroll this

window.addEventListener('scroll',function(){

navbarLink.forEach(ok=>{
      let section = document.querySelector(ok.hash);
      let scrollPosition = document.documentElement.scrollTop;
  
      if(
        scrollPosition >= section.offsetTop - section.offsetHeight * 0.01 &&
        scrollPosition <=
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.01
      ){
        ok.classList.add('active-menu');
      }else{
        ok.classList.remove('active-menu');
      }


      if (window.pageYOffset > 50) {
          sectionHome.style.paddingTop='4rem';
          navbar.classList.add('navTop');
      }else{
          sectionHome.style.paddingTop='0';
          navbar.classList.remove('navTop');
          navbarLink[0].classList.add('active-menu');
          navbarLink[1].classList.remove('active-menu');
      }


    })
})
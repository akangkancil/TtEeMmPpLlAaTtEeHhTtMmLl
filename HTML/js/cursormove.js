var item = document.querySelector('.item-works img');

document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    item.style.display="block";
    item.style.left = x + "px";
    item.style.top = y + "px";
})

// page scroll
window.addEventListener('scroll', ()=>{
    // let sectionAbout = document.querySelector('.about');
    let sectionHome = document.querySelector('.home');
    let sectionPosition = sectionHome.getBoundingClientRect().top;
                        //   sectionHome.getBoundingClientRect().top;
                        //   sectionHome.getBoundingClientRect().top;
                            
    let screenPosition = window.innerHeight /1.7;

    if (sectionPosition < screenPosition ) {
    }
    
    if (window.pageYOffset > 50) {
        sectionHome.style.paddingTop='4rem';
        navbar.classList.add('navTop');
    }else{
        sectionHome.style.paddingTop='0';
        navbar.classList.remove('navTop');
    }
})
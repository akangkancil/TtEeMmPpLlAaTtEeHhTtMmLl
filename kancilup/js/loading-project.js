
// page load this
window.addEventListener('load', ()=>{
    let containerLoader = document.querySelector('.container-load');
        contentPict     = document.querySelector('.content .pict-page-project');
        btnBackHome     = document.querySelector('.btn-back-home');
        line1Text       = document.querySelector('.content .line-1 h1');
        line1Line       = document.querySelector('.content .line-1 .line');
        line2Text       = document.querySelector('.content .line-2 h3');
        line2Line       = document.querySelector('.content .line-2 .line');

    containerLoader.classList.add('hidden');

    setTimeout(() => {
        btnBackHome.style.opacity='1';
        btnBackHome.style.animation = 'y 7.5s ease-in-out';
        contentPict.style.opacity='1';
        contentPict.style.animation = 'y 5.5s ease-in-out';
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

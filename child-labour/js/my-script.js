let mainheader = document.querySelector('.mainHeader');

window.addEventListener('scroll',()=>{
    
    if(window.scrollY > 100){
        mainheader.classList.add("scrolled-header")
       

    }
    else if(window.scrollY < 100){
        mainheader.classList.remove("scrolled-header")
       
    }
});
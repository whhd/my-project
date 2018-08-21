document.addEventListener('DOMContentLoaded',function(){

   

    var header = document.querySelector('.header');
    var shang = document.querySelector('.tops');

   
    window.onscroll = function(){
                
        var scrollY = window.scrollY;
        
        if
            (scrollY >= top.offsetHeight){
             header.className ='header fixed';
             shang.className = 'shang mgb'; 
        }
        else
        {
            header.className ='header';
             shang.className = 'top'; 
        }
    }
});
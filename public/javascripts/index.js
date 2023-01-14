
document.addEventListener("scroll",function(e){

    var positionY = window.scrollY;

    if (positionY==0){
        $(".content-nav").removeClass("nav");
        $(".content-text").removeClass("nav-text");
    }
    else {
        $(".content-nav").addClass("nav");
        $(".content-text").addClass("nav-text");
    }


})





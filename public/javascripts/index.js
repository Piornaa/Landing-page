
document.addEventListener("scroll",function(e){

    var positionY = window.scrollY;

    if (positionY==0){
        $(".content-nav").removeClass("nav");
        $(".content-text").removeClass("nav-text");
        $(".content-text img").addClass("move");
    }
    else {
        $(".content-nav").addClass("nav");
        $(".content-text").addClass("nav-text");
        $(".content-text img").removeClass("move");
    }

})

$(".menu").click((event)=>{
    console.log(event)
    $(".link").toggleClass("link-show");

});





$(document).ready(function(){

    $(window).scroll(function(){
        let windowTop = $(window).scrollTop()
        let aboutTop = $("#about").offset().top
    
        if(windowTop >= aboutTop){
            
            $("nav").css({
                "background": "#20c997",
    
            })
            $("nav a.active").css({"color" : "#333"})
    
            $("nav a").mouseenter(function(){
                $(this).css("color","#333")
            })
            $("nav a").mouseleave(function(){
                $(this).css("color","#fff")
            })
        }
        else{
            $("nav").css({"background": "transparent",})
            $("nav a.active").css({"color" : "#20c997"})
    
            $("nav a").mouseenter(function(){
                $(this).css("color","#20c997")
            })
            $("nav a").mouseleave(function(){
                $(this).css("color","#fff")
            })
        }
        
    })

    $(".stick > i").click(function(){
        $(".stick").toggleClass("show")
    })


    $(".arrow").click(function(){
            let aboutTop = $("#about").offset().top
            $(window).scrollTop(aboutTop + 1)
    })
})
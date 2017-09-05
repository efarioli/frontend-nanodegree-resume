// alert("loloolooolol");
$(document).ready(function() {
    var scrollLink = $('.scroll');
    //Smooth Scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            'scrollTop': $(this.hash).offset().top - 60
        }, 1000 )
    });

   // Active link interchange
    $(window).scroll(function(){
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function(){

            var sectionOffset = $(this.hash).offset().top;
            console.log("/////////////////");
            console.log(sectionOffset);
            console.log(this.hash);
            console.log(this);
            console.log("/////////////////");
           // console.log(sectionOffset);
            if (sectionOffset <= (scrollbarLocation +80)){
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }

        });

    });
});
 
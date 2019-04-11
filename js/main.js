


(function($) {
$(document).ready(function() {

    //stops faq from collapsing on itself
    $('div[data-parent="#faq"]').click(function(e){
        target = $(this).attr('href')
        if ($(target).hasClass('show')) {
          e.stopPropagation()
        }
        else {
            $('div[data-parent="#faq"]').each(function() {
                $(this).removeClass("active-title");
            });
            $(this).addClass("active-title");
        }
      })


    var offs = 86;
    //allows dropdown to be nav
    $('#top-menu-dropdown').on('change', function() {
      $('html, body').animate({
            scrollTop: $(this.value + "_content").offset().top - offs
        }, 500);
    })

    //event listeners for menu items
    $("#about_li").click(function() {
        $('html, body').animate({
            scrollTop: ($("#about_content").offset().top) - offs
        }, 500);
    });
    $("#learn_li").click(function() {
        $('html, body').animate({
            scrollTop: ($("#learn_content").offset().top) - offs
        }, 500);
    });
    $("#apply_li").click(function() {
        $('html, body').animate({
            scrollTop: ($("#apply_content").offset().top) - offs
        }, 500);
    });
    $("#logistics_li").click(function() {
        $('html, body').animate({
            scrollTop: ($("#logistics_content").offset().top) - offs
        }, 500);
    });
    $("#sponsor_li").click(function() {
        $('html, body').animate({
            scrollTop: ($("#sponsor_content").offset().top) - offs
        }, 500);
    });

    //event listeners for bottom navigation links
    $("#about_bt").click(function () {
        $('html, body').animate({
            scrollTop: ($("#about_content").offset().top) - offs
        }, 500);
    });

    $("#learn_bt").click(function () {
        $('html, body').animate({
            scrollTop: ($("#learn_content").offset().top) - offs
        }, 500);
    });

    $("#apply_bt").click(function () {
        $('html, body').animate({
            scrollTop: ($("#apply_content").offset().top) - offs
        }, 1000);
    });

    $("#logistics_bt").click(function () {
        $('html, body').animate({
            scrollTop: ($("#logistics_content").offset().top) - offs
        }, 500);
    });

    $("#sponsor_bt").click(function () {
        $('html, body').animate({
            scrollTop: ($("#sponsor_content").offset().top) - offs
        }, 500);
    });

    var navChildren = $("#top-menu li").children();
    var aArray = [];
    for (var i = 0; i < navChildren.length; i++) {
        var aChild = navChildren[i];
        var ahref = $(aChild).attr('href');

        aArray.push(ahref + "_content");
    }

    mlhCheck();
    $(window).resize(function() {
        mlhCheck();
    });
    function mlhCheck(){
        console.log($("#mlh-trust-badge").position);
        if ($(window).width() < 991){
            $("#mlh-trust-badge").css({top: offs});
        } else {
            $("#mlh-trust-badge").css({top: 0});
        }
    }


    $(window).scroll(function() {
        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $(document).height();
        for (var i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
            var secPosition = $(theID).offset().top;
            secPosition = secPosition - 76;
            var divHeight = $(theID).height();
            divHeight = divHeight;
            var baseObject = theID.split('_')[0];
            if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
                $("a[href='" + baseObject + "']").parent().addClass("current-section");
            } else {
                $("a[href='" + baseObject + "']").parent().removeClass("current-section");
            }
        }
    });

    window.onscroll = function() {navCheck();};

    // Get the navbar
    var navbar = document.getElementById("nav");
    var quote = document.getElementById("firstsec");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop/4;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function navCheck() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            quote.classList.add("pad");
            $("#mlh-trust-badge").css("visibility", "visible");
            $("#mlh-trust-badge").slideDown();
            document.body.style.backgroundColor = "#000000";
        } else {
            $('.cover').each(function(){
                $(this).css('margin-top', (-1 * $(window).scrollTop() / parseInt($(this).attr('speed'))));
            });
            navbar.classList.remove("sticky");
            quote.classList.remove("pad");
            $("#mlh-trust-badge").slideUp();
            document.body.style.backgroundColor = "#253A79";
        }
    }
})
})(jQuery);


/*


background-image: linear-gradient(to bottom, #000000, #0a0004, #0e000d, #0b0016, #00011e, #000122, #010226, #00022a, #00022e, #010232, #020337, #03033b, #05033f);




*/

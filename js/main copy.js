// $(window).scroll(function () {
console.log($(window).scrollTop());
var lastScrollTop = 0;
$(window).scroll(function (event) {
    console.log($(window).scrollTop());
    var st = $(window).scrollTop();
    console.log($(window).scrollTop());
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    console.log(scrolled)
    console.log(document.documentElement.scrollTop)

    if (st > lastScrollTop) {

        if (document.documentElement.scrollTop >= 450) {


            $("#myBar").css("width", "16%")
            // document.getElementById("myBar").style.width = "16%"

            if (document.documentElement.scrollTop >= 450) {
                $("progress-container").css("display", "block");
            }
            $(".image1").css("display", "block");
            $(".image1").addClass("imageDisplay1");
            $(".XpADD").css("display", "block");
        }
        //   if (document.documentElement.scrollTop >= 465){
        //     $("#myBar").css("width", "16%")
        //   }

        if (document.documentElement.scrollTop >= 445) {
            $("#myBar").css("width", "48%")
            document.getElementById("myBar").style.width = "40%"
        }

        if (document.documentElement.scrollTop >= 500) {

            //  $("#myBar").css("width", "48%")
            document.getElementById("myBar").style.width = "45%";
            //  document.getElementById("myBar").style.width = scrolled + "%";
            // document.getElementById("myBar").style.width = "48%"
            $(".XpADD").css("display", "block");
            $(".image2").css("display", "block");
            $(".image2").addClass("imageDisplay2");
            $(".image1").removeClass("imageDisplay1");
            $(".image1").addClass("imageDisplay");

        }



        if (document.documentElement.scrollTop >= 600) {

            // document.getElementById("myBar").style.width = "68%"
            $("#myBar").css("width", "80%")
            $(".XpADD").css("display", "block");
            $(".image3").css("display", "block");
            $(".image3").addClass("imageDisplay3");
        }
    } else {
        if (document.documentElement.scrollTop <= 400) {
            if (scrolled >= 0 && scrolled <= 33) {
                document.getElementById("myBar").style.width = "0%";
            }
            $("#myBar").css("width", "15%")
            $("progress-container").css("display", "block");
            $(".XpADD").removeClass("display", "block");
            $(".image1").removeClass("display", "none");
            $(".image1").removeClass("imageDisplay1");
            // $(".image1").addClass("imageDisplay1");
            $(".image1").removeClass("imageDisplay");



        }
        if (document.documentElement.scrollTop <= 430) {
            if (scrolled >= 33 && scrolled <= 66) {
                document.getElementById("myBar").style.width = "20%";
            }
            $(".XpADD").removeClass("display", "block");
            $(".image2").removeClass("display", "none");
            $(".image2").removeClass("imageDisplay2");
            $("progress-container").css("display", "block");
        }

        if (document.documentElement.scrollTop <= 450) {
            document.getElementById("myBar").style.width = "16%";
            $("#myBar").css("width", "16%")
        }



        if (document.documentElement.scrollTop <= 500) {
            if (scrolled >= 66 && scrolled <= 200) {
                document.getElementById("myBar").style.width = "40%";
            }
            $(".XpADD").removeClass("display", "block");
            $(".image3").removeClass("display", "none");
            $(".image3").removeClass("imageDisplay3");
            $("progress-container").css("display", "block");
        }

    }

    if (document.documentElement.scrollTop <= 300) {
        $(".image1").removeClass("imageDisplay1");
        $(".image2").removeClass("imageDisplay2");
        $(".image3").removeClass("imageDisplay3");
        $(".XpADD").css("display", "none");
        $(".progress-container").css("display", "none");
        $(".image1").removeClass("imageDisplay");
    }


    if (st > lastScrollTop) {

        if (document.documentElement.scrollTop >= 480) {
            $("progress-container").css("display", "remove");
            $("#myBar").css("width", "33%")
            // document.getElementById("myBar").style.width = "33%"
            $(".XpADD").css("display", "block");
            $(".image1").css("display", "block")

            // $(".image1").addClass("imageDisplay1");
            $(".image1").addClass("imageAnimation1")

        }
        if (document.documentElement.scrollTop >= 580) {
            $("#myBar").css("width", "50%")
            // document.getElementById("myBar").style.width = scrolled + "%";

            $(".XpADD").css("display", "block");
            $(".image2").css("display", "block");
            $(".image1").removeClass("imageAnimation1")
            $(".image1").addClass("imageDisplay")

            $(".image1").removeClass("imageAnimation1")
            $(".image1").addClass("imageDisplay");

            $(".image2").addClass("imageAnimation2")

        }
        if (document.documentElement.scrollTop >= 630) {
            $("#myBar").css("width", "70%")
        }



        if (document.documentElement.scrollTop >= 680) {
            $("#myBar").css("width", "101%")
            // document.getElementById("myBar").style.width = "101%";
            $(".XpADD").css("display", "block");
            $(".image2").removeClass("imageAnimation2")
            // $(".image3").css("display", "block");
            $(".image3").addClass("imageAnimation3")
        }
    } else {
        if (document.documentElement.scrollTop <= 350) {
            if (scrolled >= 0 && scrolled <= 33) {
                document.getElementById("myBar").style.width = "15%";

            }
            $("#myBar").css("width", "15%")
            $(".XpADD").removeClass("display", "block");
            // $(".image1").css("display", "none");
            $(".image1").removeClass("imageAnimation1")
            $(".image2").removeClass("imageAnimation2")
            // $(".image1").removeClass("imageAnimation1")
        }
        if (document.documentElement.scrollTop <= 450 && document.documentElement.scrollTop >= 350) {
            if (scrolled >= 33 && scrolled <= 66) {
                document.getElementById("myBar").style.width = "35%";
            }
            // $(".image2").css("display", "none");
            $(".image1").addClass("imageAnimation1")
            $(".image2").removeClass("imageAnimation2")
            $("progress-container").css("display", "block");

        }

        if (document.documentElement.scrollTop <= 480) {
            document.getElementById("myBar").style.width = "35%";


        }
        if (document.documentElement.scrollTop <= 550 && document.documentElement.scrollTop >= 450) {
            if (scrolled >= 66 && scrolled <= 100) {
                document.getElementById("myBar").style.width = "70%";
            }
            $(".image2").addClass("imageAnimation2")
            $(".image3").removeClass("imageAnimation3")
            $("progress-container").css("display", "block");


        }


        if (document.documentElement.scrollTop <= 100) {

            $(".image1").removeClass("imageAnimation1")
            $(".image2").removeClass("imageAnimation2")
            $(".image3").removeClass("imageAnimation3")

            $(".image3").removeClass("display", "none");
            $(".image2").removeClass("display", "none");
            $(".image1").removeClass("display", "none");



        }

    }

    lastScrollTop = st;




    console.log($(window).scrollTop());
    var st = $(window).scrollTop();
    if (st > lastScrollTop) {
        if (document.documentElement.scrollTop >= 150) {
            $('.animated').each(function () {
                let imagePos = $(this).offset().top;
                let imageHeight = $(this).height();
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
                    $('.intro').addClass("fadeOutUpBig");
                    $('.candlestick').addClass("scale-in-hor-left");
                    $('.display-none').addClass("display none")


                    $('.anim-buy-now').removeClass("delay-2s");
                    $('.anim-sell-now').addClass("delay-2s");

                    $('.anim-buy-now').addClass("rotateInDownLeft");
                    $('.anim-sell-now').addClass("rotateInUpRight");
                    $('.anim-which-tf').addClass("rotateInUpRight");
                }
                if (topOfWindow <= 150) {
                    $('.intro').removeClass("fadeOutUpBig");
                    $('.candlestick').removeClass("scale-in-hor-left");
                    $('.anim-buy-now').removeClass("rotateInDownLeft");
                    $('.anim-sell-now').removeClass("rotateInUpRight");
                    $('.anim-which-tf').removeClass("rotateInUpRight");
                }
            });
        }
    } else {
        if (document.documentElement.scrollTop <= 800) {
            $('.animated').each(function () {
                let imagePos = $(this).offset().top;
                let imageHeight = $(this).height();
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
                    $('.anim-sell-now').removeClass("delay-2s");
                    $('.anim-buy-now').addClass("delay-2s");
                    $('.anim-buy-now').addClass("rotate-out-top");
                    // $('.candlestick').removeClass("scale-in-hor-left");
                    $('.anim-sell-now').addClass("rotate-out-right ");
                    // setTimeout(() => {
                    //     $('.anim-buy-now').addClass("rotate-out-top");
                    // }, 20);
                    $('.anim-which-tf').addClass("rotate-out-right");
                    $('.intro').addClass("fadeOutUpBig");
                    // if (document.documentElement.scrollTop >= 500 && document.documentElement.scrollTop <= 300) {
                    //     $('.candlestick').addClass("scale-out-hor-left");
                    // }
                }
                if (topOfWindow <= 190) {
                    // $('.candlestick').addClass("scale-out-hor-left");
                    $('.intro').removeClass("fadeOutUpBig");
                    // $('.candlestick').removeClass("scale-out-hor-left");
                    $('.anim-buy-now').removeClass("rotateInDownLeft");
                    $('.anim-sell-now').removeClass("rotateInUpRight");
                    $('.anim-which-tf').removeClass("rotateInUpRight");
                    // $('.candlestick').removeClass("scale-in-hor-left");
                }
                if (topOfWindow <= 130) {
                    $('.candlestick').addClass("scale-out-hor-left");
                }
                if (topOfWindow <= 20) {
                    $('.candlestick').removeClass("scale-out-hor-left");
                    $('.anim-buy-now').removeClass("rotateInDownLeft");
                    $('.anim-sell-now').removeClass("rotateInUpRight");
                    $('.anim-which-tf').removeClass("rotateInUpRight");
                    $('.candlestick').removeClass("scale-in-hor-left");
                    $('.candlestick').removeClass("scale-out-hor-left");
                }
            });
        }
    }
    // lastScrollTop = st;
    // if (document.documentElement.scrollTop >= 1015) {
    if (st > lastScrollTop && document.documentElement.scrollTop >= 1015) {
        $('.animated123').each(function () {
            let imagePos = $(this).offset().top;
            let imageHeight = $(this).height();
            let topOfWindow = $(window).scrollTop();
            var conditin = document.documentElement.scrollTop;
            //console.log($('.candlestick1'));
            console.log({
                imagePos,
                imageHeight,
                topOfWindow,
                conditin
            });
            if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
                $('.anim-buy-now2').removeClass("delay-2s");
                $('.anim-sell-now2').addClass("delay-2s");
                $('.intro').addClass("fadeOutUpBig");
                $('.candlestick1').addClass("scale-in-hor-left1");
                $('.anim-buy-now2').addClass("rotateInDownLeft1");
                $('.anim-sell-now2').addClass("rotateInUpRight");
                $('.anim-which-tf2').addClass("rotateInUpRight");

            }
            if (topOfWindow <= 1500) {
                $('.candlestick1').removeClass("scale-in-hor-left1");
                $('.anim-buy-now2').removeClass("rotateInDownLeft1");
                $('.anim-sell-now2').removeClass("rotateInUpRight");
                $('.anim-which-tf2').removeClass("rotateInUpRight");
            }
        });
        // }
    } else {
        if (document.documentElement.scrollTop <= 2357) {
            $('.animated123').each(function () {
                let imagePos = $(this).offset().top;
                let imageHeight = $(this).height();
                let topOfWindow = $(window).scrollTop();
                var conditin = document.documentElement.scrollTop;
                //console.log($('.candlestick1'));
                console.log({
                    imagePos,
                    imageHeight,
                    topOfWindow,
                    conditin
                });
                if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {

                    $('.anim-sell-now2').removeClass("delay-2s");
                    $('.anim-buy-now2').addClass("delay-2s");
                    $('.candlestick1').addClass("scale-out-hor-left");
                    $('.candlestick1').removeClass("scale-in-hor-left1");
                    // $('.anim-buy-now2').addClass("rotate-out-top");
                    // $('.anim-buy-now2').addClass("rotate-out-top");

                    // $('.intro').addClass("fadeOutUpBig");
                    // $('.candlestick1').addClass("scale-in-hor-left1");
                    // $('.anim-buy-now2').addClass("rotateInDownLeft1");
                    // $('.anim-sell-now2').addClass("rotateInUpRight");
                    // $('.anim-which-tf2').addClass("rotateInUpRight");
                }
                if (topOfWindow <= 1500) {
                    // $('.candlestick1').removeClass("scale-in-hor-left1");
                    $('.candlestick1').removeClass("scale-out-hor-left");
                    $('.anim-buy-now2').removeClass("rotateInDownLeft1");
                    $('.anim-sell-now2').removeClass("rotateInUpRight");
                    $('.anim-which-tf2').removeClass("rotateInUpRight");
                }
            });
        }
    }


    // third Animation pic


    if (st > lastScrollTop && document.documentElement.scrollTop >= 1500) {
        $('.animated3').each(function () {
            let imagePos = $(this).offset().top;
            let imageHeight = $(this).height();
            let topOfWindow = $(window).scrollTop();
            var conditin = document.documentElement.scrollTop;
            //console.log($('.candlestick1'));
            console.log({
                imagePos,
                imageHeight,
                topOfWindow,
                conditin
            });
            if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
                $('.anim-buy-now2').removeClass("delay-2s");
                $('.anim-sell-now2').addClass("delay-2s");
                $('.intro').addClass("fadeOutUpBig");
                $('.candlestick3').addClass("scale-in-hor-left1");
                $('.anim-buy-now2').addClass("rotateInDownLeft1");
                $('.anim-sell-now2').addClass("rotateInUpRight");
                $('.anim-which-tf2').addClass("rotateInUpRight");

            }
            // if (topOfWindow <= 3000) {
            //     $('.candlestick3').removeClass("scale-in-hor-left1");
            //     $('.anim-buy-now2').removeClass("rotateInDownLeft1");
            //     $('.anim-sell-now2').removeClass("rotateInUpRight");
            //     $('.anim-which-tf2').removeClass("rotateInUpRight");
            // }
        });
        // }
        // } else {
        //     if (document.documentElement.scrollTop <= 2357) {
        //         $('.animated123').each(function () {
        //             let imagePos = $(this).offset().top;
        //             let imageHeight = $(this).height();
        //             let topOfWindow = $(window).scrollTop();
        //             var conditin = document.documentElement.scrollTop;
        //             //console.log($('.candlestick1'));
        //             console.log({
        //                 imagePos,
        //                 imageHeight,
        //                 topOfWindow,
        //                 conditin
        //             });
        //             if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {

        //                 $('.anim-sell-now2').removeClass("delay-2s");
        //                 $('.anim-buy-now2').addClass("delay-2s");
        //                 $('.candlestick3').addClass("scale-out-hor-left");
        //                 $('.candlestick3').removeClass("scale-in-hor-left1");
        //                 // $('.anim-buy-now2').addClass("rotate-out-top");
        //                 // $('.anim-buy-now2').addClass("rotate-out-top");

        //                 // $('.intro').addClass("fadeOutUpBig");
        //                 // $('.candlestick1').addClass("scale-in-hor-left1");
        //                 // $('.anim-buy-now2').addClass("rotateInDownLeft1");
        //                 // $('.anim-sell-now2').addClass("rotateInUpRight");
        //                 // $('.anim-which-tf2').addClass("rotateInUpRight");
        //             }
        //             if (topOfWindow <= 1500) {
        //                 // $('.candlestick1').removeClass("scale-in-hor-left1");
        //                 $('.candlestick3').removeClass("scale-out-hor-left");
        //                 $('.anim-buy-now2').removeClass("rotateInDownLeft1");
        //                 $('.anim-sell-now2').removeClass("rotateInUpRight");
        //                 $('.anim-which-tf2').removeClass("rotateInUpRight");
        //             }
        //         });
        //     }
    }





    lastScrollTop = st;

    // if (document.documentElement.scrollTop <= window.pageYOffset) {


    // if (document.documentElement.scrollTop >= 2274) {
    //     $('.animated3').each(function () {
    //         var imagePos = $(this).offset().top;
    //         var imageHeight = $(this).height();
    //         var topOfWindow = $(window).scrollTop();
    //         var conditin = document.documentElement.scrollTop;
    //         //console.log($('.candlestick1'));
    //         console.log({
    //             imagePos,
    //             imageHeight,
    //             topOfWindow,
    //             conditin
    //         });
    //         if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {

    //             // $('.intro').addClass("fadeOutUpBig");
    //             $('.candlestick3').addClass("scale-in-hor-left");
    //             // $('.anim-buy-now2').addClass("rotateInDownLeft");
    //             // $('.anim-sell-now2').addClass("rotateInUpRight");
    //             // $('.anim-which-tf2').addClass("rotateInUpRight");
    //         }

    //         // if (topOfWindow < 2274) {
    //         //     $('.candlestick3').removeClass("scale-in-hor-left");

    //         // }

    //     });

    // }







    // }

});
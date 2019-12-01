var width = screen.width;

if (width > 1024) {
    // $(window).scroll(function () {
    console.log($(window).scrollTop());
    $(document).ready(function () {
        $(this).scrollTop(0);

        var lastScrollTop = 0;
        let countsix = 0
        let counthundred = 0
        let countfiften = 0
        // var countfifteeen1 = 15
        // var counthundred1 = 100
        $(window).scroll(function (event) {
            console.log($(window).scrollTop());
            var st = $(window).scrollTop();
            console.log($(window).scrollTop());
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;

            // if (st > lastScrollTop) {
            //     if (document.documentElement.scrollTop >= 20) {
            //         // $(".Crypto3").removeClass("imageForex3");
            //         $(".Forex3").css("display", "none");
            //         if (document.documentElement.scrollTop == 0) {
            //             $(".Forex3").css("display", "none");

            //         }

            //     }
            // } else {
            //     if (document.documentElement.scrollTop <= 1000) {
            //         // $(".Crypto3").removeClass("imageForex3")
            //         $(".Crypto3").css("display", "none", " !important");
            //         $(".Forex3").css("display", "none");
            //     }

            // }


            if (st > lastScrollTop) {
                var setPosition = 450
                if (document.documentElement.scrollTop >= setPosition) {
                    $("#myBar").css("width", "16%");
                    if (document.documentElement.scrollTop >= setPosition) {
                        $("progress-container").css("display", "block");
                    }
                    $(".image1").css("display", "block");
                    $(".image1").addClass("imageDisplay1");
                    $(".XpADD").css("display", "block");
                }
                if (document.documentElement.scrollTop >= setPosition - 5) {
                    $("#myBar").css("width", "48%");
                    document.getElementById("myBar").style.width = "40%"
                }
                if (document.documentElement.scrollTop >= setPosition + 50) {
                    document.getElementById("myBar").style.width = "45%";
                    $(".XpADD").css("display", "block");
                    $(".image2").css("display", "block");
                    $(".image2").addClass("imageDisplay2");
                    $(".image1").removeClass("imageDisplay1");
                    $(".image1").addClass("imageDisplay");
                }
                if (document.documentElement.scrollTop >= setPosition + 150) {
                    $("#myBar").css("width", "80%");
                    $(".XpADD").css("display", "block");
                    $(".image3").css("display", "block");
                    $(".image3").addClass("imageDisplay3");
                }
            } else {
                var setPosition = 400
                if (document.documentElement.scrollTop <= setPosition) {
                    if (scrolled >= 0 && scrolled <= 33) {
                        document.getElementById("myBar").style.width = "0%";
                    }
                    $("progress-container").css("display", "none");
                    $("#myBar").css("width", "15%");
                    $("progress-container").css("display", "block");
                    $(".XpADD").removeClass("display", "block");
                    $(".image1").removeClass("display", "none");
                    $(".image1").removeClass("imageDisplay1");

                    $(".image1").removeClass("imageDisplay");
                }
                if (document.documentElement.scrollTop <= setPosition + 30) {
                    if (scrolled >= 33 && scrolled <= 66) {
                        document.getElementById("myBar").style.width = "20%";
                    }
                    $(".XpADD").removeClass("display", "block");
                    $(".image2").removeClass("display", "none");
                    $(".image2").removeClass("imageDisplay2");
                    $("progress-container").css("display", "block");
                }
                if (document.documentElement.scrollTop <= setPosition + 50) {
                    document.getElementById("myBar").style.width = "16%";
                    $("#myBar").css("width", "16%")
                }
                if (document.documentElement.scrollTop <= setPosition + 100) {
                    if (scrolled >= 66 && scrolled <= 200) {
                        document.getElementById("myBar").style.width = "40%";
                    }
                    $(".XpADD").removeClass("display", "block");
                    $(".image3").removeClass("display", "none");
                    $(".image3").removeClass("imageDisplay3");
                    $("progress-container").css("display", "block");
                }


                if (document.documentElement.scrollTop <= setPosition - 100) {
                    $(".image1").removeClass("imageDisplay1");
                    $(".image2").removeClass("imageDisplay2");
                    $(".image3").removeClass("imageDisplay3");
                    $(".XpADD").css("display", "none");
                    $(".progress-container").css("display", "none");
                    $(".image1").removeClass("imageDisplay");
                    $(".ETHEREUM").css("display", "none");
                    $(".Crypto3").css("display", "none");
                    $(".Crypto3").css("display", "none");


                }
            }


            if (st > lastScrollTop) {
                var setPosition = 480
                if (document.documentElement.scrollTop >= setPosition) {
                    $("progress-container").css("display", "remove");
                    $("#myBar").css("width", "33%");
                    $(".XpADD").css("display", "block");
                    $(".image1").css("display", "block");
                    $(".image1").addClass("imageAnimation1");
                }
                if (document.documentElement.scrollTop >= setPosition + 100) {
                    $("#myBar").css("width", "50%")
                    $(".XpADD").css("display", "block");
                    $(".image2").css("display", "block");
                    $(".image1").removeClass("imageAnimation1")
                    $(".image1").addClass("imageDisplay");
                    $(".image1").removeClass("imageAnimation1")
                    $(".image1").addClass("imageDisplay");
                    $(".image2").addClass("imageAnimation2");
                }
                if (document.documentElement.scrollTop >= setPosition + 150) {
                    $("#myBar").css("width", "70%")
                }
                if (document.documentElement.scrollTop >= setPosition + 200) {
                    $("#myBar").css("width", "101%");
                    $(".XpADD").css("display", "block");
                    $(".image2").removeClass("imageAnimation2")
                    $(".image3").addClass("imageAnimation3");

                    if (document.documentElement.scrollTop >= setPosition + 270) {


                        $(".image1").css("display", "none");
                        $(".image2").css("display", "none");
                        $(".image3").css("display", "none");
                        $(".XpADD").css("display", "none");
                        $(".progress-container").css("display", "none");
                        $("#myBar").css("display", "none");
                        $(".animateOut").css("display", "block   ");
                    }
                }
            } else {
                var setPosition = 350
                if (document.documentElement.scrollTop <= setPosition) {
                    if (scrolled >= 0 && scrolled <= 33) {
                        document.getElementById("myBar").style.width = "15%";

                    }
                    $("#myBar").css("width", "15%");
                    $(".XpADD").removeClass("display", "block");
                    $(".image1").removeClass("imageAnimation1");
                    $(".image2").removeClass("imageAnimation2");
                }
                if (document.documentElement.scrollTop <= 450 && document.documentElement.scrollTop >= setPosition) {
                    if (scrolled >= 33 && scrolled <= 66) {
                        document.getElementById("myBar").style.width = "35%";
                    }

                    $(".image1").addClass("imageAnimation1");
                    $(".image2").removeClass("imageAnimation2");
                    $(".image3").removeClass("imageDisplay3");
                    $("progress-container").css("display", "block");
                    $(".image3").removeClass("imageDisplay2");
                    $(".image3").css("display", "none");

                }
                if (document.documentElement.scrollTop <= setPosition + 130) {
                    document.getElementById("myBar").style.width = "35%";
                }
                if (document.documentElement.scrollTop <= 550 && document.documentElement.scrollTop >= setPosition + 450) {
                    if (scrolled >= 66 && scrolled <= 100) {
                        document.getElementById("myBar").style.width = "70%";
                    }
                    $(".image2").addClass("imageAnimation2");
                    $(".image3").removeClass("imageAnimation3");
                    $(".image3").removeClass("imageDisplay3");
                    $("progress-container").css("display", "block");
                }


                if (document.documentElement.scrollTop <= setPosition + 250) {
                    $(".image1").removeClass("imageAnimation1");
                    $(".image2").removeClass("imageAnimation2");
                    $(".image3").removeClass("imageAnimation3");
                    $(".image3").removeClass("display", "none");
                    $(".image2").removeClass("display", "none");
                    $(".image1").removeClass("display", "none");
                }
                if (document.documentElement.scrollTop <= setPosition + 370 && document.documentElement.scrollTop >= setPosition + 340) {


                    $(".image1").css("display", "block");
                    $(".image2").css("display", "block");
                    $(".image3").css("display", "block");
                    $(".XpADD").css("display", "block");
                    $(".progress-container").css("display", "block");
                    $("#myBar").css("display", "block");

                    $(".animateOut").css("display", "none");

                }
            }
            // if (st > lastScrollTop) {
            //     if (document.documentElement.scrollTop >= 750) {


            //         $(".image1").css("display", "none");
            //         $(".image2").css("display", "none");
            //         $(".image3").css("display", "none");
            //         // $(".image1").removeClass("imageAnimation1")
            //         // $(".image2").removeClass("imageAnimation2")
            //         // $(".image3").removeClass("imageAnimation3")
            //         // $(".image3").removeClass("display", "none");
            //         // $(".image2").removeClass("display", "none");
            //         // $(".image1").removeClass("display", "none");
            //         $(".XpADD").css("display", "none");
            //         $(".progress-container").css("display", "none");
            //         $("#myBar").css("display", "none");
            //     }
            // } else {

            //     if (document.documentElement.scrollTop == 722) {
            //         $(".image1").css("display", "block");
            //         $(".image1").css("display", "block");
            //         $(".image2").css("display", "block");
            //         $(".image3").css("display", "block");
            //         $(".progress-container").css("display", "block");
            //         $("#myBar").css("display", "block");
            //     }
            // }


            if (st > lastScrollTop) {

                var stockImagePosition = 1000;

                if (document.documentElement.scrollTop >= stockImagePosition) {

                    $(".Forex1").css("display", "block");
                    $(".Forex1").addClass("imageForex1");
                    $(".forextext").css("display", "block");
                    $(".textForex").css("display", "block");
                    if (document.documentElement.scrollTop >= stockImagePosition) {
                        var timeclear1
                        timeclear1 = setTimeout(() => {
                            // if (document.documentElement.scrollTop >= stockImagePosition+ 10) {
                            $(".Forex2").css("display", "block");
                            $(".Forex2").addClass("imageForex2");
                            clearTimeout(timeclear1);
                            // }
                        }, 200);
                    }
                    if (document.documentElement.scrollTop >= stockImagePosition) {

                        var timeclear
                        timeclear = setTimeout(() => {
                            // if (document.documentElement.scrollTop >= stockImagePosition +20) {
                            $(".Forex3").css("display", "block");
                            $(".Forex3").addClass("imageForex3");
                            clearTimeout(timeclear);
                            // }
                        }, 400);
                    }
                }
            } else {
                var stockImagePosition = 1025;

                if (document.documentElement.scrollTop <= stockImagePosition) {
                    $(".Forex3").css("display", "none");
                    $(".Forex3").removeClass("imageForex3");
                    $(".cleartime").css("display", "none");

                    setTimeout(() => {
                        // if (document.documentElement.scrollTop <= stockImagePosition -120) {
                        $(".Forex2").css("display", "none");
                        $(".Forex2").removeClass("imageForex2");
                        // }
                    }, 200);
                    setTimeout(() => {
                        // if (document.documentElement.scrollTop <= stockImagePosition -100) {
                        $(".Forex1").css("display", "none")
                        $(".Forex1").removeClass("imageForex1");
                        $(".forextext").css("display", "none");
                        $(".textForex").css("display", "none");
                        // }
                    }, 400);
                }
                if (document.documentElement.scrollTop <= stockImagePosition - 200) {
                    $(".Forex1").removeClass("imageForex1");
                    $(".Forex2").removeClass("imageForex2");
                    $(".Forex3").removeClass("imageForex3");
                    $(".forextext").css("display", "none");
                    $(".textForex").css("display", "none");
                }
            }
            if (st > lastScrollTop) {
                var stockImagePosition = 1100;

                if (document.documentElement.scrollTop >= stockImagePosition) {
                    //  $(".profitlevel1").removeClass("imageprofit1");
                    //     $(".profitlevel1").removeClass("imageprofit2");
                    //     $(".profitlevel1").removeClass("imageprofit3");
                    $(".stocks1").css("display", "block");
                    $(".stocks1").addClass("imageStocks1");
                    $(".Stockstext").css("display", "block");
                    $(".AAPL").css("display", "block");
                    $(".textStocks").css("display", "block");

                    setTimeout(() => {
                        // if (document.documentElement.scrollTop >= stockImagePosition + 10) {
                        $(".stocks2").css("display", "block");
                        $(".stocks2").addClass("imageStocks2");
                        $(".NFLX").css("display", "block");
                        // }
                    }, 200);
                    setTimeout(() => {
                        // if (document.documentElement.scrollTop >= stockImagePosition + 20) {
                        $(".stocks3").css("display", "block");
                        $(".stocks3").addClass("imageStocks3");
                        $(".GOOG").css("display", "block");
                        // }
                    }, 400);
                }
            } else {
                var stockImagePosition = 1105;
                if (document.documentElement.scrollTop <= stockImagePosition) {
                    $(".stocks3").css("display", "none");
                    $(".stocks3").removeClass("imageStocks3");
                    $(".GOOG").css("display", "none");
                    setTimeout(() => {
                        // if (document.documentElement.scrollTop <= stockImagePosition - 20) {
                        $(".stocks2").css("display", "none");
                        $(".stocks2").removeClass("imageStocks2");
                        $(".NFLX").css("display", "none");
                        // }
                    }, 200);
                    setTimeout(() => {
                        // if (document.documentElement.scrollTop <= stockImagePosition -5) {
                        $(".stocks1").css("display", "none");
                        $(".stocks1").removeClass("imageStocks1");
                        $(".Stockstext").css("display", "none");
                        $(".AAPL").css("display", "none");
                        $(".textStocks").css("display", "none");
                        // }
                    }, 400);
                }
                if (document.documentElement.scrollTop <= stockImagePosition - 250) {
                    $(".stocks1").removeClass("imageForex1");
                    $(".stocks2").removeClass("imageForex2");
                    $(".stocks3").removeClass("imageForex3");
                    $(".Stockstext").css("display", "none");
                    $(".GOOG").css("display", "none");
                    $(".AAPL").css("display", "none");
                    $(".NFLX").css("display", "none");
                    $(".textStocks").css("display", "none");
                }
            }
            if (st > lastScrollTop) {
                var stockImagePosition = 1150
                $(".supportLevel").removeClass("scale-out-hor-left2 ")
                if (document.documentElement.scrollTop >= stockImagePosition) {
                    $(".Crypto1").css("display", "block");
                    $(".Crypto1").addClass("imageCrypto1");
                    $(".Cryptotext").css("display", "block");
                    $(".BITCOIN").css("display", "block");
                    $(".textCrypto").css("display", "block");

                    setTimeout(() => {
                        // if (document.documentElement.scrollTop >= stockImagePosition + 10) {
                        $(".Crypto2").css("display", "block");
                        $(".Crypto2").addClass("imageCrypto2");
                        $(".RIPPLE").css("display", "block");
                        // }
                    }, 200);
                    setTimeout(() => {
                        // if (document.documentElement.scrollTop >= stockImagePosition + 20) {
                        $(".Crypto3").css("display", "block");
                        $(".Crypto3").addClass("imageCrypto3");
                        $(".ETHEREUM").css("display", "block");
                        // }
                    }, 400);

                    if (document.documentElement.scrollTop >= stockImagePosition + 150) {
                        $(".animateOut").addClass("fade-out");
                        $(".HideAnimation").css("display", "block");

                    }

                }
            } else {
                var stockImagePosition = 1180
                if (document.documentElement.scrollTop <= stockImagePosition) {
                    $(".Crypto3").css("display", "none");
                    $(".Crypto3").removeClass("imageCrypto3");
                    $(".ETHEREUM").css("display", "none");
                    setTimeout(() => {
                        // if (document.documentElement.scrollTop <= stockImagePosition - 20) {
                        $(".Crypto2").css("display", "none");
                        $(".Crypto2").removeClass("imageCrypto2");
                        $(".RIPPLE").css("display", "none");
                        // }
                    }, 200);
                    setTimeout(() => {
                        // if (document.documentElement.scrollTop <= stockImagePosition - 5) {
                        $(".Crypto1").css("display", "none");
                        $(".Crypto1").removeClass("imageCrypto1");
                        $(".Cryptotext").css("display", "none");
                        $(".BITCOIN").css("display", "none");
                        $(".textCrypto").css("display", "none");
                        // }
                    }, 400);
                }
                if (document.documentElement.scrollTop <= stockImagePosition - 300) {
                    $(".Crypto1").removeClass("imageForex1");
                    $(".Crypto2").removeClass("imageForex2");
                    $(".Crypto3").removeClass("imageForex3");
                    $(".Crypto3").css("display", "none");
                    $(".Cryptotext").css("display", "none");
                    $(".ETHEREUM").css("display", "none");
                    $(".RIPPLE").css("display", "none");
                    $(".textCrypto").css("display", "none");
                    $(".BITCOIN").css("display", "none");
                }
                if (document.documentElement.scrollTop <= stockImagePosition + 108) {
                    $(".animateOut").removeClass("fade-out");
                    $(".HideAnimation").css("display", "none");




                }
            }


            //********************* */ third Animation *******************************
            {
                if (st > lastScrollTop) {
                    var User1ImagePosition = 1400

                    if (document.documentElement.scrollTop <= User1ImagePosition - 50) {




                        $(".blackpic").removeClass("scale-in-hor-right")
                        $(".blackpic").removeClass("imagerolling")
                        // $(".animatedimage").removeClass("fade-out-bottom ");
                        $(".UserOne").removeClass("fade-out-bottom ");
                        $(".arrowImage").removeClass("fade-out-bottom ");
                        $(".textanimation1").removeClass("css-typingremove");
                        $(".coursor").removeClass(" scale-out-tr");
                        $(".out_image").removeClass("scale-out-hor-left2 ")
                        $(".animatedTextUp").removeClass("css-typingremove");
                        $(".CollaborativeText").removeClass("css-typingremove");
                        $(".animatedTextUp").removeClass("css-typingremove");
                        $(".out_image").removeClass("imageSupportLevel2")
                        $(".out_image").removeClass("imageSupportLevel1")
                        $(".out_image").removeClass("scale-in-hor-left")
                        $(".supportLevel").removeClass("scale-out-hor-left2 ")




                    }
                    if (document.documentElement.scrollTop >= User1ImagePosition) {
                        // out_image
                        $(".blackpic").addClass("scale-out-hor-right")
                        $(".blackpic").addClass("imagerolling")
                        // $(".graph").addClass("fade-out1");
                        $(".graph").addClass("graphImage1");
                        // $(".animatedTextUp").addClass("text-pop-up-top");
                        $(".animatedTextUp").css("display", "block");
                        $(".CollaborativeText").css("display", "block");
                        $(".CollaborativeText").addClass("css-typing1");
                    }
                    if (document.documentElement.scrollTop >= User1ImagePosition + 100) {
                        $(".out_image").addClass("imageSupportLevel")
                        $(".out_image").addClass("scale-in-hor-left")
                        setTimeout(() => {

                            $(".animatedimage").addClass("text-pop-up-top");
                            $(".UserOne").addClass("imageUser1");
                            $(".arrowImage").addClass("imageArrow");
                            $(".animatedimage").css("display", "block");

                            let new_interval = setInterval(() => {
                                let element = document.getElementById("nocount");
                                if (countfiften >= 16) {
                                    clearInterval(new_interval)
                                } else {
                                    element.innerText = countfiften
                                    countfiften++
                                }
                            }, 200);

                        }, 500);
                        setTimeout(() => {
                            $(".textshow").css("display", "block");
                            $(".display").css("display", "block");
                            $(".textanimation1").addClass("css-typing1");
                        }, 1000);
                        // $(".out_image").addClass("imagerolling")
                        // $(".out_image").addClass("scale-out-hor-right")
                        // setInterval(() => {
                        // }, interval);

                        if (document.documentElement.scrollTop >= User1ImagePosition + 50) {


                        }
                        setTimeout(() => {
                            $(".coursor").addClass("cursorimage");
                            $(".coursor").addClass("  text-pop-up-bl");

                            setTimeout(() => {
                                $(".yellowColor").addClass("colorYellow");
                                $(".out_image").addClass("imageSupportLevel1")
                            }, 500);



                        }, 2000);
                    }
                    // if (document.documentElement.scrollTop >= User1ImagePosition + 60) {
                    //     setTimeout(() => {
                    //         $(".coursor").addClass("cursorimage");
                    //         $(".coursor").addClass("  text-pop-up-bl");
                    //     }, 1000);
                    //     // setTimeout(() => {
                    //     // }, 1200);
                    // }
                    if (document.documentElement.scrollTop >= 1600) {
                        $(".coursor").addClass(" scale-out-tr");
                        $(".animateOut1").addClass("fade-out");
                        $(".out_image").addClass("imageSupportLevel2")
                        $(".out_image").addClass("scale-in-hor-left")
                        // $(".animatedTextUp").removeClass("text-pop-up-top");
                        // $(".animatedTextUp").css("display", "none");
                    }
                } else {
                    var User1ImagePosition = 1400
                    if (document.documentElement.scrollTop <= User1ImagePosition - 40) {
                        // $(".blackpic2").addClass("scale-up-hor-right")
                        // $(".blackpic2").addClass("imagerolling2")

                        $(".blackpic").addClass("imagerolling")
                        $(".blackpic").addClass("scale-in-hor-right")
                        $(".animatedTextUp").addClass("css-typingremove");

                        $(".out_image").addClass("scale-in-hor-left")

                        // $('p#nocount').removeAttr('id');

                        //  $(".animatedimage").addClass("fade-out-bottom ");

                    }
                    if (document.documentElement.scrollTop <= User1ImagePosition + 150) {
                        $(".UserOne").addClass("fade-out-bottom ");
                        $(".arrowImage").addClass("fade-out-bottom ");
                    }
                    if (document.documentElement.scrollTop <= User1ImagePosition + 250) {
                        setTimeout(() => {
                            $(".coursor").addClass(" scale-out-tr");
                            $(".yellowColor").removeClass("colorYellow");
                            $(".out_image").removeClass("imageSupportLevel2")

                            let new_interval = setInterval(() => {
                                let element = document.getElementById("nocount");
                                if (countfiften <= -1) {
                                    clearInterval(new_interval)
                                } else {
                                    element.innerText = countfiften
                                    countfiften--
                                }
                            }, 100);


                        }, 500);
                        setTimeout(() => {


                            $(".out_image").removeClass("imageSupportLevel1")
                        }, 1000);
                        setTimeout(() => {
                            // $(".animatedimage").addClass("fade-out-bottom ");
                            // $(".UserOne").addClass("fade-out-bottom ");
                            // $(".arrowImage").addClass("fade-out-bottom ");

                            $(".supportLevel").addClass("scale-out-hor-left2 ")

                        }, 1500);


                        $(".textanimation1").addClass("css-typingremove");
                        $(".animateOut1").removeClass("fade-out");
                    }



                    if (document.documentElement.scrollTop <= User1ImagePosition - 100) {

                        $(".CollaborativeText").addClass("css-typingremove");
                        $(".blackpic2").removeClass("imagerolling2out")
                        $(".blackpic2").removeClass("imagerolling2")
                        $(".blackpic").removeClass("imagerolling")
                        $(".out_image").removeClass("imagerolling")
                        $(".graph").removeClass("graphImage1");
                        // $(".out_image").removeClass("imageSupportLevel2")
                    }
                    if (document.documentElement.scrollTop <= User1ImagePosition - 200) {
                        $(".blackpic").removeClass("scale-out-hor-right")
                        $(".blackpic").removeClass("imagerolling")
                        $(".graph").removeClass("graphImage1");
                        $(".animatedTextUp").css("display", "none");
                        $(".CollaborativeText").css("display", "none");
                        $(".CollaborativeText").removeClass("css-typing1");
                        $(".out_image").removeClass("imageSupportLevel")
                        $(".out_image").removeClass("scale-in-hor-left")
                        // $(".animatedimage").removeClass("text-pop-up-top");
                        $(".UserOne").removeClass("imageUser1");
                        $(".arrowImage").removeClass("imageArrow");
                        $(".animatedimage").css("display", "none");
                        $(".textshow").css("display", "none");
                        $(".display").css("display", "none");
                        $(".textanimation1").removeClass("css-typing1");
                        $(".coursor").removeClass("cursorimage");
                        $(".coursor").removeClass("  text-pop-up-bl");
                        $(".yellowColor").removeClass("colorYellow");
                        $(".out_image").removeClass("imageSupportLevel1")
                        $(".animateOut1").removeClass("fade-out");
                        $(".out_image").removeClass("imageSupportLevel2")
                        $(".out_image").removeClass("scale-in-hor-left")
                        $(".supportLevel").removeClass("scale-out-hor-left2 ")
                        // var countfifteeen= 0

                    }
                }

                if (st > lastScrollTop) {
                    var User2ImagePosition = 1600
                    if (document.documentElement.scrollTop >= User2ImagePosition) {
                        // removeClassz
                        $(".UserSecond").removeClass("fade-out-bottom ");
                        $(".animatedimage2").removeClass("fade-out-bottom ");
                        $(".textanimation2").removeClass("css-typingremove");
                        $(".arrowImage2").removeClass("fade-out-bottom");
                        $(".animatedTextUp2").removeClass("css-typingremove");

                        //****** */
                        $(".animatedTextUp2").addClass("css-typingThirdAnimatonSecond");
                        $(".animatedTextUp2").css("display", "block");
                        // $(".animatedTextUp2").addClass("text-pop-up-top");
                        $(".typingtext").addClass("css-typing1");
                    }
                    if (document.documentElement.scrollTop >= User2ImagePosition + 100) {
                        $(".UserSecond").addClass("imageUser2");
                        // $(".blackpic").removeClass("imagerolling")
                        // $(".imageArrow1").addClass("imageArrow2");
                        let new_interval = setInterval(() => {
                            let element = document.getElementById("nocount2");
                            if (countsix >= 6) {
                                clearInterval(new_interval)
                            } else {
                                element.innerText = countsix
                                countsix++
                            }
                        }, 400);
                        $(".arrowImage2").addClass("imageArrow2");
                        $(".animatedimage2").addClass("text-pop-up-top");
                        $(".textshow1").css("display", "block");
                        $(".animatedimage2").css("display", "block");
                        // $(".animatedimage1").css("display", "block");
                    }
                    if (document.documentElement.scrollTop >= User2ImagePosition + 60) {
                        // $(".coursor").addClass("cursorimage");
                        // $(".coursor").addClass("  text-pop-up-bl");
                        setTimeout(() => {
                            $(".display1").css("display", "block");
                            $(".textanimation2").addClass("css-typing1");
                        }, 1000);
                    }
                } else {
                    var User2ImagePosition = 2000
                    if (document.documentElement.scrollTop <= User2ImagePosition) {
                        setTimeout(() => {
                            $(".UserSecond").addClass("fade-out-bottom ");
                            $(".animatedimage2").addClass("fade-out-bottom ");
                            $(".arrowImage2").addClass("fade-out-bottom");



                        }, 1000);
                        $(".textanimation2").addClass("css-typingremove");
                        let new_interval = setInterval(() => {
                            let element = document.getElementById("nocount2");
                            if (countsix <= -1) {
                                clearInterval(new_interval)
                            } else {
                                element.innerText = countsix
                                countsix--
                            }
                        }, 100);
                    }
                    if (document.documentElement.scrollTop <= User2ImagePosition - 100) {
                        $(".animatedTextUp2").addClass("css-typingremove");
                    }
                    if (document.documentElement.scrollTop <= User2ImagePosition - 350) {
                        $(".UserSecond").removeClass("imageUser2");
                        $(".arrowImage2").removeClass("imageArrow2");
                        $(".animatedimage2").removeClass("text-pop-up-top");
                        $(".textshow1").css("display", "none");
                        $(".animatedimage2").css("display", "none");
                        $(".display1").css("display", "none");
                        $(".textanimation2").removeClass("css-typing1");
                        $(".UserSecond").removeClass("fade-out-bottom ");
                        $(".animatedimage2").removeClass("fade-out-bottom ");
                        $(".arrowImage2").removeClass("fade-out-bottom");
                        $(".animatedTextUp2").removeClass("css-typingThirdAnimatonSecond");
                        //     $(".textanimation2").removeClass("css-typingremove");
                        //    $(".animatedTextUp2").removeClass("css-typingremove");
                    }
                }

                if (st > lastScrollTop) {
                    $(".blackpic2").removeClass("imagerolling2out")
                    var User3ImagePosition = 1800
                    if (document.documentElement.scrollTop >= User3ImagePosition) {
                        $(".blackpic2").removeClass("scale-in-hor-right")
                        $(".UserThird").removeClass("fade-out-bottom ");
                        $(".textanimation3").removeClass("css-typingremove");
                        // $(".arrowImage3").removeClass("fade-out-bottom");
                        $(".blackpic").removeClass("imagerolling")


                    }
                    if (document.documentElement.scrollTop >= User3ImagePosition + 100) {
                        $(".UserThird").addClass("imageUser3");
                        $(".arrowImage3").addClass("imageArrow");

                        $(".animatedimage3").addClass("text-pop-up-top");
                        $(".animatedimage3").css("display", "block");
                        $(".UserThird").addClass("text-pop-up-top");
                        // $(".blackpic3").removeClass("scale-up-hor-right")
                        setTimeout(() => {
                            $(".profitlevel1").addClass("imageprofit1");
                            $(".profitlevel1").addClass("scale-in-hor-left")
                        }, 1000);

                    }
                    if (document.documentElement.scrollTop >= User1ImagePosition + 500) {
                        $(".animatedimage3").addClass("text-pop-up-top");
                        $(".arrowlines").removeClass("scale-out-bl")
                        $(".coursor2").removeClass(" scale-out-tr");
                        $(".animatedimage3").removeClass("fade-out-bottom ");
                        $(".arrowImage3").removeClass("fade-out-bottom");
                        $(".profitlevel1").removeClass("scale-out-hor-left2 ")
                        setTimeout(() => {
                            // $(".display3").css("display", "block");
                            // $(".textanimation3").addClass("css-typing1");
                            // $(".textanimation3").css("css-typing");
                        }, 1000);

                    }
                    if (document.documentElement.scrollTop >= User1ImagePosition + 550) {

                        let new_interval = setInterval(() => {
                            let element = document.getElementById("nocount3");
                            if (counthundred >= 100) {
                                clearInterval(new_interval)
                            } else {
                                element.innerText = counthundred
                                counthundred++
                            }
                        }, 100);
                        $(".graphImage2").addClass("graphImages2")
                        $(".graphImage2").css("display", "block");
                        $(".display3").css("display", "block");
                        $(".textanimation3").addClass("css-typing1");
                        $(".blackpic2").addClass("scale-out-hor-right")
                        $(".blackpic2").addClass("imagerolling2")
                        $(".profitlevel1").addClass("imageprofit2");
                        $(".yellowColor1").addClass("glow");

                        $(".coursor2").addClass("cursorimage");
                        $(".coursor2").addClass("  text-pop-up-bl");
                        $(".arrowlines").addClass("arrowline");
                        $(".arrowlines").addClass("scale-in-hor-left ")
                        $(".profitlevel1").addClass("scale-in-hor-left")
                        setTimeout(() => {
                            $(".profitlevel1").addClass("imageprofit3");
                        }, 5000);
                    }
                    if (document.documentElement.scrollTop >= User1ImagePosition + 600) {
                        // $(".profitlevel1").addClass("scale-in-hor-left")
                        // $(".graphImages3").addClass("graphImages3");
                        // $(".graphImages3").css("display", "block");
                        // $(".blackpic3").addClass("scale-out-hor-right")
                        // $(".blackpic3").addClass("imagerolling3")
                    }

                } else {
                    var User3ImagePosition = 1800
                    if (document.documentElement.scrollTop <= User3ImagePosition + 700) {
                        // $(".graphImages3").addClass("graphImages3");
                        // $(".blackpic3").addClass("scale-up-hor-right")
                        // $(".blackpic3").addClass("imagerolling3")
                        // setTimeout(() => {
                        //     $(".profitlevel1").removeClass("imageprofit3");
                        // }, 10000);
                        if (document.documentElement.scrollTop <= User3ImagePosition + 600) {
                            // $(".profitlevel1").removeClass("imageprofit3");
                            // $(".graphImages3").css("display", "none");
                        }
                    }
                    if (document.documentElement.scrollTop <= User2ImagePosition + 500) {
                        // $(".blackpic3").removeClass("scale-up-hor-right")
                        $(".blackpic2").addClass("scale-in-hor-right")
                        $(".blackpic2").addClass("imagerolling2out")
                        $(".profitlevel1").removeClass("imageprofit3");
                        $(".arrowlines").addClass("scale-out-bl")
                        // $(".textanimation3").removeClass("css-typing1");
                    }
                    if (document.documentElement.scrollTop <= User2ImagePosition + 400) {
                        $(".profitlevel1").removeClass("imageprofit2");
                        // $(".coursor2").addClass("cursorimage");
                        $(".coursor2").addClass(" scale-out-tr");
                        $(".yellowColor1").removeClass("glow");
                        $(".graphImage2").css("display", "none");

                    }
                    if (document.documentElement.scrollTop <= User2ImagePosition + 300) {
                        $(".profitlevel1").addClass("scale-out-hor-left2 ")
                        setTimeout(() => {
                            $(".textanimation3").addClass("css-typingremove");
                            let new_interval = setInterval(() => {
                                let element = document.getElementById("nocount3");
                                if (counthundred <= -1) {
                                    clearInterval(new_interval)
                                } else {
                                    element.innerText = counthundred
                                    counthundred--
                                }
                            }, 100);
                        }, 500);
                        setTimeout(() => {
                            $(".animatedimage3").addClass("fade-out-bottom ");
                            $(".UserThird").addClass("fade-out-bottom ");
                            $(".arrowImage3").addClass("fade-out-bottom");
                            $(".arrowImage3").addClass("fade-out-bottom");

                        }, 1000);
                        // $(".profitlevel1").("imageprofit1");
                    }
                    if (document.documentElement.scrollTop <= User2ImagePosition - 100) {
                        $(".UserThird").removeClass("imageUser3");
                        $(".arrowImage3").removeClass("imageArrow");
                        $(".animatedimage3").removeClass("text-pop-up-top");
                        $(".animatedimage3").css("display", "none");
                        $(".UserThird").removeClass("text-pop-up-top");
                        $(".profitlevel1").removeClass("imageprofit1");
                        $(".profitlevel1").removeClass("scale-in-hor-left")
                        $(".animatedimage3").removeClass("text-pop-up-top");
                        $(".arrowlines").removeClass("scale-out-bl")
                        $(".coursor2").removeClass(" scale-out-tr");
                        $(".animatedimage3").removeClass("fade-out-bottom ");
                        $(".arrowImage3").removeClass("fade-out-bottom");
                        $(".profitlevel1").removeClass("scale-out-hor-left2 ")
                        $(".display3").css("display", "none");
                        $(".textanimation3").removeClass("css-typing1");
                        $(".graphImage2").removeClass("graphImages2")
                        $(".graphImage2").css("display", "none");

                        $(".blackpic2").removeClass("scale-out-hor-right")
                        $(".blackpic2").removeClass("imagerolling2")
                        $(".profitlevel1").removeClass("imageprofit2");
                        $(".yellowColor1").removeClass("colorYellow");
                        $(".coursor2").removeClass("cursorimage");
                        $(".coursor2").removeClass("  text-pop-up-bl");
                        $(".arrowlines").removeClass("arrowline");
                        $(".arrowlines").removeClass("scale-in-hor-left ")
                        $(".profitlevel1").removeClass("scale-in-hor-left")
                        $(".profitlevel1").removeClass("scale-in-hor-left")
                        $(".blackpic2").removeClass("scale-in-hor-right")
                        $(".blackpic2").removeClass("imagerolling2out")
                        $(".profitlevel1").removeClass("imageprofit3");
                        $(".arrowlines").removeClass("scale-out-bl")
                        $(".profitlevel1").removeClass("imageprofit2");
                        // $(".coursor2").addClass("cursorimage");
                        $(".coursor2").removeClass(" scale-out-tr");
                        $(".yellowColor1").removeClass("colorYellow");
                        $(".graphImage2").css("display", "none");
                        $(".profitlevel1").removeClass("scale-out-hor-left2 ")
                        $(".textanimation3").removeClass("css-typingremove");
                        $(".animatedimage3").removeClass("fade-out-bottom ");
                        $(".UserThird").removeClass("fade-out-bottom ");
                    }
                    // setTimeout(() => {
                    //     $(".profitlevel1").removeClass("imageprofit2");
                    // }, 10000);
                }



                if (st > lastScrollTop) {
                    let hideThirdAnimation = 2450

                    if (document.documentElement.scrollTop >= hideThirdAnimation) {
                        $(".ThirdAnimationOut").addClass("fade-out");
                        // $(".ThirdAnimationOut").css("display", "none");
                    }
                } else {
                    let hideThirdAnimation = 2500

                    if (document.documentElement.scrollTop <= hideThirdAnimation) {
                        $(".ThirdAnimationOut").removeClass("fade-out");
                        $(".HideAnimationForth").css("display", "none");
                    }
                }


                //********************* */ Badges Animation *****************************************



                if (st > lastScrollTop) {
                    var ForthAnimationFirst = 2550
                    if (document.documentElement.scrollTop >= ForthAnimationFirst) {

                        $(".HideAnimationForth").css("display", "block");

                        $(".Badgestext").removeClass("css-typingremove");
                        $(".Badgestext").addClass(" css-typing1");
                        $(".Badgestext").css("display", "block");



                    }


                } else {
                    let ForthAnimationFirst = 2550
                    if (document.documentElement.scrollTop <= ForthAnimationFirst - 30) {



                    }
                }




                if (st > lastScrollTop) {
                    var graphLevel1Start = 2600
                    if (document.documentElement.scrollTop >= graphLevel1Start) {
                        $(".graphHideImage").removeClass("scale-in-hor-right");
                        $(".displaylevel1").css("display", "block");
                        $(".graph1").addClass("graphlevel1");
                        $(".graph1").css("display", "block");
                        $(".graphHideImage").addClass("Hidegraphlevel1");
                        $(".graphHideImage").addClass("scale-out-hor-right-ForthGraph");

                        setTimeout(() => {
                            $(".entry1").addClass("text-focus-in-4animation");
                            $(".entry1").addClass("entrylevel1");
                            $(".profit1").addClass("text-focus-in-4animation");
                            $(".profit1").addClass("TakeProfitLevel1");

                        }, 2000);

                    }


                    if (document.documentElement.scrollTop >= graphLevel1Start + 60) {
                        $(".graphHideImage").removeClass("Hidegraphlevel1");



                        // $(".graph1").addClass("scale-out-hor-right-ForthGraph");
                        // $(".graphHideImage").addClass("Hidegraphlevel1");


                        $(".graphSecondPart").addClass("graphlevel1SecondPart");

                        $(".graphHideImageSecondPart").addClass("scale-out-hor-right-ForthGraph");
                        $(".graphHideImageSecondPart").addClass("Hidegraphlevel1SecondPart");
                        setTimeout(() => {
                            $(".arrowUp1").removeClass("scale-out-bl");
                            $(".profit1").addClass("TakeProfitLevel1Yellow");
                            $(".arrowUp1").addClass("Arrow1UpSide");
                            $(".arrowUp1").addClass("scale-in-hor-left");
                        }, 2000);

                    }

                } else {
                    let graphLevel1Start = 2550
                    if (document.documentElement.scrollTop <= graphLevel1Start) {
                        $(".profit1").removeClass("TakeProfitLevel1Yellow");
                        $(".arrowUp1").addClass("scale-out-bl");
                        setTimeout(() => {
                            $(".graphHideImageSecondPart").addClass("Hidegraphlevel1SecondPart");
                            $(".graphHideImageSecondPart").addClass("scale-in-hor-right");
                            $(".graphHideImageSecondPart").removeClass("scale-out-hor-right-ForthGraph");
                        }, 500);
                        setTimeout(() => {
                            $(".entry1").removeClass("text-focus-in-4animation")
                            $(".entry1").addClass("fade-out");
                            $(".profit1").removeClass("text-focus-in-4animation")
                            $(".profit1").addClass("fade-out");
                        }, 2000);



                        setTimeout(() => {
                            $(".graphHideImage").addClass("Hidegraphlevel1");
                            $(".graphHideImage").removeClass("scale-out-hor-right-ForthGraph");
                            $(".graphHideImage").addClass("scale-in-hor-right");

                        }, 2000);

                        setTimeout(() => {

                            $(".Badgestext").addClass("css-typingremove");
                        }, 4000);

                    }



                }


                // ***************************************graph Level Second*************************

                if (st > lastScrollTop) {
                    let graphLevel2Start = 2700
                    if (document.documentElement.scrollTop >= graphLevel2Start) {


                        $(".graphHideImageSecondPart").removeClass("Hidegraphlevel1SecondPart");

                        $(".graphHideImage2").removeClass("scale-in-hor-right");

                        $(".displaylevel2").css("display", "block");
                        $(".graph2").addClass("graphlevel2");
                        $(".graphHideImage2").addClass("Hidegraphlevel2");
                        $(".graph2").css("display", "block");
                        $(".graphHideImage2").addClass("scale-out-hor-right-ForthGraph");




                        setTimeout(() => {
                            $(".entry2").addClass("text-focus-in-4animation");
                            $(".entry2").addClass("entrylevel2");
                            $(".profit2").addClass("text-focus-in-4animation");
                            $(".profit2").addClass("TakeProfitLevel2");

                        }, 2000);
                    }

                    if (document.documentElement.scrollTop >= graphLevel2Start + 60) {

                        $(".graphHideImage2").removeClass("Hidegraphlevel2");

                        // $(".graphHideImage").removeClass("Hidegraphlevel1");

                        $(".graph2SecondPart").addClass("graphlevel2SecondPart");
                        $(".graphHideImage2SecondPart").addClass("Hidegraphlevel2SecondPart");
                        $(".graphHideImage2SecondPart").addClass("scale-out-hor-right-ForthGraph");




                        setTimeout(() => {
                            $(".arrowUp2").removeClass("scale-out-bl");
                            $(".profit2").addClass("TakeProfitLevel2Yellow");

                            $(".arrowUp2").addClass("Arrow2DownSide");
                            $(".arrowUp2").addClass("scale-in-hor-left");
                        }, 2000);

                    }
                } else {
                    let graphLevel2Start = 2650
                    if (document.documentElement.scrollTop <= graphLevel2Start) {
                        $(".arrowUp2").addClass("scale-out-bl");
                        $(".profit2").removeClass("TakeProfitLevel2Yellow");
                        setTimeout(() => {
                            $(".graphHideImage2SecondPart").addClass("Hidegraphlevel2SecondPart");

                            $(".graphHideImage2SecondPart").addClass("scale-in-hor-right");
                            $(".graphHideImage2SecondPart").removeClass("scale-out-hor-right-ForthGraph");



                        }, 500);

                        setTimeout(() => {
                            $(".entry2").removeClass("text-focus-in-4animation")
                            $(".entry2").addClass("fade-out");
                            $(".profit2").removeClass("text-focus-in-4animation")
                            $(".profit2").addClass("fade-out");

                        }, 2000);

                    }

                    if (document.documentElement.scrollTop <= graphLevel2Start - 60) {
                        $(".graphHideImage2").addClass("Hidegraphlevel2");
                        $(".graphHideImage2").removeClass("scale-out-hor-right-ForthGraph");
                        $(".graphHideImage2").addClass("scale-in-hor-right");





                    }
                }

                // ***************************************graph Level Third*************************


                if (st > lastScrollTop) {
                    let graphLevel3Start = 2800
                    if (document.documentElement.scrollTop >= graphLevel3Start) {

                        $(".graphHideImage2SecondPart").removeClass("Hidegraphlevel2SecondPart");

                        $(".graphHideImage3").removeClass("scale-in-hor-right");

                        // $(".graphHideImage2").removeClass("Hidegraphlevel2");

                        $(".displaylevel3").css("display", "block");
                        $(".graph3").addClass("graphlevel3");
                        $(".graphHideImage3").addClass("Hidegraphlevel3");
                        $(".graph3").css("display", "block");
                        $(".graphHideImage3").addClass("scale-out-hor-right-ForthGraph");


                        setTimeout(() => {
                            $(".entry3").addClass("text-focus-in-4animation");
                            $(".entry3").addClass("entrylevel3");
                            $(".profit3").addClass("text-focus-in-4animation");
                            $(".profit3").addClass("TakeProfitLevel3");
                        }, 2000);

                    }

                    if (document.documentElement.scrollTop >= graphLevel3Start + 60) {
                        $(".graphHideImage3").removeClass("Hidegraphlevel3");

                        $(".graph3Seondpart").addClass("graphlevel3SecondPart");
                        $(".graphHideImage3SecondPart").addClass("Hidegraphlevel3SeondPart");
                        $(".graphHideImage3SecondPart").addClass("scale-out-hor-right-ForthGraph");



                        setTimeout(() => {
                            $(".arrowUp3").removeClass("scale-out-bl");

                            $(".profit3").addClass("TakeProfitLevel3Yellow");
                            $(".arrowUp3").addClass("Arrow3UpSide");
                            $(".arrowUp3").addClass("scale-in-hor-left");
                        }, 2000);

                    }
                } else {

                    let graphLevel3Start = 2750
                    if (document.documentElement.scrollTop <= graphLevel3Start) {
                        $(".arrowUp3").addClass("scale-out-bl");
                        $(".profit3").removeClass("TakeProfitLevel3Yellow");
                        setTimeout(() => {
                            // ****************RemoveOverRide Graphlevel************
                            //   $(".graphHideImage4").removeClass("Hidegraphlevel4");
                            // *************
                            $(".graphHideImage3SecondPart").addClass("Hidegraphlevel3SeondPart");
                            $(".graphHideImage3SecondPart").addClass("scale-in-hor-right");
                            $(".graphHideImage3SecondPart").removeClass("scale-out-hor-right-ForthGraph");


                        }, 500);

                        setTimeout(() => {

                            $(".entry3").removeClass("text-focus-in-4animation")
                            $(".entry3").addClass("fade-out");
                            $(".profit3").removeClass("text-focus-in-4animation")
                            $(".profit3").addClass("fade-out");
                        }, 2000);
                    }
                    if (document.documentElement.scrollTop <= graphLevel3Start - 60) {

                        $(".graphHideImage3").addClass("Hidegraphlevel3");
                        $(".graphHideImage3").removeClass("scale-out-hor-right-ForthGraph");
                        $(".graphHideImage3").addClass("scale-in-hor-right");



                    }
                }

                // ***************************************graph Level Forth*************************

                if (st > lastScrollTop) {
                    let graphLevel4Start = 2900
                    if (document.documentElement.scrollTop >= graphLevel4Start) {

                        $(".graphHideImage3SecondPart").removeClass("Hidegraphlevel3SeondPart");

                        $(".graphHideImage4").removeClass("scale-in-hor-right");

                        // $(".graphHideImage3").removeClass("Hidegraphlevel3");

                        $(".displaylevel4").css("display", "block");
                        $(".graph4").addClass("graphlevel4");
                        $(".graphHideImage4").addClass("Hidegraphlevel4");
                        $(".graph4").css("display", "block");
                        $(".graphHideImage4").addClass("scale-out-hor-right-ForthGraph");

                        setTimeout(() => {
                            $(".entry4").addClass("text-focus-in-4animation");
                            $(".entry4").addClass("entrylevel4");
                            $(".profit4").addClass("text-focus-in-4animation");
                            $(".profit4").addClass("TakeProfitLevel4");

                        }, 2000);



                    }

                    if (document.documentElement.scrollTop >= graphLevel4Start + 60) {
                        $(".graphHideImage4").removeClass("Hidegraphlevel4");

                        $(".graph4SecondPart").addClass("graphlevel4SecondPart");

                        $(".graphHideimage4SecondPart").addClass("Hidegraphlevel4SecondPart");
                        $(".graphHideimage4SecondPart").addClass("scale-out-hor-right-ForthGraph");



                        setTimeout(() => {
                            $(".profit4").addClass("TakeProfitLevel4Yellow");

                            $(".arrowUp4").removeClass("scale-out-bl");
                            $(".arrowUp4").addClass("Arrow4DownSide");
                            $(".arrowUp4").addClass("scale-in-hor-left");
                        }, 2000);

                    }
                } else {
                    let graphLevel4Start = 2850
                    if (document.documentElement.scrollTop <= graphLevel4Start) {

                        $(".arrowUp4").addClass("scale-out-bl");
                        $(".profit4").removeClass("TakeProfitLevel4Yellow");
                      
                        setTimeout(() => {
                            $(".graphHideimage4SecondPart").addClass("Hidegraphlevel4SecondPart");

                            $(".graphHideimage4SecondPart").addClass("scale-in-hor-right");
                            $(".graphHideimage4SecondPart").removeClass("scale-out-hor-right-ForthGraph");
                        }, 500);
                        setTimeout(() => {

                            $(".entry4").removeClass("text-focus-in-4animation")
                            $(".entry4").addClass("fade-out");
                            $(".profit4").removeClass("text-focus-in-4animation")
                            $(".profit4").addClass("fade-out");

                        }, 2000);
                    }

                    if (document.documentElement.scrollTop <= graphLevel4Start - 60) {

                        $(".graphHideImage4").addClass("Hidegraphlevel4");
                        $(".graphHideImage4").removeClass("scale-out-hor-right-ForthGraph");
                        $(".graphHideImage4").addClass("scale-in-hor-right");

                    }





                }

                // ***************************************graph Level Fifth*************************

                if (st > lastScrollTop) {
                    let graphLevel5Start = 3000
                    if (document.documentElement.scrollTop >= graphLevel5Start) {

                        $(".graphHideimage4SecondPart").removeClass("Hidegraphlevel4SecondPart");
                        $(".graphHideImage5").removeClass("scale-in-hor-right");

                        $(".graph5").css("display", "block");
                        $(".displaylevel5").css("display", "block");
                        $(".graph5").addClass("graphlevel5");
                        $(".graphHideImage5").addClass("Hidegraphlevel5");
                        $(".graphHideImage5").addClass("scale-out-hor-right-ForthGraph");

                        setTimeout(() => {
                            $(".entry5").removeClass("fade-out");
                            $(".profit5").removeClass("fade-out");

                            $(".entry5").addClass("text-focus-in-4animation");
                            $(".entry5").addClass("entrylevel5");
                            $(".profit5").addClass("text-focus-in-4animation");
                            $(".profit5").addClass("TakeProfitLevel5");

                        }, 2000);
                    }
                    if (document.documentElement.scrollTop >= graphLevel5Start + 60) {
                        $(".graphHideImage5").removeClass("Hidegraphlevel5");

                        $(".graph5SecondPart").addClass("graphlevel5SecondPart");
                        $(".graphHideImage5SecondPart").addClass("Hidegraphlevel5SecondPart");
                        $(".graphHideImage5SecondPart").addClass("scale-out-hor-right-ForthGraph");

                        setTimeout(() => {

                            $(".profit5").addClass("TakeProfitLevel5Yellow");
                            $(".arrowUp5").removeClass("scale-out-bl");
                            $(".arrowUp5").addClass("Arrow5UpSide");
                            $(".arrowUp5").addClass("scale-in-hor-left");
                            $(".CongratulatImage").addClass("CongratulatImageShow");
                            $(".CongratulatImage").addClass("text-focus-in-4animation");
                        }, 500);

                    }
                } else {
                    let graphLevel5Start = 2950
                    if (document.documentElement.scrollTop <= graphLevel5Start) {
                        $(".arrowUp5").addClass("scale-out-bl");
                        $(".CongratulatImage").removeClass("text-focus-in-4animation")
                        $(".CongratulatImage").addClass("fade-out");
                        $(".profit5").removeClass("TakeProfitLevel5Yellow");
                        setTimeout(() => {
                            // $(".graph5SecondPart").addClass("graphlevel5SecondPart");
                            $(".graphHideImage5SecondPart").addClass("scale-in-hor-right");
                            $(".graphHideImage5SecondPart").removeClass("scale-out-hor-right-ForthGraph");
                        }, 500);
                        setTimeout(() => {
                            $(".entry5").removeClass("text-focus-in-4animation")
                            $(".entry5").addClass("fade-out");
                            $(".profit5").removeClass("text-focus-in-4animation")
                            $(".profit5").addClass("fade-out");

                        }, 2000);
                    }
                    if (document.documentElement.scrollTop <= graphLevel5Start - 60) {
                        $(".graphHideImage5").addClass("Hidegraphlevel5");
                        $(".graphHideImage5").removeClass("scale-out-hor-right-ForthGraph");
                        $(".graphHideImage5").addClass("scale-in-hor-right");
                    }
                }

                // **********************remove the forth Animation********************

                if (st > lastScrollTop) {
                    let hideForthAnimation = 3200

                    if (document.documentElement.scrollTop >= hideForthAnimation) {
                        $(".HideAnimationForth").addClass("fade-out");
                        // $(".ThirdAnimationOut").css("display", "none");
                    }
                } else {
                    let hideForthAnimation = 3150

                    if (document.documentElement.scrollTop <= hideForthAnimation) {
                        $(".HideAnimationForth").removeClass("fade-out");
                        // $(".HideAnimationForth").css("display", "none");
                    }
                }


                // ******************************Fifth animation Start*******************************

                if (st > lastScrollTop) {
                    let FifthAnimation = 3250
                    if (document.documentElement.scrollTop >= FifthAnimation) {

                        $(".HideAnimationFifth").css("display", "block");

                        $(".CreatAccount").removeClass("css-typingremove ");
                        $(".CreatAccount").addClass(" css-typing1");
                        $(".CreatAccount").css("display", "block");
                        $(".buttonSize").css("display", "block");
                        $(".buttonSize").addClass("text-focus-in-4animation");
                        $(".buttonSize").removeClass("fade-out");

                        // **********************animation Fifth start***********************
                        $(".DisplayFifthAnimation1").css("display", "block");
                        $(".DisplayFifthAnimation2").css("display", "block");
                        $(".DisplayFifthAnimation3").css("display", "block");
                        $(".DisplayFifthAnimation4").css("display", "block");

                        // $(".ShowAnimation1").css("display", "block");

                        $(".HideAnimation1").removeClass("scale-in-hor-right");
                        $(".HideAnimation2").removeClass("scale-in-hor-right");
                        $(".HideAnimation3").removeClass("scale-in-hor-right");
                        $(".HideAnimation4").removeClass("scale-in-hor-right");



                        $(".ShowAnimation1").addClass("FirstAnimationPic1");
                        $(".ShowAnimation2").addClass("FirstAnimationPic2");
                        $(".ShowAnimation3").addClass("FirstAnimationPic3");
                        $(".ShowAnimation4").addClass("FirstAnimationPic4");

                        $(".HideAnimation1").addClass("FirstAnimationPicHide1");
                        $(".HideAnimation2").addClass("FirstAnimationPicHide2");
                        $(".HideAnimation3").addClass("FirstAnimationPicHide3");
                        $(".HideAnimation4").addClass("FirstAnimationPicHide4");


                        $(".HideAnimation1").addClass("scale-out-hor-right");
                        $(".HideAnimation2").addClass("scale-out-hor-right");
                        $(".HideAnimation3").addClass("scale-out-hor-right");
                        $(".HideAnimation4").addClass("scale-out-hor-right");


                    }
                } else {
                    let FifthAnimation = 3300

                    if (document.documentElement.scrollTop <= FifthAnimation) {
                        $(".buttonSize").removeClass("text-focus-in-4animation");
                        $(".buttonSize").addClass("fade-out");
                        $(".CreatAccount").addClass("css-typingremove ");


                        // **********************animation Fifth remove***********************



                        $(".HideAnimation1").removeClass("scale-out-hor-right");
                        $(".HideAnimation2").removeClass("scale-out-hor-right");
                        $(".HideAnimation3").removeClass("scale-out-hor-right");
                        $(".HideAnimation4").removeClass("scale-out-hor-right");

                        $(".HideAnimation1").addClass("scale-in-hor-right");
                        $(".HideAnimation2").addClass("scale-in-hor-right");
                        $(".HideAnimation3").addClass("scale-in-hor-right");
                        $(".HideAnimation4").addClass("scale-in-hor-right");


                        $(".HideAnimation1").addClass("FirstAnimationPicHide1");
                        $(".HideAnimation2").addClass("FirstAnimationPicHide2");
                        $(".HideAnimation3").addClass("FirstAnimationPicHide3");
                        $(".HideAnimation4").addClass("FirstAnimationPicHide4");




                    }
                    if (document.documentElement.scrollTop <= FifthAnimation - 100) {

                        $(".HideAnimationFifth").css("display", "none");


                        
                           $(".DisplayFifthAnimation1").css("display", "none");
                           $(".DisplayFifthAnimation2").css("display", "none");
                           $(".DisplayFifthAnimation3").css("display", "none");
                           $(".DisplayFifthAnimation4").css("display", "none");
                    }
                }











            }

            lastScrollTop = st;
        });


    });
}
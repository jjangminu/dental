$(function(){
    $("#con02 li").on("mouseenter", function(){
        $("#con02 li").removeClass("under")
        $(this).addClass("under")
    })

    $("#con03 li").on("mouseenter",function(){
        $(this).addClass("zoom")
    })
    $("#con03 li").on("mouseleave",function(){
        $(this).removeClass("zoom")
    })

    $(".heart i").on("mouseenter",function(){
        $(this).css({"color":"#c03d3d"})
    })
    $(".heart i").on("mouseleave",function(){
        $(this).css({"color":"#5B5B5B"})
    })

    $(".plus").on("mouseenter",function(){
        $(this).addClass("down")
    })
    $(".plus").on("mouseleave",function(){
        $(this).removeClass("down")
    })
    
    $("#con02 li").on("mouseenter",function(){
      $(this).stop().animate({"margin":"-15px"})
    })
    $("#con02 li").on("mouseleave",function(){
      $(this).stop().animate({"margin":"0px"})
    })
})


$(function () {
    //header
    //header 배경 흰색
    $("header").on("mouseover", function () {
      $("header #main").css({
        "background-color": "rgba(255, 255, 255, 0.8)",
        transition: "0.5s",
      });
    });
    $("header").on("mouseleave", function () {
      $("header #main").css({
        "background-color": "rgba(255, 255, 255, 0.5)",
        transition: "0.5s",
      });
      $("header #sub ul").css({ display: "none" });
    });
  
    //서브메뉴 보이기
    $("header #main .hos").on("mouseover", function () {
      $("header #sub ul").css({ display: "none" });
    });
    $("header #main .doc").on("mouseover", function () {
      $("header #sub ul").css({ display: "none" });
      $("header #sub .doc").fadeIn(500);
      $("header #sub .doc").css({ display: "flex" });
    });
    $("header #main .con").on("mouseover", function () {
      $("header #sub ul").css({ display: "none" });
      $("header #sub .con").fadeIn(500);
      $("header #sub .con").css({ display: "flex" });
    });
    $("header #main .rev").on("mouseover", function () {
      $("header #sub ul").css({ display: "none" });
      $("header #sub .rev").fadeIn(500);
      $("header #sub .rev").css({ display: "flex" });
    });
    $("header #main .comu").on("mouseover", function () {
      $("header #sub ul").css({ display: "none" });
      $("header #sub .comu").fadeIn(500);
      $("header #sub .comu").css({ display: "flex" });
    });
    $("header #sub ul").on("mouseleave", function () {
      $(this).fadeOut(500);
    });
  
    /*mobile menu*/
    $("header #main .ham").on("click", function () {
      $("header #main .mobile_menu").slideDown(1000);
      $("header #main .mobile_menu").css({ display: "flex" });
      $(this).css({ display: "none" });
      $("header #main .logo").css({ display: "none" });
    });
    $("header #main .xmark").on("click", function () {
      $("header #main .mobile_menu").slideUp(1000);
      $("header #main .ham").css({ display: "flex" });
      $("header #main .logo").css({ display: "flex" });
    });
  });
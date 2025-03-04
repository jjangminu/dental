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

  /* visual */
  var swiper = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });

  $("#visual .vis01").on("mouseover", function () {
    $("#visual .vis01 .first_txt").css({ opacity: "1", "margin-top": "0" });
    $("#visual .vis01 .doctor").css({ opacity: "1", bottom: "0px" });
  });
  $("#visual .vis03").on("mouseover", function () {
    $("#visual .vis03 h2").css({ "margin-top": "0", opacity: "1" });
    $("#visual .vis03 p").css({ "margin-top": "0", opacity: "1" });
  });

  /* con01 */
  $("#con01").on("mouseenter", function (e) {
    $(this).css({ opacity: "1" });
    $("#con01 .tittle").css({ "margin-top": "0px" });
  });
  $("#con01 .but01").on("click", function () {
    $("#con01 .icons li").css({
      filter: "brightness(2)",
      transform: "scale(1)",
      transition: "0.5s",
      "z-index": "1",
    });
    $("#con01 .button li").css({
      "background-color": "rgba(96, 153, 238, 0.5)",
    });
    $("#con01 .icon01").css({
      filter: "brightness(1)",
      transform: "scale(1.3)",
      transition: "0.5s",
      "z-index": "7",
    });
    $(this).css({ "background-color": "#ff8800" });
  });
  $("#con01 .but02").on("click", function () {
    $("#con01 .icons li").css({
      filter: "brightness(2)",
      transform: "scale(1)",
      transition: "0.5s",
      "z-index": "1",
    });
    $("#con01 .button li").css({
      "background-color": "rgba(96, 153, 238, 0.5)",
    });
    $("#con01 .icon02").css({
      filter: "brightness(1)",
      transform: "scale(1.3)",
      transition: "0.5s",
      "z-index": "7",
    });
    $(this).css({ "background-color": "#ff8800" });
  });
  $("#con01 .but03").on("click", function () {
    $("#con01 .icons li").css({
      filter: "brightness(2)",
      transform: "scale(1)",
      transition: "0.5s",
      "z-index": "1",
    });
    $("#con01 .button li").css({
      "background-color": "rgba(96, 153, 238, 0.5)",
    });
    $("#con01 .icon03").css({
      filter: "brightness(1)",
      transform: "scale(1.3)",
      transition: "0.5s",
      "z-index": "7",
    });
    $(this).css({ "background-color": "#ff8800" });
  });
  $("#con01 .but04").on("click", function () {
    $("#con01 .icons li").css({
      filter: "brightness(2)",
      transform: "scale(1)",
      transition: "0.5s",
      "z-index": "1",
    });
    $("#con01 .button li").css({
      "background-color": "rgba(96, 153, 238, 0.5)",
    });
    $("#con01 .icon04").css({
      filter: "brightness(1)",
      transform: "scale(1.3)",
      transition: "0.5s",
      "z-index": "7",
    });
    $(this).css({ "background-color": "#ff8800" });
  });
  $("#con01 .but05").on("click", function () {
    $("#con01 .icons li").css({
      filter: "brightness(2)",
      transform: "scale(1)",
      transition: "0.5s",
      "z-index": "1",
    });
    $("#con01 .button li").css({
      "background-color": "rgba(96, 153, 238, 0.5)",
    });
    $("#con01 .icon05").css({
      filter: "brightness(1)",
      transform: "scale(1.3)",
      transition: "0.5s",
      "z-index": "7",
    });
    $(this).css({ "background-color": "#ff8800" });
  });
  $("#con01 .but06").on("click", function () {
    $("#con01 .icons li").css({
      filter: "brightness(2)",
      transform: "scale(1)",
      transition: "0.5s",
      "z-index": "1",
    });
    $("#con01 .button li").css({
      "background-color": "rgba(96, 153, 238, 0.5)",
    });
    $("#con01 .icon06").css({
      filter: "brightness(1)",
      transform: "scale(1.3)",
      transition: "0.5s",
      "z-index": "7",
    });
    $(this).css({ "background-color": "#ff8800" });
  });
  $("#con01 .icons li").on("mouseenter", function () {
    i = $(this).index();
    $("#con01 .icons li").css({
      filter: "brightness(2)",
      transform: "scale(1)",
      transition: "0.5s",
      "z-index": "1",
    });
    $("#con01 .button li").css({
      "background-color": "rgba(96, 153, 238, 0.5",
    });
    $("#con01 .button li").eq(i).css({ "background-color": "#ff8800" });
    $(this).css({
      filter: "brightness(1)",
      transform: "scale(1.3)",
      transition: "0.5s",
      "z-index": "7",
    });
  });

  /* con02 */
  $("#con02 .im").on("mouseenter", function () {
    $("#con02 ul li").css({
      "background-image": "none",
      color: "white",
    });
    $("#con02 p").hide();
    $("#con02 .enjoy").fadeIn(500);
    $(this).css({
      "background-image": "linear-gradient(to right, #d3d3d3, transparent)",
      color: "#353535",
    });
    $("#con02 .bg2").fadeOut(500);
    $("#con02 .bg3").fadeOut(500);
    $("#con02 .bg1").fadeIn(500);
  });
  $("#con02 .invi").on("mouseenter", function () {
    $("#con02 ul li").css({
      "background-image": "none",
      color: "white",
    });
    $("#con02 p").hide();
    $("#con02 .dental").fadeIn(500);
    $(this).css({
      "background-image": "linear-gradient(to right, #d3d3d3, transparent)",
      color: "#353535",
    });
    $("#con02 .bg1").fadeOut(500);
    $("#con02 .bg3").fadeOut(500);
    $("#con02 .bg2").fadeIn(500);
  });
  $("#con02 .lami").on("mouseenter", function () {
    $("#con02 ul li").css({
      "background-image": "none",
      color: "white",
    });
    $("#con02 p").hide();
    $("#con02 .nature").fadeIn(500);
    $(this).css({
      "background-image": "linear-gradient(to right, #d3d3d3, transparent)",
      color: "#353535",
    });
    $("#con02 .bg1").fadeOut(500);
    $("#con02 .bg2").fadeOut(500);
    $("#con02 .bg3").fadeIn(500);
  });

  /* con03 */
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  $("#con03 .im_but").on("click", function () {
    $("#con03 .menu li").css({
      "background-color": "transparent",
      color: "#ff8800",
    });
    $("#con03 .swiper").hide();
    $("#con03 .im_bar").fadeIn(200);
    $(this).css({ "background-color": "#ff8800", color: "white" });
  });
  $("#con03 .sm_but").on("click", function () {
    $("#con03 .menu li").css({
      "background-color": "transparent",
      color: "#ff8800",
    });
    $("#con03 .swiper").hide();
    $("#con03 .smile_bar").fadeIn(200);
    $(this).css({ "background-color": "#ff8800", color: "white" });
  });
  $("#con03 .la_but").on("click", function () {
    $("#con03 .menu li").css({
      "background-color": "transparent",
      color: "#ff8800",
    });
    $("#con03 .swiper").hide();
    $("#con03 .lami_bar").fadeIn(200);
    $(this).css({ "background-color": "#ff8800", color: "white" });
  });
  $("#con03 .ba_but").on("click", function () {
    $("#con03 .menu li").css({
      "background-color": "transparent",
      color: "#ff8800",
    });
    $("#con03 .swiper").hide();
    $("#con03 .basic_bar").fadeIn(200);
    $(this).css({ "background-color": "#ff8800", color: "white" });
  });
  $("#con03").on("mouseenter", function (e) {
    $(this).css({ opacity: "1" });
    $("#con03 .tit h3").css({ "margin-top": "0px" });
  });
});

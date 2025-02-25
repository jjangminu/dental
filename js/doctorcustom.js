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
  $("body").on("mouseover", function () {
    $("#visual h2").css({ opacity: "1" });
  });

  /* con01 */
  $("body").on("mousewheel", function (e) {
    $("#con01 h2").css({ margin: "0px auto", opacity: "1" });
  });

  /* con02 */
  $("#con02 .doctor_1 .right").on("click", function () {
    $("#con02 .doctor ul").css({ opacity: "0" });
    $("#con02 .doctor img").css({ bottom: "-50px" });
    $("#con02 .doctor .doctor_2").css({ opacity: "1" });
    $("#con02 .detail ul").css({ opacity: "0" });
    $("#con02 .detail .detail_2").css({ opacity: "1" });
    $("#con02 .doctor .doctor_2 img").css({ bottom: "0px" });
  });
  $("#con02 .doctor_1 .left").on("click", function () {
    $("#con02 .doctor ul").css({ opacity: "0" });
    $("#con02 .doctor img").css({ bottom: "-50px" });
    $("#con02 .doctor .doctor_3").css({ opacity: "1" });
    $("#con02 .detail ul").css({ opacity: "0" });
    $("#con02 .detail .detail_3").css({ opacity: "1" });
    $("#con02 .doctor .doctor_3 img").css({ bottom: "0px" });
  });
  $("#con02 .doctor_2 .right").on("click", function () {
    $("#con02 .doctor ul").css({ opacity: "0" });
    $("#con02 .doctor img").css({ bottom: "-50px" });
    $("#con02 .doctor .doctor_3").css({ opacity: "1" });
    $("#con02 .detail ul").css({ opacity: "0" });
    $("#con02 .detail .detail_3").css({ opacity: "1" });
    $("#con02 .doctor .doctor_3 img").css({ bottom: "0px" });
  });
  $("#con02 .doctor_2 .left").on("click", function () {
    $("#con02 .doctor ul").css({ opacity: "0" });
    $("#con02 .doctor img").css({ bottom: "-50px" });
    $("#con02 .doctor .doctor_1").css({ opacity: "1" });
    $("#con02 .detail ul").css({ opacity: "0" });
    $("#con02 .detail .detail_1").css({ opacity: "1" });
    $("#con02 .doctor .doctor_1 img").css({ bottom: "0px" });
  });
  $("#con02 .doctor_3 .right").on("click", function () {
    $("#con02 .doctor ul").css({ opacity: "0" });
    $("#con02 .doctor img").css({ bottom: "-50px" });
    $("#con02 .doctor .doctor_1").css({ opacity: "1" });
    $("#con02 .detail ul").css({ opacity: "0" });
    $("#con02 .detail .detail_1").css({ opacity: "1" });
    $("#con02 .doctor .doctor_1 img").css({ bottom: "0px" });
  });
  $("#con02 .doctor_3 .left").on("click", function () {
    $("#con02 .doctor ul").css({ opacity: "0" });
    $("#con02 .doctor img").css({ bottom: "-50px" });
    $("#con02 .doctor .doctor_2").css({ opacity: "1" });
    $("#con02 .detail ul").css({ opacity: "0" });
    $("#con02 .detail .detail_2").css({ opacity: "1" });
    $("#con02 .doctor .doctor_2 img").css({ bottom: "0px" });
  });

  /* con03 */
  var swiper = new Swiper("#con03 .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    freeMode: true,
    pagination: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });

  /* con04 */
  var swiper = new Swiper("#con04 .mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  $("#con04 .wrap").on("mouseover", function (e) {
    $("#con04 .wrap .detail").css({ top: "60%" });
    $(this).children(".detail").css({ top: "50%" });
  });
});

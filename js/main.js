
//アコーディオン
$(function () {
  $(".accordion-item:first-of-type .accordion-content").css("display", "block");
  $(".accordion-item:first-of-type .js-accordion-title").addClass("open");
  $(".js-accordion-title").on("click", function () {
    $(this).next().slideToggle(300);
  });
});


//スライダー
$(function () {
  $(".slider").slick({
    autoplay: false,
    centerMode: true,
    centerPadding: "10%",
    prevArrow: '<img src="/devlabo/assets/img/slide_arrow-l.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="/devlabo/assets/img/slide_arrow-r.png" class="slide-arrow next-arrow">',
  });
});

//モーダル
MicroModal.init({
  disableScroll: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true
});



// $(window).scroll(function() {
//   let nowscroll = $(window).scrollTop() ;
//   if(nowscroll >= 700){
//     $('.modaal').click();
//   }
// });
$(window).scroll(function () {
  let nowscroll = $(window).scrollTop();
  if (nowscroll >= 700) {
    if (!localStorage.hasOwnProperty('modal')) {
      $('.modaal').click();
      localStorage.setItem('modal', 'opend');
    }
  }
});
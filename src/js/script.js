let slider = $(document).ready(function () {
  $('.your-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true
  });
});
$('.header__burger').click(function(){
  $('.header__burger').toggleClass('active')
  $('.mobile').toggleClass('active')
})

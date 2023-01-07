$(document).ready(function() {

  let currentSlide = 1;

  $('a').on("click", function() {
    let target = $(this).data('target');

    currentSlide = moveSlides(target);
  })
})


function moveSlides(targetSlide) {

  switch (targetSlide) {
    case 1:
      $('.carousel').css('transform', 'translateX(0vw)');
      break;
    case 2:
      $('.carousel').css('transform', 'translateX(-100vw)');
      break;
    case 3:
      $('.carousel').css('transform', 'translateX(-200vw)');
      break;
    default:
      $('.carousel').css('transform', 'translateX(-300vw)');
  }
  return targetSlide;
}

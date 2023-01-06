$(document).ready(function() {

  let currentSlide = 1;

  $('a').on("click", function() {
    let target = $(this).data('target');

    currentSlide = moveSlides(currentSlide, target);
  })

})

function moveSlides(currentSlide, targetSlide) {
  console.log("in moveslides")
  console.log('Target= ', targetSlide);
  console.log('CurrentSlide= ', currentSlide);

  if (currentSlide === targetSlide) return;

  else {
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
}

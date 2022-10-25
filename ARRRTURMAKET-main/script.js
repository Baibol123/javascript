
$(document).ready(function()  {
    $('.button-1').click(function () {
        $('.jquery_popup').toggleClass('.open')
        $('body').toggleClass('.lock')
    })
    $('.exit').click(function () {
        $('.jquery_popup').toggleClass('.open')
        $('body').toggleClass('.lock')
    });
});
$(document).ready(function(){
    $(".js-button").click(function(){
      $(".section-5").toggle();
    });
  });
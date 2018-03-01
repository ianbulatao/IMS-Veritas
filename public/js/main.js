var x = 4;
var b =3;
if(b != x) {
  $('.haha').addClass('rem');
}
$('.tabs').on('click','li a',function() {
  $('.links').removeClass('active');
  $(this).toggleClass('active');
});
//PANEL
$('.ovrview-panel').on('click','div',function() {
  if (this.id == 1) {
    $('#form').addClass('more')
  }
  if (this.id == 2) {
    $('#form2').addClass('more')
  }
  if (this.id == 3) {
    $('#form3').addClass('more')
  }
});
//end of PANEL
$('.oor').on('click', function(){
  $('#form').removeClass('more');
  $('#form2').removeClass('more');
  $('#form3').removeClass('more');
}).children().click(function(e) {
  return false;
});
function hide() {
  $('#form').removeClass('more');
}

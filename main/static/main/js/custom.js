$('#check_privacy').on('change', function(){
  if($(this).is(':checked')) $('.popup-btns').attr('disabled', false);
  else $('.popup-btns').attr('disabled', true);
});

$('#check_privacy_1').on('change', function(){
  if($(this).is(':checked')) $('.popup-btn').attr('disabled', false);
  else $('.popup-btn').attr('disabled', true);
});

$('#check_privacy_2').on('change', function(){
  if($(this).is(':checked')) $('.popup-btnss').attr('disabled', false);
  else $('.popup-btnss').attr('disabled', true);
});

$('#check_privacy_3').on('change', function(){
  if($(this).is(':checked')) $('.popup-btn-3').attr('disabled', false);
  else $('.popup-btn-3').attr('disabled', true);
});
/*---------------------
    Popup
    -----------------------*/
$(document).ready(function () {
    PopUpHide();
});
function PopUpShow() {
    $("#order-popup").show();
}
function PopUpOrderShow(caller) {
    $("#order-popups").show();
    let device = $(caller).val();
    $('#device-name-input').val(device);
}
function PopUpOrderHide() {
    $("#order-popups").hide();
}
function PopUpHide() {
    $("#order-popup").hide();
}


    /*DateTimePicker*/
     $('#picker').datetimepicker({
    timepicker: true,
    datepicker: true,
    format: 'd-m-Y H:i',
    hours12: false,
    step: 30,
    yearStart: 2021,
     });

if (localStorage.getItem('cookieSeen') !== 'shown') {
    $('.cookie-banner').delay(2000).fadeIn();
    localStorage.setItem('cookieSeen','shown')
}
$('.close-cookie').click(function() {
    $('.cookie-banner').fadeOut();
})
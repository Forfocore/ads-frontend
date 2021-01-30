$(document).ready(function() {
    $('#modal').hide();
$('#add').click(function() {
    $('#modal').show();


});

$('#close').click(function() {
    $('#modal').hide();


});

$('#new').click(function() {

var ad={
    text: $('textarea[name="text"]').val(),
    contactName: $('input[name="name"]').val(),
    contactPhone: $('input[name="phone"]').val()
}


var adHTML=
"<div class='Content__box'>" +
"<div class='Box__info'>"+ad.text+"</div>" +
"<div class='Box__name'>"+ad.contactName+"</div>" +
"<div class='Box__phone'>"+ad.contactPhone+"</div>" +
"</div>";

$('#content').append(adHTML);
$('#modal').hide();

});

var arrayAd = Array();


});
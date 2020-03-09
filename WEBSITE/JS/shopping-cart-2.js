$(document).ready(function() { 
    $(".ui-spinner-up").click(function() {
        var curentvalue = $(this).parent().children()[0].getAttribute('aria-valuenow');
        var priceperunit = $(this).parent().parent().parent().children()[0].getAttribute('price-per-item');
        var total = curentvalue*priceperunit;
        $(this).parent().parent().parent().children()[0].innerHTML = "$"+total;
        var totalAll = parseInt($('#prices').html().slice(1)) + parseInt(priceperunit);
        $('#prices').html("$"+totalAll);
    });
    $(".ui-spinner-down").click(function() {
        var curentvalue = $(this).parent().children()[0].getAttribute('aria-valuenow');
        var priceperunit = $(this).parent().parent().parent().children()[0].getAttribute('price-per-item');
        var total = curentvalue*priceperunit;
        $(this).parent().parent().parent().children()[0].innerHTML = "$"+total;
        var totalAll = parseInt($('#prices').html().slice(1)) - parseInt(priceperunit);
        $('#prices').html("$"+totalAll);
    }); 
});

function GoToCheckout(){
    
}
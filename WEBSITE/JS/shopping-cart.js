function LoadData() {
    var items = Cookies.getJSON('items');
    var str = "";
    var totalAll = 0;
    for (let j = 0; j < items.length; j++) {
        const item = items[j];
        var total = item.price * item.count;
        totalAll += total;
        str += "<div class='row cart-item'><div class='col-lg-9 col-md-9 row'>"
        str += "<img src='../IMAGE/" + item.id + ".jpg' alt='check out' width='100px' height='100px'>"
        str += "<span><p class='text-uppercase item-name' id='item-name'"
        str += "style='line-height: 50px; font-size: 12px;margin: 0px; letter-spacing: 5px;'>" + item.name
        str += "</p><p>" + item.size +"mm | $"+item.price+"</p>"
        str += "</span></div><div class='col-lg-3 col-md-3'>"
        str += "<p style='text-align: right;line-height: 50px; font-size: 12px; margin: 0px; letter-spacing: 5px;' price-per-item=" + item.price + " "
        str += "class='text-uppercase'>$" + total + "</p><div style='float:right;width:150px;'>"
        str += "<input readonly aria-valuemin='0' id='item" + item.id + "' style='height: 35px;' type='text' class='form-control jui-spinner-default ui-spinner-input' value='"+item.count+"' autocomplete='off' role='spinbutton'>"
        str += "</div></div></div><hr>"
    }
    $('#prices').html("$"+totalAll);
    $("#cart").html(str);
}
$(document).ready(function () {
    LoadData();
}); 

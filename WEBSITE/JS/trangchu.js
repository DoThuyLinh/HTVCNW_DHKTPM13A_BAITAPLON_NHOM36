function loadItem(parentid, items) {
    var str = "";
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        str += "<div class='col-xl-3 col-md-6 col-sm-12 topsellerhover'>";
        str += "<div class='card' style='height: 405.703px;'>";
        str += "<div class='card-content'>";
        str += "<div class='card-body'>";
        str += "<img class='card-img img-fluid mb-1' src='../IMAGE/" + element.id + ".jpg' alt='Card image cap'></img>";
        str += "<a href=details.html?id="+element.id+"><h4 class='card-title'>" + element.name + "</h4></a>";
        str += "<p class='card-text'>" + element.maxsize + "MM|<font>" + element.size + "MM</font></p>";
        str += "<p>$"+element.price+"</p>";
        str += "</div></div></div></div>";
        if((i+1)%4 === 0) {
            str+="<div id='ngancach'></div>"
        }
    }
    $("#"+parentid).html(str);
}
$(document).ready(function(){
    var items = getClassicWatchs();
    var dapper = getDapperWatchs();
    console.log(items);
    loadItem("classic", items);
    loadItem("dapper",dapper);
    $('.btnAdd').on('click',function(){
		swal("Success!", "This item has been added to your shopping cart!", "success");
	});
})
function LoadTrangChu(idname, items){
    var st = "";
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        st+= "<div class='col-xl-3 col-md-6 col-sm-9 topsellerhover'>";
        st+= "<div class='card' style='height: 405.703px;'>";
        st+= "<div class='card-content'>";
        st+= "<div class='card-body cardbody'>";
        st += "<img class='card-img img-fluid mb-1' src='../IMAGE/" + element.id + ".jpg' alt='Card image cap'></img>";
        st+= "<a href=yourcart.html?id="+element.id+"><h4 class='card-title'>" + element.name + "</h4></a>";
        st+= "<p class='card-text'>" + element.maxsize + "MM|<font>" + element.size + "MM</font></p>";
        st+= "<p>"+element.price+"</p>";
        st+= "<button class='btn btn-outline-teal' onclick=AddToCart("+element.id+")> ADD TO CART &rarr;</button>";
        st+= "</div></div></div></div>";
    }
    $("#"+idname).html(st);
}
function AddToCart(id){
    var items = Cookies.getJSON('items');
    var flag = false;
    if (items !== undefined) {
        for (let i = 0; i < items.length; i++) {
            const element = items[i];
            if (element.id == id) {
                items[i].count += 1;
                flag = true;
            }
        }
        if (!flag) {
            var item = getItemById(id);
            item.count = 1;
            items.push(item);
        }
    } else {
        items = [];
        var item = getItemById(id);
        item.count = 1;
        items.push(item);
    }
    Cookies.set('items', JSON.stringify(items));
    console.log(Cookies.getJSON('items'));
}

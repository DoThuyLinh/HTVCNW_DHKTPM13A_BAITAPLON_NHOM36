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
function RandomID()
{
    var a=[]; var b=0;
    for (let i = 0; i < watchs.length; i++) {
        b= Math.floor(Math.random() * 20) + 1;
        a.push(b);
        if(a.length ==8)
            return a;
    }
}
$(document).ready(function(){
    var items=[];
    var aa = RandomID();
    for (let i = 0; i < aa.length; i++) {
        var c = getItemById(aa[i]);
        items.push(c);
    }
    loadItem("new",items);
})
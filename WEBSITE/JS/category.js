function getQuery() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (let i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
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
        // if(i==7){
        //     str+="<img src='../IMAGE/classic-detail-desktop.jpg' alt='Ngăn' width='100%' height='400px' id='hinhngancach'>";
        // }
    }
    $("#"+parentid).html(str);
}
function loadCategory(id) {
    var category = getCategoryById(id);
    var carousel = "";
    if (category) {
        carousel += "<div class='carousel-item active'><img src='../IMAGE/"+category.images[0]+"' class='RightLogo' id='body'></div>";
        for (let i = 1; i < category.images.length; i++) {
            const element = category.images[i];
            carousel +=  "<div class='carousel-item'><img src='../IMAGE/"+element+"' class='RightLogo'></div>"
        }
        document.title = category.name + " | Daniel Wellington"
        $("#category-name").html(category.name.toUpperCase());
        $("#layoutpanner").html(carousel);
        $("#allwatchesgt").html(category.description);
        if(id == 3) {
            $("#allwatchesgt").addClass('hidden');
        }
    }
    loadItem('watches-area',getItemsByCategoryId(id));
}
$(document).ready(function(){
    var id = getQuery().id;
    loadCategory(id); 
});
function getQuery() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (let i = 0; i < hashes.length; i++) {
        const element = hashes[i];
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
function LoadItemCheckOut(){
    var query = getQuery();
    var item = getItemById(query.id);
    $("#checkout").html("<img src='../IMAGE/"+item.id+
    ".jpg' alt='check out' width='100px' height='100px' align='left'></br> </br><span>"+item.name+
    "</span></br><span>"+item.size+
    "</span></br> </br><hr><span>GRAND TOTAL</span><span style='float: right;'>"+item.price+"</span>");
}
$(document).ready(function () {
    LoadItemCheckOut();
});

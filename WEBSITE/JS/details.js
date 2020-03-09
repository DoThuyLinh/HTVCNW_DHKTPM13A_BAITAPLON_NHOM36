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
function LoadDetails() {
    var queries = getQuery();
    var item = getItemById(queries.id);
    $("#img").html("<img src='../IMAGE/" + item.id + ".jpg' alt='image' style='border: 1px solid rgb(165, 165, 165)'></img>");
    $("#spans").html("<span class='textinfo'>" + item.name + "</span>" +
        "<span style='float:right;' class='textinfo'>" + item.price + " ₫</span>");
    $("#size").html("<span style='font-size: 15px;'>SIZE:</span></br>" +
        "<button class='btn btn-black white'>" + item.size + "MM</button>" +
        "<button class='btn btn-gray black'>" + item.maxsize + "MM</button>");
    $("#check").html("<button onclick = AddToCart(" + item.id + ") type='button'class='btn btnAdd mb-1 bg-blue-grey bg-darken-4 btn-icon btn-lg btn-block white'>" +
        "<i class='fa fa-check-circle'></i> Add to cart</button>");
    $('.btnAdd').on('click', function () {
        swal("Success!", "This item has been added to your shopping cart!", "success");
    });
}
function AddToCart(id) {
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

$(document).ready(function () {
    LoadDetails();
});


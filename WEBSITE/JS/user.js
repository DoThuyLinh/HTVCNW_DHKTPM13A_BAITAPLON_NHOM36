$(document).ready(function(){
    var user = Cookies.getJSON('user');
    console.log(user);
    if (user != undefined) {
        $("#name-user").html(user.username);
        $("#user-nav").removeClass('hidden');
        $("#btnLogout").addClass('hidden');
        $("#login-link").addClass('hidden');
    } else {
        $("#login-link").removeClass('hidden');   
        $("#nav-user").addClass('hidden');
    }
});

function Logout(){
    Cookies.remove('user');
    Cookies.remove('items');
    location.reload();
}
function validateUserName() {
    var username = $("#user-name").val();
    if(username == ""){
        $("#invalid-username").html('Username is required');
        $("#invalid-username").removeClass('hidden');
        return false;
    } 
    var regex = /^[1-9a-zA-Z]{4,24}$/;
    if(!regex.test(username)) {
        $("#invalid-username").html('You can only use 4 to 24 letters and numbers');
        $("#invalid-username").removeClass('hidden');
        return false;
    }
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if(user.username == username) {
            $("#invalid-username").html('Username is already exits');
            $("#invalid-username").removeClass('hidden');
            return false;
        }
    }
    $("#invalid-username").addClass('hidden');
    return true;
}
function validatePassword() {
    var password = $("#user-password").val();
    if(password == ""){
        $("#invalid-password").html('Password is required');
        $("#invalid-password").removeClass('hidden');
        return false;
    } 
    var regex = /^[1-9a-zA-Z]{4,24}$/;
    if(!regex.test(password)) {
        $("#invalid-password").html('You can only use 4 to 24 letters and numbers');
        $("#invalid-password").removeClass('hidden');
        return false;
    }
    $("#invalid-password").addClass('hidden');
    return true;
}
function register() {
    //nếu nút login chưa bị ẩn thì ẩn nút login và hiện ô nhập lại mật khẩu.
    if(!$("#btn-login").hasClass('hidden')) {
        $("#btn-login").addClass("hidden");
        $("#confirm-password").parent().removeClass('hidden');
        $("#new-account").addClass('hidden');
        return false;
    }
    if (validateUserName() && validatePassword()) {
        if($("#confirm-password").val() != $("#user-password").val()) {
            $("#invalid-confirm").removeClass("hidden");
            return false;
        }
        var id = $("#user-name").val();
        var pass = $("#confirm-password").val();
        var user = {
            username: id,
            password: pass
        }
        users.push(user);
        return Login();
    }
}
function Login(){
    var username = $("#user-name").val();
    var password = $("#user-password").val();
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if(user.username == username) {
            $("#invalid-username").addClass('hidden');
            if (user.password == password) {
                Cookies.set('user',user); //lưu thông tin người dùng vào cookie
                if(history.length > 1) {
                    history.go(-1); //quay lại trang trước
                } else {
                    window.location.replace('index.html');
                }
                return true;
            } else {
                $("#invalid-password").html('Wrong password');
                $("#invalid-password").removeClass('hidden'); //hiện thông báo username không tồn tại
                return false;
            }
        }
    }
    $("#invalid-password").addClass('hidden');
    $("#invalid-username").html('Username does not exits');
    $("#invalid-username").removeClass('hidden'); //hiện thông báo sai mật khẩu
    return false;
}
var Login = {
    Kiemtra: function () {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        if (Validate.emailValidate(email) == -1) {
            alert('Bạn chưa nhập email');
        }
        else if (Validate.emailValidate(email) == -2) {
            alert('EMAIL phải lớn hơn 10 ký tự');
        }
        else if (Validate.emailValidate(email) == 0) {
            alert('EMAIL không đúng định dạng');
        }
        else {
            if (Validate.passwordValidate(password) == -1) {
                alert('Bạn chưa nhập Password');
            }
            else if (Validate.passwordValidate(password) == 0) {
                alert('Password phải lớn hơn 7 ký tự');
            }
            else {
                window.location = "ASUS.html";
            }
        }
    }
}
var Validate = {
    emailValidate: function (email) {
        if (!email) {
            return -1;
        }
        else {
            if (email.length > 10) {
                var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(email) ? 1 : 0;
            }
            else {
                return -2;
            }
        }
    },
    passwordValidate: function (pass) {
        if (!pass) {
            return -1;
        }
        else {
            if (pass.length > 7)
                return 1;
            else
                return 0;
        }
    }
}
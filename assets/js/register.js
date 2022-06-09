var Login = {
    Kiemtra: function () {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var passwordretype = document.getElementById("passwordretype").value;
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
            else if (Validate.passwordValidate(password) == -2) {
                alert('Password phải lớn hơn 7 ký tự');

            }
            else if (Validate.passwordValidate(password) == 0) {
                alert('Mật khẩu không đúng định dạng');
            }
            else {
                if (Validate.checkpassValidate(password, passwordretype) == 5) {
                    alert('Bạn đã đăng ký thành công !!!')
                    window.location = "login.html";
                }
                else {
                    alert('Mật khẩu không giống nhau !!!');
                }
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
    passwordValidate: function (pass1) {
        if (!pass1) {
            return -1;
        }
        else {
            if (pass1.length > 7) {
                var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
                return regex.test(pass1) ? 1 : 0;
            }
            else
                return -2;
        }
    },
    passwordretypeValidate: function (pass2) {
        if (!pass2) {
            return -1;
        }
        else {
            if (pass2.length > 7)
                return 1;
            else
                return 0;
        }
    },
    checkpassValidate: function (pass1, pass2) {
        if (pass1 == pass2) {
            return 5;
        }
        else {
            return -5;
        }
    }

}
$(document).ready(function() {
    
    function checkUsername() {
        var ref = /^[a-z]\w*/;
        if($("#inputUsername").val() == "") {
            $("#username").text("Tên đăng nhập không được để trống!");
            return false
        } else if (ref.test($("#inputUsername").val()) == false) {
            $("#username").text("Tên đăng nhập không hợp lệ!");
            return false;
        } else {
            $("#username").text("");
            return true;
        }
        
    }
    $("#inputUsername").blur(checkUsername);

    function checkPassword() {
  
      if ($("#inputPassword").val() === "") {
        $("#password").text("Mật khẩu không được để trống!");
        return false;
      } else if ($("#inputPassword").val().length < 8) {
        $("#password").text("Mật khẩu phải dài ít nhất 8 ký tự!");
        return false;
      } else {
        $("#password").text("");
        return true;
      }
    }
    $("#inputPassword").blur(checkPassword);
  
    function checkRetypePassword() {
      const password = $("#inputPassword").val();
      const retypePassword = $("#inputRepassword").val();
      const retypePasswordError = $("#repassword");
  
      if (retypePassword === "") {
        retypePasswordError.text("Vui lòng nhập lại mật khẩu.");
        return false;
      } else if (retypePassword !== password) {
        retypePasswordError.text("Mật khẩu không khớp.");
        return false;
      } else {
        retypePasswordError.text("");
        return true;
      }
    }
    $("#inputRepassword").blur(checkRetypePassword);
    
    function checkFullName() {
      const fullName = $("#inputFullname").val();
      const fullNameError = $("#fullname");
  
      if (fullName === "") {
        fullNameError.text("Họ và tên không được để trống.");
        return false;
      } else {
        fullNameError.text("");
        return true;
      }
    }
  
    $("#inputFullname").blur(checkFullName);
  
    function checkEmail() {
      const email = $("#inputEmail").val();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailError = $("#email");
  
      if (email === "") {
        emailError.text("Email không được để trống.");
        return false;
      } else if (!emailRegex.test(email)) {
        emailError.text("Email không hợp lệ.");
        return false;
      } else {
        emailError.text("");
        return true;
      }
    }
    $("#inputEmail").blur(checkEmail);

    function checkSDT() {
        const sdt = $("#inputPhonenumber").val();
        const sdtRegex = /^((09|03|07|08|05)+([0-9]{8}))/g;;
        const sdtError = $("#sdt");
    
        if (sdt === "") {
            sdtError.text("SDT không được để trống.");
          return false;
        } else if (!sdtRegex.test(sdt)) {
            sdtError.text("SDT không hợp lệ.");
          return false;
        } else {
            sdtError.text("");
          return true;
        }
      }
      $("#inputPhonenumber").blur(checkSDT);
    
      function showModal(message) {
        $("#modalMessage").text(message);
        $("#myModal").css("display", "block");
      }
      
      function closeModal() {
        $("#myModal").css("display", "none");
      }

    function checkSubmit() {
      if(checkUsername() && checkEmail() && checkPhone() && checkPassword() && checkRetypePassword() && checkSDT() && checkFullName()) {
        $("#submit").submit();
        showModal("Đăng ký thành công!");
      } else {
        showModal("Dữ liệu không hợp lệ!");
      }
    }
    $("#submit").click(checkSubmit);

  $(".close").click(closeModal);

  // Đóng modal khi người dùng click bất kỳ đâu ngoài modal
  $(window).click(function (event) {
    if (event.target == $("#myModal")[0]) {
      closeModal();
    }
  });
});
  
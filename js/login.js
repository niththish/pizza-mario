function showLogin(){
    
    let loginDiv = document.getElementById("login");
    let signupDiv = document.getElementById("signup");
    signupDiv.style.display = "none";
    loginDiv.style.display = "flex";

    let loginOPtBtn = document.getElementById("login_opt_btn");
    let signup_opt_btn = document.getElementById("signup_opt_btn");
    signup_opt_btn.classList.remove("active");
    loginOPtBtn.classList.add("active");


  }

  function showSignup(){
  
    let loginDiv = document.getElementById("login");
    let signupDiv = document.getElementById("signup");
    loginDiv.style.display = "none";
    signupDiv.style.display = "flex";

    let loginOPtBtn = document.getElementById("login_opt_btn");
    let signup_opt_btn = document.getElementById("signup_opt_btn");
    loginOPtBtn.classList.remove("active");
    signup_opt_btn.classList.add("active");
  }  
  
  async function login(){
    let user = document.getElementById("login_username");
    let pass = document.getElementById("login_password");

    var payload = {
      username : user.value,
      password : pass.value
    };

    var data = JSON.stringify(payload);
    console.log(data);
    
    /*$.ajax({
      url: "http://127.0.0.1:3000/login",
      type: "POST",
      crossDomain: true,
      data: data,
      dataType: "json",
      headers: {
        "accept": "application/json",
        "Access-Control-Allow-Origin":"*"
      },
      success: function (response) {
          var resp = JSON.parse(response)
          alert(resp.status);
      },
      error: function (xhr, status) {
          alert("error");
      }
  });*/

    
    window.location.href = "home.html"
  }

  function signup(){
      let username = document.getElementById("signup_username");
      let password = document.getElementById("signup_password");
      let mobile_number = document.getElementById("signup_mobile_number");

      let loginDiv = document.getElementById("login");
      let signupDiv = document.getElementById("signup");
      signupDiv.style.display = "none";
      loginDiv.style.display = "flex";
  }

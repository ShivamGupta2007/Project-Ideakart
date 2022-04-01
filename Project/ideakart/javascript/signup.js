
document.querySelector("#form").addEventListener("submit", myFormSubmit);
var signupArr = JSON.parse(localStorage.getItem("signUpDetails"))||[];
function myFormSubmit()
{
    event.preventDefault();
    var signupObj = {
        name: document.querySelector("#name").value,
        mobile: document.querySelector("#mobile").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        confirmPassword : document.querySelector("#password2").value,
    };
    signupArr.push(signupObj);
    console.log(signupArr);
    localStorage.setItem("signUpDetails", JSON.stringify(signupArr));
    document.querySelector("input[type='submit'").addEventListener("click", function(){
        window.location.href = "login.html"
        //  alert("Successfully Signup")
    })
}
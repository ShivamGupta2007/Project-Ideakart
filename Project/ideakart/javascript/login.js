
var regdUsers = JSON.parse(localStorage.getItem("signUpDetails"));
console.log(regdUsers);

var loginArr = JSON.parse(localStorage.getItem("signUpDetails"))||[];

document.querySelector("#form").addEventListener("submit", formSubmit);
var form = document.querySelector("#form");
//console.log(form.user.value);

function formSubmit(event)
{
event.preventDefault();

var email= form.email.value;
var password= form.password.value;
console.log(email,password);

for(var i=0; i<regdUsers.length; i++)
{
    if(regdUsers[i].email == email && regdUsers[i].password == password)
    {
        alert("login Success");
        
    }
    else
    {
        alert("login Failed");
    }
}

    localStorage.setItem("signUpDetails", JSON.stringify(loginArr));
    document.querySelector("input[type='submit'").addEventListener("click", function(){
        
        window.location.href = "home.html"; 
        alert("login Success")
        
    })
}
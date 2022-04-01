
document.querySelector("#form").addEventListener("submit",myFormSubmit);
contactArr=JSON.parse(localStorage.getItem("contactDetails")) || [];
function myFormSubmit()
{
  event.preventDefault()
    var dataObj={
        firstName : document.querySelector("#fname").value,
        lastName : document.querySelector("#lname").value,
        email : document.querySelector("#email").value,
        phoneno : document.querySelector("#phone").value,
        message : document.querySelector("#message").value,
    };
        contactArr.push(dataObj);
        console.log(contactArr)
        localStorage.setItem("contactDetails", JSON.stringify(contactArr))

    document.querySelector("input[type='submit'").addEventListener("click", function(){
        window.location.href="contact.html"
         alert("Contact Successfully Login")
    })
}
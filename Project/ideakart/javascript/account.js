
document.querySelector("#form").addEventListener("submit",myFormSubmit );
accountArr=JSON.parse(localStorage.getItem("accountDetails")) || [];
function myFormSubmit()
{
    event.preventDefault()
    var dataObj={
        accountNumber : document.querySelector("#acc").value,
        ifcCode : document.querySelector("#code").value,
        bankName : document.querySelector("#name").value,
        upiId : document.querySelector("#upi").value,
        address1 : document.querySelector("#add").value,
        address2 : document.querySelector("#add2").value,
        city : document.querySelector("#city").value,
        state : document.querySelector("#state").value,
        pinCode : document.querySelector("#pin").value
    };
    accountArr.push(dataObj);
    console.log(accountArr)
    localStorage.setItem("accountDetails", JSON.stringify(accountArr))

    document.querySelector("input[type='submit'").addEventListener("click", function(){
        window.location.href="account.html"
         alert("Account Successfully Login")
    })
}
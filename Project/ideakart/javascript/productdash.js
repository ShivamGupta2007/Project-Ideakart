
var product = JSON.parse(localStorage.getItem("reviewApplications"))
console.log(product)

product.map(function(elem)
{
    var row= document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerText=elem.name

    var td2 = document.createElement("td")
    td2.innerText=elem.experience

    var td3 = document.createElement("td")
    td3.innerHTML =elem.file

    var td4 = document.createElement("td")
    td4.innerText=elem.buy

    var td5 = document.createElement("td")
    td5.innerText=elem.plateform

    var avg = (Number(elem.name)) +(Number(elem.experience)) + (Number(elem.file)) /3;
    console.log(avg);

    var td6 =document.createElement("td");
    td6.innerText =avg;

    var td7 = document.createElement("td");
    if(avg>5)
    {
        td7.innerText = "UnderReview";   
    }
    else{
        td7.innerText ="Review Pass";
    }
    row.append(td1,td3,td2,td7)

   document.querySelector("tbody").append(row)
   
 })
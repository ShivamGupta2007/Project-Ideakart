
    document.querySelector("#form").addEventListener("submit", myFunction);
    var reviewArr = JSON.parse(localStorage.getItem("reviewApplications")) || [];

    function myFunction() 
    {
      event.preventDefault();
        var jobObj = {
            name: document.querySelector("#name").value,
            experience: document.querySelector("#mg").value,
            file : document.querySelector("#file").value,
            buy: document.querySelector("#buy").value,
            plateform : document.querySelector("#plateform").value,
        };
        reviewArr.push(jobObj);
        console.log(reviewArr)
        localStorage.setItem("reviewApplications", JSON.stringify(reviewArr));
    }
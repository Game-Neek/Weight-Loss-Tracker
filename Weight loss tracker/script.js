let btnClick = document.querySelector("button");
let weightadder = document.querySelectorAll("numberInputWeight");

weightadder.addEventListener("keydown", function(event) {
    if(event.key === 'Enter'){
     window.location.href = "Landing-Page.html";
    }
});




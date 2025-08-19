let btnClick = document.querySelector("button");
let weightadder = document.getElementById("numberInputWeight");

function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')
}

weightadder.addEventListener("keydown", function(event) {
    if(event.key === 'Enter'){
        const num = weightadder.value.trim();
        if(!num){
            alert("Please input a variable.");
        }
        else{
             window.location.href = "Landing-Page.html";
        }
    
    }
});







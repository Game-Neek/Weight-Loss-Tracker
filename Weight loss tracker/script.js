let btnClick = document.querySelector("button");
let weightadder = document.getElementById("numberInputWeight");
const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');
}

function toggleSidebar(){
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
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








let btnClick = document.querySelector("button");
let weightadder = document.getElementById("numberInputWeight");
const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function toggleSubMenu(button){
    
    if(!button.nextElementSibling.classList.contains('show')){
        closeAllSubMenus
    }
    // closeAllSubMenus

    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close');
        toggleButton.classList.toggle('rotate');
    }
}

function toggleSidebar(){
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');

    closeAllSubMenus()

}

weightadder.addEventListener("keydown", function(event) {
    if(event.key === 'Enter'){
        const num = weightadder.value.trim();
        if(!num){
            alert("Please input a variable.");
            return;
        }
        else{
             window.location.href = "Landing-Page.html";
        }
    
    }
});

function closeAllSubMenus(){
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    });
}











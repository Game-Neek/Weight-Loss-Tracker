let btnClick = document.querySelector("button");
let weightadder = document.getElementById("numberInputWeight");

weightadder.addEventListener("keydown", function(event) {
    if(event.key === 'Enter'){
        const num = input.value.trim();
        if(num == null){
            print("Please input a variable.");
        }
        else{
             window.location.href = "Landing-Page.html";
        }
    
    }
});



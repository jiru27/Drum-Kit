var n= document.querySelectorAll(".drum").length;

for ( var i = 0; i < n; i++){

    document.querySelectorAll(".drum")[i].addEventListener('click',function(){
        var buttonInnerHTML = this.innerHTML;
        handleClick(buttonInnerHTML)
        animation(buttonInnerHTML)
    });
    
    
    document.addEventListener("keypress", function(event) {
        handleClick(event.key)
        animation(event.key)
    })

}


function handleClick(key){
    
    switch(key){
        case "w":
            new Audio("./sounds/tom-1.mp3").play();
            break;

        case "a":
            new Audio("./sounds/tom-2.mp3").play();
            break;

        case "s":
            new Audio("./sounds/tom-3.mp3").play();
            break;

        case "d":
            new Audio("./sounds/tom-4.mp3").play();
            break;

        case "j":
            new Audio("./sounds/kick-bass.mp3").play();
            break;

        case "k":
            new Audio("./sounds/crash.mp3").play();
            break;

        case "l":
            new Audio("./sounds/snare.mp3").play();
            break;

        default:
            console.log("wrong key");
            break;
    }
    
}

function animation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },200)
}
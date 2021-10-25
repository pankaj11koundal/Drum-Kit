var noOfButtons = document.querySelectorAll(".drum");

// Detecting clicks
for (let index = 0; index < noOfButtons.length; index++) {
    noOfButtons[index].addEventListener("click", funDrum)
}
function funDrum() {
    innerHtmlText = this.innerHTML;
    playSound(innerHtmlText);
    addAnimation(innerHtmlText);
}

// Detecting key Press
document.addEventListener("keydown", function (event) {
    let keyPressed = event.key;
    playSound(keyPressed);
    addAnimation(keyPressed);
});


function playSound(key) {
    
    if (key === "w") {
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
    }
    else if(key === "a"){
        let crash = new Audio("sounds/kick-bass.mp3");
        crash.play();
    }
    else if(key === "s"){
        let crash = new Audio("sounds/snare.mp3");
        crash.play();
    }
    else if(key === "d"){
        let crash = new Audio("sounds/tom-1.mp3");
        crash.play();
    }
    else if(key === "j"){
        let crash = new Audio("sounds/tom-2.mp3");
        crash.play();
    }
    else if(key === "k"){
        let crash = new Audio("sounds/tom-3.mp3");
        crash.play();
    }
    else if(key === "l"){
        let crash = new Audio("sounds/tom-4.mp3");
        crash.play();
    }
}

function addAnimation(key){
    var animationVar = document.querySelector("." + key);
    animationVar.classList.add("pressed");

    setTimeout(function () {
        animationVar.classList.remove("pressed");
    }, 100);
}

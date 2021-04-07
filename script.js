var i = 0;
var correct = 0;
var wrong = 0;
document.addEventListener("keypress", function (event) {
    var key = event.key;
    var audio = new Audio("audio/keypress.mp3");
    audio.play();

    var text = document.querySelectorAll(".letter")[i].innerText.charAt(0);
    // var text2 = document.querySelectorAll(".letter")[i].innerText;

    
    // console.log(text2);

    if (key == text) {
        document.querySelectorAll(".letter")[i].classList.add("color_white");
        correct++;
    }
    
    else {
        if(text==" ")
        {

           wrong=wrong;
        }
        else{
            wrong++;
            document.querySelectorAll(".letter")[i].classList.add("color_red");
        }
    }
    i++;
    if(i>=document.querySelectorAll(".letter").length)
    {
        console.log("The no. of correct typed letters are:"+correct);
        console.log("The no. of wrong typed letter are:"+wrong);
    }
});

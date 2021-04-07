// var s = `Tom is a fucking boy, and he is only seven years old. Once he goes to a cinema. It is the first time for him to do that. He buys a ticket and goes in. But after two or three minutes he comes out, and buys the second ticket and goes in again. After a few minutes he comes out again and buys the third ticket. Two or three minutes after that he comes out and asks for another ticket. But a girl asks him,"Why do you buy so many tickets? How many friends do you meet?" "No, I have no friends here, but a big woman always stops me at the door and cuts up my ticket."`
var s=`Tom is a good boy.`;
var len = s.length;

var x=`<div class="word text">`;


for (var i = len-1; i >=0; i--) {
    var c = s.charAt(i);
    if (c == ' ') {

        x = `<li class="letter">&nbsp;</li>
            </div>
             <div class="word text">`;
        // console.log(x);
    }
    else {
       x=`<li class="letter">` + s.charAt(i) + `</li>`;
       console.log(s.charAt(i));
    }
    document.getElementById("para").insertAdjacentHTML("afterend",x);
}
e.insertAdjacentHTML("afterend",`</div>`);

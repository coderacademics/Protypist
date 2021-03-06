// var s = `Tom is a fucking boy, and he is only seven years old. Once he goes to a cinema. It is the first time for him to do that. He buys a ticket and goes in. But after two or three minutes he comes out, and buys the second ticket and goes in again. After a few minutes he comes out again and buys the third ticket. Two or three minutes after that he comes out and asks for another ticket. But a girl asks him,"Why do you buy so many tickets? How many friends do you meet?" "No, I have no friends here, but a big woman always stops me at the door and cuts up my ticket."`
// var s=`Tom is a good boy.`;
let s = `The short essay on “The Improbability of the Infinite” which I was planning for you yesterday will now never be written. Last night my brain was crammed with lofty thoughts on the subject--and for that matter, on every other subject. My mind was never so fertile. Ten thousand words on any theme from Tin-tacks to Tomatoes would have been easy to me. That was last night. This morning I have only one word in my brain, and I cannot get rid of it. The word is “Teralbay.”

Teralbay is not a word which one uses much in ordinary life. Rearrange the letters, however, and it becomes such a word. A friend--no, I can call him a friend no longer--a person gave me this collection of letters as I was going to bed and challenged me to make a proper word of it. He added that Lord Melbourne--this, he alleged, is a well-known historical fact--Lord Melbourne had given this word to Queen Victoria once, and it had kept her awake the whole night. After this, one could not be so disloyal as to solve it at once. For two hours or so, therefore, I merely toyed with it. Whenever I seemed to be getting warm I hurriedly thought of something else. This quixotic loyalty has been the undoing of me; my chances of a solution have slipped by, and I am beginning to fear that they will never return. While this is the case, the only word I can write about is Teralbay.

Teralbay--what does it make? There are two ways of solving a problem of this sort. The first is to waggle your eyes and see what you get. If you do this, words like “alterably” and “laboratory” emerge, which a little thought shows you to be wrong. You may then waggle your eyes again, look at it upside down or sideways, or stalk it carefully from the southwest and plunge upon it suddenly when it is not ready for you. In this way it may be surprised into giving up its secret. But if you find that it cannot be captured by strategy or assault, then there is only one way of taking it. It must be starved into surrender. This will take a long time, but victory is certain.

There are eight letters in Teralbay and two of them are the same, so that there must be 181,440 ways of writing the letters out. This may not be obvious to you at once; you may have thought that it was only 181,439; but you may take my word for it that I am right. (Wait a moment while I work it out again.... Yes, that’s it.) Well, now suppose that you put down a new order of letters--such as “raytable”--every six seconds, which is very easy going, and suppose that you can spare an hour a day for it; then by the 303rd day--a year hence, if you rest on Sundays--you are bound to have reached a solution.

But perhaps this is not playing the game. This, I am sure, is not what Queen Victoria did. And now I think of it, history does not tell us what she did do, beyond that she passed a sleepless night. (And that she still liked Melbourne afterwards--which is surprising.) Did she ever guess it? Or did Lord Melbourne have to tell her in the morning, and did she say, “Why, of course!” I expect so. Or did Lord Melbourne say, “I’m awfully sorry, madam, but I find I put a ‘y’ in too many?” But no--history could not have remained silent over such a tragedy as that. Besides, she went on liking him.

When I die “Teralbay” will be written on my heart. While I live it shall be my telegraphic address. I shall patent a breakfast food called “Teralbay”; I shall say “Teralbay!” when I miss a 2-ft. putt; the Teralbay carnation will catch your eye at the Temple show. I shall write anonymous letters over the name. “Fly at once; all is discovered--Teralbay.” Yes, that would look rather well.

I wish I knew more about Lord Melbourne. What sort of words did he think of? The thing couldn’t he “aeroplane” or “telephone” or “googly,” because these weren’t invented in his time. That gives us three words less. Nor, probably, would it be anything to eat; a Prime Minister would hardly discuss such subjects with his Sovereign. I have no doubt that after hours of immense labour you will triumphantly suggest “rateably.” I suggested that myself, but it is wrong. There is no such word in the dictionary. The same objection applies to “bat-early”--it ought to mean something, but it doesn’t.

So I hand the word over to you. Please do not send the solution to me, for by the time you read this I shall either have found it out or else I shall be in a nursing home. In either case it will be of no use to me. Send it to the Postmaster-General or one of the Geddeses or Mary Pickford. You will want to get it off your mind.

As for myself I shall write to my fr----, to the person who first said “Teralbay” to me, and ask him to make something of “sabet” and “donureb.” When he has worked out the corrections--which, in case he gets the wrong ones, I may tell him here are “beast” and “bounder”--I shall search the dictionary for some long word like “intellectual.” I shall alter the order of the letters and throw in a couple of “g’s” and a “k”. And then I shall tell them to keep a spare bed for him in my nursing home.`;
var len = s.length;

var x = `<div class="word text">`;


for (var i =( Math.random() * (len - 1))%500; i >= 0; i--) {
    var c = s.charAt(i);
    if (c == ' ') {

        x = `<li class="letter">&nbsp;</li>
            </div>
             <div class="word text">`;
        // console.log(x);
    }
    else {
        x = `<li class="letter">` + s.charAt(i) + `</li>`;
        // console.log(s.charAt(i));
    }
    document.getElementById("para").insertAdjacentHTML("afterend", x);
}
e.insertAdjacentHTML("afterend", `</div>`);

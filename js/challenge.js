"use strict";
function _toConsumableArray(ogArray){
    // checks if a is an array; Look up .isArray
    if(Array.isArray(ogArray)){
        for(var i = 0, newArray = Array(ogArray.length); i < ogArray.length; i++)
            newArray[i] = ogArray[i];
        return newArray
    }
    // pass in an array like object and create an array
    return Array.from(ogArray)
}
    // look up this operator =!;
var playing =! 0, 
    timer = function(){
        return setInterval(function(){
            var counter = document.getElementById("counter"),
                counterValue = parseInt(counter.innerText);

            counter.innerText = counterValue + 1
            // 1e3 look this up 
        },1e3)
    },
    interval = timer(),
    minus = document.getElementById("minus"),
    plus = document.getElementById("plus"),
    heart = document.getElementById("heart"),
    pause = document.getElementById("pause"),
    commentForm = document.getElementsByTagName("form")[0];

minus.addEventListener("click",function(){
    var counter = document.getElementById("counter"),
        counterValue = parseInt(counter.innerText);
    counter.innerText = counterValue - 1
}),

plus.addEventListener("click",function(){
    var counter = document.getElementById("counter"),
        counterValue = parseInt(counter.innerText);
    counter.innerText = counterValue + 1
}),

heart.addEventListener("click",function(){
    var counter = document.getElementById("counter"),
        counterValue = parseInt(counter.innerText),
        likes = document.querySelector(".likes"),
        // void operator equals undefined
        likeElement = void 0;

    if( [].concat(_toConsumableArray(likes.children)).map( function(counter){ return parseInt(counter.dataset.num) }).includes(counterValue)) {
        likeElement = document.querySelector('[data-num="'+ counterValue +'"]');
        var numberOfLikes = parseInt(likeElement.children[0].innerText);
        likeElement.innerHTML = counterValue + " has been liked <span>" + (numberOfLikes + 1) + "</span> times"
    } else( 
        likeElement = document.createElement("li")
     ).setAttribute("data-num",counterValue),
    likeElement.innerHTML= counterValue + " has been liked <span>1</span> time",
    likes.appendChild(likeElement)
}),
    
pause.addEventListener("click",function(){
    playing ? (playing =! 1, clearInterval(interval), this.innerText = "resume") : (playing =! 0, interval = timer(),this.innerText="pause"), 
    
    [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(button){
        "pause" !== button.id && (button.disabled =! playing)
    })
}),

commentForm.addEventListener("submit",function(comment){
    comment.preventDefault();

    var commentField = this.children[0],
        commentText = commentField.value;

    commentField.value = "";

    var comments = document.querySelector(".comments"),
        pTag = document.createElement("p");

    pTag.innerText = commentText , comments.appendChild(pTag)
});

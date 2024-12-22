// alert("Hello");

//use handleclick not handleclick() for when the button is pushed because with the parenthesis the function
//is called and we dont want that, we want to leave it as parameter and  then add the even listener
// then when the button is clicked we call. we shouldnt call when eventlistener is added to index.js 
//only when the button is clicked

var number = document.querySelectorAll(".drum").length;
//select all buttons of type .drum
// for (var i = 0; i < number; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

// }

// both for loops work the one below is less code though
// for (var i = 0; i < number; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function (){ alert("I got clicked");});
// }


// function handleClick(){
//     alert("I got clicked!");

// }

// for (var i = 0; i < number; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
//     });
// }


//this needs a for loop since its for the buttons we have stored here as images
for (var i = 0; i < number; i++){ 
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});

//this is for any keypressed on the keyboard
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key)
});



function makeSound(key) {
    console.log("Key pressed:", key); // Log the key pressed
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log("Unhandled key:", key);
    }
}

function buttonAnimation(currentKey){
//query selector u need to use .and where and is the name of the class u are looking for its just standard

    var activeButton = document.querySelector("." + currentKey);
    //classlist lets you add animation classes such as pressed which are in the .css document
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
    //to make the effect go away after certain time we can use timeout function (ex for stuff like shadows)
}

}
//     var person = {
//         yearsOfAlive: 23,
//         name: "rob",
//         goodOrBad: true,
//     }
//     function Person(years, name, goodOrBaddd){
//         this.years = years;
//         this.name = name;
//         this.goodOrBaddd = goodOrBaddd;this
//         this.personFunction = function(){
//             console.log("this " + name + " person is " + goodOrBaddd);
//         }
//     }

//     var rob2PointOh = new Person(23,"robtwo",false);
//     console.log(rob2PointOh.name,rob2PointOh.years,rob2PointOh.goodOrBaddd);
//     rob2PointOh.personFunction();
    

// }

//callback functions return stuff for clicking or inputting that particular button
// if we click button and add eventlistener, this will pass the button you click 
//as an argument
//ex down below event is just what you are clicking that caused the event. it will list stuff like MouseClick = { type = "clicl", isTrusted = True;} and a bunch of details of that even that was triggered
// document.querySelectorAll("button")[0].addEventListener("click", function(event){
//     console.log(event);
// });
// // we can do call back functions on top of event listeners
// function anotherAddEventListener(typeOfEvent, callback){

//     var eventThatHappened = {
//         eventType: "keypress",
//         key: "p",
//         durationOfKeyPress: 2
//     }
//     if (eventThatHappened.eventType === typeOfEvent){
//         callback(eventThatHappened)

//     }
// }

// anotherAddEventListener("keypress", function(event){
//     console.log(event);
// });




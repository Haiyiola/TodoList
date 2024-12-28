let moon = document.getElementById("moon")
let sun = document.getElementById("sun")
let inputTask =  document.getElementById("input-task")
let javascriptSection = document.getElementById("javascriptSection")
let javascript = document.getElementById("javascript")
let jogSection = document.getElementById("jogSection")
let jog = document.getElementById("jog")
let meditationSection = document.getElementById("meditationSection")
let meditation = document.getElementById("meditation")
let readSection = document.getElementById("readSection")
let read = document.getElementById("read")
let groceriesSection = document.getElementById("groceriesSection")
let groceries = document.getElementById("groceries")
let completedSection = document.getElementById("completedSection")
let completed = document.getElementById("completed")
let javascript2 = document.getElementById("javascript2")
let jog2 = document.getElementById("jog2")
let meditation2 = document.getElementById("meditation2")
let read2 = document.getElementById("read2")
let groceries2 = document.getElementById("groceries2")
let completed2 = document.getElementById("completed2")


moon.addEventListener("click", function(){
    moon.style.display= "none"
    sun.style.display ="block"
})

sun.addEventListener("click", function(){
    sun.style.display ="none"
    moon.style.display = "block"
})
// inputTask.addEventListener("click", function(){
//     inputTask.innerHTML = <input placeholder="Currently Typing"/>
// })
javascript.addEventListener("click", function(){
    // javascript.style.display= ""
    javascript2.style.textDecoration= "line-through"
    javascript2.style.color= "var(--grey)"
})

jog.addEventListener("click", function(){
    jog2.style.textDecoration= "line-through"
    jog2.style.color= "var(--grey)"
})

meditation.addEventListener("click", function(){
    meditation2.style.textDecoration= "line-through"
    meditation2.style.color= "var(--grey)"
    meditation.style.display= ""
})

read.addEventListener("click", function(){
    read2.style.textDecoration= "line-through"
    read2.style.color= "var(--grey)"
    read.style.display= ""
})

groceries.addEventListener("click", function(){
    groceries2.style.textDecoration= "line-through"
    groceries2.style.color= "var(--grey)"
    groceries.style.display= ""
})
groceries.addEventListener("dblclick", function(){
    groceries2.style.textDecoration= "none"
    groceries2.style.color= "black"
    groceries.style.display= ""  
})

completed.addEventListener("click", function(){
    completed2.style.textDecoration= "line-through"
    completed2.style.color= "var(--grey)"
    completed.style.display= ""
})
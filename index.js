let moon = document.getElementById("moon")
let sun = document.getElementById("sun")
let inputTask =  document.getElementById("input-task")
let javascript = document.getElementById("javascript")
let jog = document.getElementById("jog")
let meditation = document.getElementById("meditation")
let read = document.getElementById("read")
let groceries = document.getElementById("groceries")
let completed = document.getElementById("completed")
let javascript2 = document.getElementById("javascript2")
let jog2 = document.getElementById("jog2")
let meditation2 = document.getElementById("meditation2")
let read2 = document.getElementById("read2")
let groceries2 = document.getElementById("groceries2")
let completed2 = document.getElementById("completed2")
let javascriptCheck = document.getElementById("javascript-check")
let jogCheck = document.getElementById("jog-check")
let meditationCheck = document.getElementById("meditation-check")
let readCheck = document.getElementById("read-check")
let groceriesCheck = document.getElementById("groceries-check")
let completedCheck = document.getElementById("completed-check")
let javascriptCross = document.getElementById("javascript-cross")
let jogCross = document.getElementById("jog-cross")
let meditationCross = document.getElementById("meditation-cross")
let readCross = document.getElementById("read-cross")
let groceriesCross = document.getElementById("groceries-cross")
let completedCross = document.getElementById("completed-cross")
let javascriptSection = document.getElementById("javascriptSection")
let jogSection = document.getElementById("jogSection")
let meditationSection = document.getElementById("meditationSection")
let readSection = document.getElementById("readSection")
let groceriesSection = document.getElementById("groceriesSection")
let completedSection = document.getElementById("completedSection")

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
    javascriptCheck.style.display = "block"
    javascript2.style.textDecoration= "line-through"
    javascript2.style.color= "var(--grey)"
    javascriptCross.style.display = "block"
})

javascript.addEventListener("dblclick", function(){
    javascriptCheck.style.display = "none"
    javascript2.style.textDecoration= "none"
    javascript2.style.color= "black"
    javascriptCross.style.display = "none"
})

jog.addEventListener("click", function(){
    jogCheck.style.display = "block"
    jog2.style.textDecoration= "line-through"
    jog2.style.color= "var(--grey)"
    jogCross.style.display = "block"
})

jog.addEventListener("dblclick", function(){
    jogCheck.style.display = "none"
    jog2.style.textDecoration= "none"
    jog2.style.color= "black"
    jogCross.style.display = "none"
})

meditation.addEventListener("click", function(){
    meditationCheck.style.display = "block"
    meditation2.style.textDecoration= "line-through"
    meditation2.style.color= "var(--grey)"
    meditation.style.display= ""
    meditationCross.style.display = "block"
})

meditation.addEventListener("dblclick", function(){
    meditationCheck.style.display = "none"
    meditation2.style.textDecoration= "none"
    meditation2.style.color= "black"
    meditationCross.style.display = "none"
})

read.addEventListener("click", function(){
    readCheck.style.display = "block"
    read2.style.textDecoration= "line-through"
    read2.style.color= "var(--grey)"
    read.style.display= ""
    readCross.style.display = "block"
})

read.addEventListener("dblclick", function(){
    readCheck.style.display = "none"
    read2.style.textDecoration= "none"
    read2.style.color= "black"
    readCross.style.display = "none"
})

groceries.addEventListener("click", function(){
    groceriesCheck.style.display = "block"
    groceries2.style.textDecoration= "line-through"
    groceries2.style.color= "var(--grey)"
    groceries.style.display= ""
    groceriesCross.style.display = "block"
})

groceries.addEventListener("dblclick", function(){
    groceriesCheck.style.display = "none"
    groceries2.style.textDecoration= "none"
    groceries2.style.color= "black"
    groceriesCross.style.display = "none"
})

completed.addEventListener("click", function(){
    completedCheck.style.display = "block"
    completed2.style.textDecoration= "line-through"
    completed2.style.color= "var(--grey)"
    completed.style.display= ""
    completedCross.style.display = "block"
})

completed.addEventListener("dblclick", function(){
    completedCheck.style.display = "none"
    completed2.style.textDecoration= "none"
    completed2.style.color= "black"
    completedCross.style.display = "none"
})

javascriptCross.addEventListener("click", function(){
    javascriptSection.style.display = "none"
})
jogCross.addEventListener("click", function(){
    jogSection.style.display = "none"
})
meditationCross.addEventListener("click", function(){
    meditationSection.style.display = "none"
})
readCross.addEventListener("click", function(){
    readSection.style.display = "none"
})
groceriesCross.addEventListener("click", function(){
    groceriesSection.style.display = "none"
})
completedCross.addEventListener("click", function(){
    completedSection.style.display = "none"
})
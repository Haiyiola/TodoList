const moon = document.getElementById("moon")
const sun = document.getElementById("sun")
const inputTask =  document.getElementById("input-task")
const javascript = document.getElementById("javascript")
const jog = document.getElementById("jog")
const meditation = document.getElementById("meditation")
const read = document.getElementById("read")
const groceries = document.getElementById("groceries")
const completed = document.getElementById("completed")
const javascript2 = document.getElementById("javascript2")
const jog2 = document.getElementById("jog2")
const meditation2 = document.getElementById("meditation2")
const read2 = document.getElementById("read2")
const groceries2 = document.getElementById("groceries2")
const completed2 = document.getElementById("completed2")
const javascriptCheck = document.getElementById("javascript-check")
const jogCheck = document.getElementById("jog-check")
const meditationCheck = document.getElementById("meditation-check")
const readCheck = document.getElementById("read-check")
const groceriesCheck = document.getElementById("groceries-check")
const completedCheck = document.getElementById("completed-check")
const javascriptCross = document.getElementById("javascript-cross")
const jogCross = document.getElementById("jog-cross")
const meditationCross = document.getElementById("meditation-cross")
const readCross = document.getElementById("read-cross")
const groceriesCross = document.getElementById("groceries-cross")
const completedCross = document.getElementById("completed-cross")
const javascriptSection = document.getElementById("javascriptSection")
const jogSection = document.getElementById("jogSection")
const meditationSection = document.getElementById("meditationSection")
const readSection = document.getElementById("readSection")
const groceriesSection = document.getElementById("groceriesSection")
const completedSection = document.getElementById("completedSection")
const article = document.getElementById("article")
const inputtaskSection = document.getElementById("input-task-section")
const Lists = document.getElementsByClassName("lists")
const body = document.getElementById("body")
const lightBg = document.getElementById("lightbg")
const darkBg = document.getElementById("darkbg")



moon.addEventListener("click", function(){
    moon.style.display= "none"
    sun.style.display ="block"
    article.style.backgroundColor = "#1f202b"
    article.style.color = "white"
    inputTask.style.backgroundColor = "#1f202b"
    inputtaskSection.style.backgroundColor = "#1f202b"
    Lists.style.backgroundColor = "#1f202b"
    body.style.backgroundColor = "#1f202b"
    lightBg.style.display = "none"
    darkBg.style.display ="block"
})

sun.addEventListener("click", function(){
    sun.style.display ="none"
    moon.style.display = "block"
    article.style.backgroundColor = "white"
    article.style.color = "black"
    inputTask.style.backgroundColor = "white"
    inputtaskSection.style.backgroundColor = "white"
    Lists.style.backgroundColor = "white"
    body.style.backgroundColor = "white"
    lightBg.style.display = "block"
    darkBg.style.display = "none"
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




// let newSection = document.getElementById("newSection")
// let newsection1Span = document.getElementById("newsection1-span")
// let newsection1Check = document.getElementById("newsection1-check")
// let newsection1 = document.getElementById("newsection1")
// let newsection1Cross = document.getElementById("newsection1-cross")

// newSection = inputTask.value

// let newSection2 = document.getElementById("newSection2")
// let newsection2Span = document.getElementById("newsection2-span")
// let newsection2Check = document.getElementById("newsection2-check")
// let newsection2 = document.getElementById("newsection2")
// let newsection2Cross = document.getElementById("newsection2-cross")


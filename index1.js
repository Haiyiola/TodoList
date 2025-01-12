let taskList = document.getElementById("task-list")
let inputTask = document.getElementById("input-task")
let task = inputTask.value
let newTask = document.getElementById("new-task")
let addTaskBtn = document.getElementById("add-btn")
let arrow = document.getElementById("arrow")
// newTask  = () => ` <div id="task-list">
//                     <div class="lists" id="javascriptSection">
//                         <div class="sub-list">
//                             <span class="radiosample" id="javascript"> <img src="./images/icon-check.svg" alt="check" class="check" id="javascript-check"></span>
//                             <h5 id="javascript2">${task}</h5> 
//                         </div>
//                         <img src="./images/icon-cross.svg" alt="cross" class="cross" id="javascript-cross">
//                     </div>
//                 </div>`
// addTask.addEventListener("click", function(){
//         newTask()
//         return;
//     })
// let arrow = document.getElementById("arrow")
// arrow.addEventListener("", function(){
//     newTask.innerHTML += `
                
//                 </div>`
//                 return;
// })
/*inputTask = () => {
    addTask.addEventListener("click", function(){
        newTask()
        return;
    })
} */
/*inputTask.addEventListener("click", function(){
    newTask += ` <div id="task-list">
                    <div class="lists" id="javascriptSection">
                        <div class="sub-list">
                            <span class="radiosample" id="javascript"> <img src="./images/icon-check.svg" alt="check" class="check" id="javascript-check"></span>
                            <h5 id="javascript2">${task}</h5> 
                        </div>
                        <img src="./images/icon-cross.svg" alt="cross" class="cross" id="javascript-cross">
                    </div>
                </div>`
}) */

// inputTask.addEventListener("keydown", function(){
//     let newList = inputTask.value
//     console.log(newList)
// })

let template = `<div class="lists" id="">
                <div class="sub-list">
                    <span class="radiosample" id=""> <img src="./images/icon-check.svg" alt="check" class="check" id=""></span>
                    <h5 id="2"></h5> 
                </div>
                <img src="./images/icon-cross.svg" alt="cross" class="cross" id="">
            </div>`
const addNewList = () => {
    addTaskBtn.addEventListener("click", function(){
        console.log(task)
    })
}

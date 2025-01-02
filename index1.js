let taskList = document.getElementById("task-list")
let inputTask = document.getElementById("input-task")
let task = inputTask.value
let newTask = document.getElementById("new-task")
let addTask = document.getElementById("add-task")
newTask  = () => ` <div id="task-list">
                    <div class="lists" id="javascriptSection">
                        <div class="sub-list">
                            <span class="radiosample" id="javascript"> <img src="./images/icon-check.svg" alt="check" class="check" id="javascript-check"></span>
                            <h5 id="javascript2">${task}</h5> 
                        </div>
                        <img src="./images/icon-cross.svg" alt="cross" class="cross" id="javascript-cross">
                    </div>
                </div>`
addTask.addEventListener("click", function(){
        newTask()
        return;
    })
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
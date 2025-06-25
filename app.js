const { readFileSync, writeFileSync } = require("fs");
const [, , command, ...args] = process.argv;

let allTasks = [];
getAllTasks();
let taskId = getId();

// Check command and give appropriate response
if (command === "list") {
  console.log(allTasks);
} 
else if (command === "add") {
  createTask(taskId, args[0], args[1]);
  writeFileSync("./testfile.json", JSON.stringify(allTasks));
}
else if(command === "delete"){
    deleteTask(args[0]);
}
else if(command === "update"){
    updateTask(args[0], args[1]);
    console.log("Task updated successfully");
}
else if(command === "list-done"){
    const doneTasks = allTasks.filter((task) => task.progress === "done")
    console.log(doneTasks);
}
else if(command === "list-todo"){
    const todoTasks = allTasks.filter((task) => task.progress === "to do")
    console.log(todoTasks);
}
else if(command === "list-inprogress"){
    const inProgressTasks = allTasks.filter((task) => task.progress === "in progress")
    console.log(inProgressTasks);
}
else{
    console.log("Invalid command. Please use 'list', 'add', 'delete', 'update', 'list-done', 'list-todo', or 'list-inprogress'.");
}

// Functions
function createTask(taskId, descr) {
  allTasks = [
    ...allTasks,
    {
      id: taskId,
      description: descr,
      progress: "to do",
      createdAt: new Date().toLocaleString(),
      updated: new Date().toLocaleString(),
    },
  ];
}
function getAllTasks() {
  const file = readFileSync("./testfile.json", "utf-8");
  if(file.length === 0){
    return;
  }
  else{
    allTasks = JSON.parse(file);
  }
  
}
function deleteTask(taskId) {
    allTasks = allTasks.filter((task) => task.id !== parseInt(taskId)) 
    writeFileSync("./testfile.json", JSON.stringify(allTasks));
}

function updateTask(taskId, newProgress){
    allTasks = allTasks.map((task) => {
        if(task.id === parseInt(taskId)){
            return {
                ...task,
                progress: newProgress,
                updated: new Date().toLocaleString()
            }
        }
        else{
            return task;
        }
    })
    writeFileSync("./testfile.json", JSON.stringify(allTasks));
}

// to give a new id to the task
function getId(){
    if(allTasks.length === 0){
        return 1;
    }
    else{
        index = allTasks.length - 1;
        neededObject = allTasks[index];
        return neededObject.id + 1;
    }
    
}

// console.log(command, args);
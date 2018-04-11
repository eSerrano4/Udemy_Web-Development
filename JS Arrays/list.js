var todos =["Buy New Turtle"];

var input = prompt("What would you like to do?");


while(input !== "quit"){
    
    if(input === "list"){
        listTodos();
    }
        
else if(input === "new"){
    addTodo();
    
} 
else if(input === "delete"){
    
    deleteTodo();
}

    input = prompt("what would you like to do?");
    
}
console.log("OK, you quit the app!");


function listTodos(){
    console.log("*******");
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("*******");
}

function addTodo(){
    var newTodo = prompt("Enter new Todo");
    // add to new task
    todos.push(newTodo);
    alert("added new task");
}

function deleteTodo(){
    var index = prompt("Enter indez of task you wish to delete");
    //deletes task 
    //splice()
    
    todos.splice(index,1);
    alert("Task deleted");
}
var option = prompt("What would you like to do");
var todos = [];
while (option !== "quit")
{
  if (option === "list")
  {
    listTodos();
  }
  else if (option === "delete")
  {
    deleteTodo();
  }
  else if (option === "new")
  {
    addTodo();
  }
  option = prompt("What would you like to do")
}
console.log("You Quit app.");

function listTodos()
{
  console.log("##################");
  todos.forEach(function (todo, i)
    {
      console.log("["+i+"]"+" "+todo);
    });
  console.log("##################");
}

function deleteTodo()
{
  var minus = prompt("Enter index of Todo you want to delete");
  //delete todos[minus];
  todos.splice(minus,1);
  console.log("Deleted Todo with index number: "+minus);
}

function addTodo()
{
  var newTodo = prompt("Enter new Todo");
  todos.push(newTodo);
}

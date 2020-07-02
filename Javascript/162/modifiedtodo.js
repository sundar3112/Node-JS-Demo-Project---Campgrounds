var todos=["Buy the product"];
var input=prompt("What would you like to do??");
while(input!=="quit"){
if(input==="list")
{
	todos.forEach(function(todo,i)
	{
		console.log(i+": "+todo);
	})
}
else if(input=="new")
{
	addTodo();
}
else if(input=="delete")
{
	var index=prompt("Enter the index to be deleted:");
	deleteTodo(index);
}
var input=prompt("What would you like to do??");
}
console.log("you quit!");
function listTodos()
{
	todos.forEach(function(todo,i)
	{
		console.log(i+": "+todo);
	});
}
function addTodo()
{
	var newTodo=prompt("Enter new Todo");
	todos.push(newTodo);
}
function deleteTodo(index1) {
	
	todos.splice(index1,1);
}
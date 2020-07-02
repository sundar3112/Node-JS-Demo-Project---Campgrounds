var todos=["Buy the product"];
var input=prompt("What would you like to do??");
while(input!=="quit"){
if(input==="list")
{
	console.log(todos);
}
else if(input=="new")
{
	var newTodo=prompt("Enter new Todo");
	todos.push(newTodo);
}
var input=prompt("What would you like to do??");
}
console.log("you quit!");

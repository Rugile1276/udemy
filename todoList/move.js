var action;
var list = [];
var newTodo;
var index;


function doAction () {

	action = prompt("What would you like to do?");

	if (action === "new"){
		list.push(prompt("Enter a new Todo"));
		console.log("New tod is added");
		doAction();
	}else if (action === "list") {
		console.log("LIST: ");
		console.log("**************");
		list.forEach(function(elem, index, arr){
			console.log(index + ": " + elem);
		});
		console.log("**************");
		doAction();
	} else if (action === "quit"){
		console.log("QUITED");
		return;
	} else if(action === "remove"){
		index = prompt("Enter element index to delete");
		list.splice(index, 1);
		doAction();
	}else {
		doAction();
	}
}

doAction();
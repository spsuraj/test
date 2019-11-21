var person={
	printf: function()
	{
		console.log("My name is : ");
		console.log(this === person);
	}
};
person.printf();

function dosomething(){
	console.log("\n Something");
	console.log(this === global);
}
dosomething();
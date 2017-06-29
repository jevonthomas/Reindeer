var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

//Targets the div with the id "reindeer" and stores it into a variable
var hohohoElement = document.getElementById("reindeer");

//For loop that loops as many times as the length of the reindeer array
for (var i = 0; i < reindeer.length; i++) {
	//Inserts a color paired with a reindeer into the dom based on their index number
	hohohoElement.innerHTML += `<p>${colors[i]} ${reindeer[i]}</p>`
}
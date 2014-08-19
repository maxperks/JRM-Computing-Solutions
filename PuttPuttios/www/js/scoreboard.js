var courseName;
var currentHole;
var scoreCard;
var numberOfPlayers;



function newGame(course) {
	// Remember the course name
	courseName = course;
	
	// Prepare for name input
	try {
		
		// Delete any old names
		var nameTable = document.getElementById("name-table");
		for (var rowCount = nameTable.rows.length; rowCount != 0;  ) {
			nameTable.deleteRow(--rowCount);
		}
	} catch(e) { alert(e); }
}


function addPlayer() {
	// Add a new name input field
	var nameTable = document.getElementById("name-table");
	
	if (nameTable.rows.length < 5) {
		var row = nameTable.insertRow(0);
		var cell = row.insertCell(0);
		var textBox = document.createElement("input");
		textBox.type = "text";
		textBox.className = "names";
		cell.appendChild(textBox);
		
	// Don't let people form groups >5
	} else {
		alert("To avoid congesting the course, please form smaller groups.");
	}
}

function playGame() {
	
	var nameTable = document.getElementById("name-table");
	
	if (0 == (numberOfPlayers = nameTable.rows.length)) {
		alert("You need to add some players.");
		return false;
	}
	
	for (var i = 0; i < 5; ++i)
	{
		var scoreTable = document.getElementById("hole-score-table");
		var row = scoreTable.insertRow(0);
		
		var cell0 = row.insertCell(0);
		var nameLabel = document.createElement('p');
		nameLabel.innerHTML = "Hello";
		cell0.appendChild(nameLabel);
		
		var cell1 = row.insertCell(1);
		var scoreInput = document.createElement("input");
		scoreInput.type = "text";
		scoreInput.className = "scores";
		cell1.appendChild(scoreInput);
		
		var cell2 = row.insertCell(2);
		var totalLabel = document.createElement('p');
		cell2.appendChild(totalLabel);
	}
	
	return true;
}

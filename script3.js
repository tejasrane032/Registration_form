
var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if(!name || !email || !phone) {
        alert("Please fill all the Entries");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);
    
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    
    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = phone;

    row++;
}
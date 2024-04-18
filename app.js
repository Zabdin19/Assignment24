// -------------------- Chapter 43 to 48 -------------------

// Q1 
function showAlert() {
    alert("You clicked the link!");
}

showAlert()

// Q2 

function showMessage() {
    alert("Thanks for purchasing a phone from us");
}

// Q3 

function deleteRow(row) {
    var i = row.parentNode.parentNode.rowIndex; // Get the index of the row
    document.getElementById('studentTable').deleteRow(i); // Delete the row from the table
}

// Q4 

function changeImage(source) {
    document.getElementById('myImage').src = source;
}

function restoreImage() {
    document.getElementById('myImage').src = 'first_image.jpg'; // Replace 'first_image.jpg' with the path to your first image
}

// Q5 

let counter = 0;

function increaseCounter() {
    counter++;
    document.getElementById('counterDisplay').innerText = counter;
}

function decreaseCounter() {
    if (counter > 0) {
        counter--;
        document.getElementById('counterDisplay').innerText = counter;
    }
}


// -------------------- Chapter 49 to 52 -------------------

// Q1 

function displayFormData() {
    // Get form input values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Display form data on the webpage
    var displayArea = document.getElementById('formDataDisplay');
    displayArea.innerHTML = "First Name: " + firstName + "<br>" +
                             "Last Name: " + lastName + "<br>" +
                             "Email: " + email + "<br>" +
                             "Password: " + password;
}

// Q2 


function showFullDetails() {
    // Toggle the display of full details
    var fullDetails = document.getElementById('fullDetails');
    if (fullDetails.style.display === 'none') {
        fullDetails.style.display = 'block';
    } else {
        fullDetails.style.display = 'none';
    }
}

// Q3 

var students = []; // Array to store student details

function addStudent() {
    // Get form input values
    var studentName = document.getElementById('studentName').value;
    var studentAge = document.getElementById('studentAge').value;
    var studentGrade = document.getElementById('studentGrade').value;

    // Create a student object
    var student = {
        name: studentName,
        age: studentAge,
        grade: studentGrade
    };

    // Add student to the array
    students.push(student);

    // Refresh the table
    displayStudents();
}

function displayStudents() {
    // Clear previous table data
    document.getElementById('studentTable').innerHTML = '';

    // Display each student detail in the table
    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        var row = "<tr><td>" + student.name + "</td><td>" + student.age + "</td><td>" + student.grade + "</td>" +
                  "<td><button onclick='deleteStudent(" + i + ")'>Delete</button></td>" +
                  "<td><button onclick='editStudent(" + i + ")'>Edit</button></td></tr>";
        document.getElementById('studentTable').innerHTML += row;
    }
}

function deleteStudent(index) {
    // Remove student from the array
    students.splice(index, 1);
    // Refresh the table
    displayStudents();
}

function editStudent(index) {
    // Display the edit form
    document.getElementById('editForm').style.display = 'block';

    // Fill the form with the values of the selected student
    var student = students[index];
    document.getElementById('editName').value = student.name;
    document.getElementById('editAge').value = student.age;
    document.getElementById('editGrade').value = student.grade;

    // Save the index of the selected student for later reference
    document.getElementById('editIndex').value = index;
}

function saveEditedStudent() {
    // Get the index of the selected student
    var index = document.getElementById('editIndex').value;

    // Update the student details with the values from the edit form
    students[index].name = document.getElementById('editName').value;
    students[index].age = document.getElementById('editAge').value;
    students[index].grade = document.getElementById('editGrade').value;

    // Hide the edit form
    document.getElementById('editForm').style.display = 'none';

    // Refresh the table
    displayStudents();
}
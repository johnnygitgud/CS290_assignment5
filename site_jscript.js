//This script redirects user to the create account page. This is the fastest version compared to one in a previous committ.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signup-button").addEventListener("click", function() {
        window.location.href = "sign_up_page.html"; // Redirect to sign-up page
});
});



//This is the array for usernames and passwords. It contains a couple of test usernames and passswords
const siteUsersList = [
	{ // Object @ 0 index
		username: "turtlecode",
		password: "codechannel"
	},
	{ // Object @ 1 index
		username: "monkeycode",
		password: "codechannel"
	}
]

// Function to create a new user and add them to the siteUsersList array
// function createNewUser() {
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     // Log the values of username and password to check if they are received correctly
//     console.log("Username:", username);
//     console.log("Password:", password);

//     // Check if username already exists
//     for (var i = 0; i < siteUsersList.length; i++) {
//         if (username === siteUsersList[i].username) {
//             alert("Username already exists. Please choose a different username.");
//             return;
//         }
//     }

//     // Add new user to siteUsersList array
//     siteUsersList.push({username: username, password: password});
//     console.log("New user created:", username);

//     // Redirect user to login page
//     window.location.href = "home_page.html";
// }

// Function to create a new user and add them to the siteUsersList array
function createNewUser() {
    const username = document.getElementById('new_username').value;
    const password = document.getElementById('new_password').value;

    // Check if username or password is empty
    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    // Check if username already exists
    for (var i = 0; i < siteUsersList.length; i++) {
        if (username === siteUsersList[i].username) {
            alert("Username already exists. Please choose a different username.");
            return;
        }
    }

    // Add new user to siteUsersList array
    siteUsersList.push({username: username, password: password});
    console.log("New user created:", username);

    // Redirect user to login page
    window.location.href = "home_page.html";
}



//Function to authenticate existing user
function login() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	for (var i = 0; i < siteUsersList.length; i++) {
        // check is user input matches username and password of a current index of the objPeople array
		if (username === siteUsersList[i].username && password === siteUsersList[i].password) {
			console.log(username + " is logged in!!!");
			window.location.href = 'crypto_pigeonUI.html';
			return;
		}
	}
	console.log("Incorrect username or password");
	alert("You entered the incorrect username or password.");
}

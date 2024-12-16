
 // create a object for userData;
 const userData = {
    101: { name: "John Doe", job: "Web Developer" },
    102: { name: "Sonu Kumar", job: "Software Engineer" },
    103: { name: "Rahul Kumar", job: "Data Scientist" },
    104: { name: "Papoo Kumar", job: "Software Developer" },
    105: { name: "Raju Kumar", job: "Sales Manager" },
    106: { name: "Rohan Singh", job: "Marketing Manager" },
    107: { name: "Manish Kumar", job: "HR Manager" },
    108: { name: "Ritesh Rai", job: "Finance Manager" },
    109: { name: "Aman Kumar", job: "IT Manager" },
    110: { name: "Sohan Lal", job: "Network Engineer" }
};

// create a object for userConnection
const userConnection = {
    101: ["Sonu", "Aman", "Rahul"],
    102: ["John", "Rohan", "Ritesh"],
    103: ["Manish", "Raju", "Sohan"],
    104: ["Rohan", "Ritesh", "Aman"],
    105: ["Manish", "Ritesh", "Sohan"],
    106: ["Raju", "Aman", "Rohan"],
    107: ["Ritesh", "Sohan", "Manish"],
    108: ["Aman", "Rohan", "Raju"],
    109: ["Sohan", "Manish", "Ritesh"],
    110: ["Rohan", "Aman", "Raju"]
};

// create a function to handle userProfile;
function userProfile() {
    // get value from input and button resultUser;
    const searchField = document.getElementById("searchField");
    const searchId=searchField.value;
    const resultUser = document.getElementById("result");
    resultUser.innerHTML = "";

    // check for searchId is valid or not.
    if (!searchId) {
        alert("Please enter user id");
        return;
    }
    // call the fetchUserData function
    fetchUserData(searchId)
        .then((userDetails) => {
            // display none in the post;
            document.getElementById("postBox").style.display="none";
            
            resultUser.innerHTML =`<h2>User Profile:</h2><h2>Name: ${userDetails.name}</h2>
            <h2>Job: ${userDetails.job}</h2>`;
            resultUser.style.textAlign="center";
            resultUser.style.padding="15px";
            resultUser.style.backgroundColor=" white";
            resultUser.style.marginBottom="20px";
            resultUser.style.borderRadius= "10px";
            resultUser.style.color= "var(--para_color)";
            resultUser.style.fontWeight=" 400";

            // call fetchUserConnection function;
            return fetchUserConnection(searchId);
        })
        .then((connections) => {
            resultUser.innerHTML +=`<h2>User Connections:</h2>`;
            connections.forEach((connection) => {
                resultUser.innerHTML +=`<li>${connection}</li>`;
            });
        })
        .catch((error) => {
            resultUser.innerHTML =`<p style="color: red;">
                Error: ${error}</p>`;
        });
}
// create a fetchUserData function and pass into searchId.
function fetchUserData(searchId) {
    return new Promise((resolve, reject) => {
         // here we can copy object value from userData object with searchId
        //  And pass  into userDetail object;
        const userDetail = userData[searchId];
        setTimeout(() => {
            // check if userDetail is valid or not.
            if (!userDetail) {
                reject("User not found");
            } else {
                resolve(userDetail);
            }
        }, 1000);
    });
}
// create a fetchUserConnection function and pass into searchId.
function fetchUserConnection(searchId) {
    return new Promise((resolve, reject) => {
        // here we can copy object value from UserConnections Array with searchId
        //  And pass  into connections object;
        const connections = userConnection[searchId];
        setTimeout(() => {
            // check if connections is valid or not.
            if (!connections) {
                reject("No connections found");
            } else {
                resolve(connections);
            }
        }, 1000);
    });
}

// Add eventListener to the searchField;
searchField.addEventListener("input",userProfile);
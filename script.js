let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video iframe');
let title = document.querySelector('.main-video .title');

listVideo.forEach(iframe =>{
    iframe.onclick = () =>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        iframe.classList.add('active');
        if(iframe.classList.contains('active')){
            let src = iframe.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = iframe.children[1].innerHTML;
            title.innerHTML = text;
        };
    };

});


// Get the input field and search button
var inputField = document.getElementById("wrapper-grid");
var searchButton = document.querySelector("#search button");

// Add event listener to the input field
inputField.addEventListener("keypress", function (event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === "Enter") {
        // Call the searchJumuiya function when Enter is pressed
        searchJumuiya();
    }
});

// Function to handle the search button click
function searchJumuiya() {
    // Get the value entered in the input field
    var searchTerm = inputField.value.toLowerCase(); // Convert to lowercase for case-insensitive matching
    // Get all Jumuiya containers
    var jumuiyaContainers = document.querySelectorAll(".jumuiya-container");

    // Flag to check if a match is found
    var matchFound = false;

    // Iterate through each Jumuiya container
    for (var i = 0; i < jumuiyaContainers.length; i++) {
        var jumuiyaContainer = jumuiyaContainers[i];
        var jumuiyaName = jumuiyaContainer.querySelector("h2").textContent.toLowerCase();

        // Check if the entered term matches the Jumuiya name
        if (jumuiyaName.includes(searchTerm)) {
            // Match found! Show this Jumuiya container and hide others
            jumuiyaContainer.style.display = "block";
            matchFound = true;
        } else {
            // Hide other Jumuiya containers
            jumuiyaContainer.style.display = "none";
        }

        setTimeout(function () {
        location.reload();
    }, 9000);
    }

    // If no match is found, display an alert inside the page
    if (!matchFound) {
        // Create a div for the alert message
        var alertDiv = document.createElement("div");
        alertDiv.innerHTML = "No matching Jumuiya found for: " + searchTerm;
        alertDiv.style.color = "skyblue"; // Optional: Style the alert message
        alertDiv.style.marginTop = "10px"; // Optional: Adjust the margin
        alertDiv.style.fontFamily = 'Georgia', 'Times New Roman', 'Times, serif';
        alertDiv.style.fontSize = "20px";

        // Append the alert message to a suitable container in your HTML
        var jumuiyaWrapper = document.getElementById("jumuiya-wrapper");
        jumuiyaWrapper.appendChild(alertDiv);
        // You can remove the alert after a certain time if needed
        setTimeout(function () {
            alertDiv.remove();
        }, 5000); // 5000 milliseconds (5 seconds) in this example
    }
}





















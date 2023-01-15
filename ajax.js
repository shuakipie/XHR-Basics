// JavaScript function to handle the button click
function getUpdates() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Open a connection to the server
    xhr.open("GET", "updates.php", true);
  
    // Set the response type
    xhr.responseType = "text";
  
    // Send the request
    xhr.send();
  
    // Handle the response
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Update the page with the response text
        document.getElementById("updates").innerHTML = xhr.response;
      } else {
        // Handle error
        console.log("An error occurred: " + xhr.status);
      }
    };
  }
  
  // Attach the function to a button click event
  var button = document.getElementById("get-updates-button");
  button.addEventListener("click", getUpdates);
  
// JavaScript function to handle the form submission
function submitForm(event) {
    // Prevent the form from submitting
    event.preventDefault();
  
    // Get the form data
    var formData = new FormData(event.target);
  
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Open a connection to the server
    xhr.open("POST", "submit-form.php", true);
  
    // Send the request
    xhr.send(formData);
  
    // Handle the response
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Update the page with the response text
        document.getElementById("form-response").innerHTML = xhr.response;
      } else {
        // Handle error
        console.log("An error occurred: " + xhr.status);
      }
    };
  }
  
  // Attach the function to the form's submit event
  var form = document.getElementById("my-form");
  form.addEventListener("submit", submitForm);
    
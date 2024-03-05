const formData = [];

document.addEventListener("DOMContentLoaded", function() {
    // DOM content has loaded, you can now safely access and manipulate the DOM
    console.log("DOM content loaded");

    // Step 1 span id's
    document.querySelector('#nameRequired').style.display = 'none';
    document.querySelector('#emailRequired').style.display = 'none';
    document.querySelector('#phoneRequired').style.display = 'none';

    // Step displays
    document.querySelector('#step1Form').style.display = 'block';
    document.querySelector('#step2Form').style.display = 'none';
    
    // Check for button clicks
    document.querySelector('#step1btn').addEventListener('click', (e) => {
        e.preventDefault(); 
        next_step();
    });

});


// Validate information
function validateInput(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputValue = inputElement.value.trim();
    const errorMessageElement = document.getElementById(inputId + "Required");
    
    // Manipulate elements to reflect empty information
    if (!inputValue) {
        errorMessageElement.style.display = 'block';
        inputElement.classList.add("border-red-500", "focus:ring-red-500");
        inputElement.classList.remove("focus:ring-blue-500");

        return false;
    } 

    errorMessageElement.style.display = 'none';
    inputElement.classList.add("focus:ring-blue-500");
    inputElement.classList.remove("border-red-500", "focus:ring-red-500");
        
    return true
}


function next_step() {
    console.log("next_step");

    // Get values from inputs
    const name_element = document.getElementById("name").value;
    const email_element = document.getElementById("email").value;
    const phone_element = document.getElementById("phone").value;

    // Validate inputs
    const valid_name = validateInput('name');
    const valid_email = validateInput('email');
    const valid_phone  = validateInput('phone');

    if (valid_name && valid_email && valid_phone) {
     
        // Create an object to represent the form data
        const formDataItem = {
            name: name_element,
            email: email_element,
            phone: phone_element
        };

        // Push the form data object into the global array
        formData.push(formDataItem);

        console.log("Form data:", formData);

        document.querySelector('#step1Form').style.display = 'none';
        document.querySelector('#step2Form').style.display = 'block';
    }
}

formData = [{
    bill : 0,
    billInit : 0,
    toggle : null,
    name : '',
    email : '',
    phone : '',
}];

// Step 3 Radio Buttons
document.addEventListener("DOMContentLoaded", function() {

    // Checkbox
    const checkboxes = document.querySelectorAll('input[type="radio"]');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                checkboxes.forEach(otherCheckbox => {
                    if (otherCheckbox !== this) {
                        otherCheckbox.parentElement.querySelector('.checkbox').classList.remove('border-blue-500');
                    }
                });
                if (this.checked) {
                    this.parentElement.querySelector('.checkbox').classList.add('border-blue-500');
                } else {
                    this.parentElement.querySelector('.checkbox').classList.remove('border-blue-500');
                }
            });
        });

});

// Step 4 Checkboxes
document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkboxDiv = this.parentElement.querySelector('.checkbox');
            if (this.checked) {
                checkboxDiv.classList.add('border-blue-500');
            } else {
                checkboxDiv.classList.remove('border-blue-500');
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // DOM content has loaded, you can now safely access and manipulate the DOM
    console.log("DOM content loaded");

    // Step 1 span id's
    document.querySelector('#nameRequired').style.display = 'none';
    document.querySelector('#emailRequired').style.display = 'none';
    document.querySelector('#phoneRequired').style.display = 'none';

    // Step 2 id's
    document.querySelector('#planRequired').style.display = 'none';

    // Step displays
    document.querySelector('#step1Form').style.display = 'block';
    document.querySelector('#step2Form').style.display = 'none';
    document.querySelector('#step3Form').style.display = 'none';
    document.querySelector('#step4Form').style.display = 'none';
    document.querySelector('#step5Form').style.display = 'none';

    // Header Display
    document.querySelector('#step1Header').style.display = 'block';
    document.querySelector('#step2Header').style.display = 'none';
    document.querySelector('#step3Header').style.display = 'none';
    document.querySelector('#step4Header').style.display = 'none';
    
    // Check for button clicks
    document.querySelector('#step1btn').addEventListener('click', (e) => {
        e.preventDefault(); 
        next_step();
    });
    document.querySelector('#step2btn').addEventListener('click', (e) => {
        e.preventDefault(); 
        next_step_2();
    });
    document.querySelector('#step3btn').addEventListener('click', (e) => {
        e.preventDefault(); 
        next_step_3();
    });
    document.querySelector('#step4btn').addEventListener('click', (e) => {
        e.preventDefault(); 
        next_step_4();
    });

    // Go back buttons
    document.querySelector('#stepback2Btn').addEventListener('click', (e) => {
        e.preventDefault();
        go_back();
    });
    document.querySelector('#stepback3Btn').addEventListener('click', (e) => {
        e.preventDefault();
        go_back_2();
    });
    document.querySelector('#stepback4Btn').addEventListener('click', (e) => {
        e.preventDefault();
        go_back_3();
    });

    // Change plan
    document.querySelector('#change').addEventListener('click', (e) => {
        e.preventDefault();
        change_plan();
    })

});


function go_back() {
    document.querySelector('#step1Form').style.display = 'block';
    document.querySelector('#step2Form').style.display = 'none';

    document.querySelector('#step1Header').style.display = 'block';
    document.querySelector('#step2Header').style.display = 'none';
}


function go_back_2() {
    document.querySelector('#step2Form').style.display = 'block';
    document.querySelector('#step3Form').style.display = 'none';

    document.querySelector('#step2Header').style.display = 'block';
    document.querySelector('#step3Header').style.display = 'none';

    document.getElementById('toggleBtn').checked = false;

    formData[0].bill = 0;
    formData[0].toggle = null;
}

function go_back_3() {
    document.querySelector('#step3Form').style.display = 'block';
    document.querySelector('#step4Form').style.display = 'none';

    document.querySelector('#step3Header').style.display = 'block';
    document.querySelector('#step4Header').style.display = 'none';

    document.getElementById('onlineInfo').classList.add('hidden');
    document.getElementById('storageInfo').classList.add('hidden');
    document.getElementById('profileInfo').classList.add('hidden');

    formData[0].bill = formData[0].billInit;
}


function change_plan() {
    document.querySelector('#step4Form').style.display = 'none';
    document.querySelector('#step2Form').style.display = 'block';

    document.querySelector('#step4Header').style.display = 'none';
    document.querySelector('#step2Header').style.display = 'block';

    document.getElementById('toggleBtn').checked = false;
    document.querySelectorAll('input[name="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
        checkbox.parentElement.querySelector('.checkbox').classList.remove('border-blue-500');
    });
    document.querySelectorAll('input[type="radio"]').forEach(checkbox => {
        checkbox.checked = false;
        checkbox.parentElement.querySelector('.checkbox').classList.remove('border-blue-500');
    });

    document.getElementById('onlineInfo').classList.add('hidden');
    document.getElementById('storageInfo').classList.add('hidden');
    document.getElementById('profileInfo').classList.add('hidden');

    formData[0].bill = 0;
    formData[0].toggle = null;
}


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

        formData[0].name = name_element
        formData[0].email = email_element
        formData[0].phone = phone_element

        document.querySelector('#step1Form').style.display = 'none';
        document.querySelector('#step2Form').style.display = 'block';

        document.querySelector('#step1Header').style.display = 'none';
        document.querySelector('#step2Header').style.display = 'block';
    }
}


function next_step_2() {
    console.log("next_step_2");

    // Reset bill
    formData[0].bill = 0;
    formData[0].billInit = 0;

    // Get all radio buttons with the name "checkbox"
    const radioButtons = document.querySelectorAll('input[name="checkbox"]');
    const toggleButton = document.getElementById("toggleBtn");

    let checkedId = null;

    // Iterate over each radio button
    radioButtons.forEach(function(radioButton) {
        // Check if the current radio button is checked
        if (radioButton.checked) {
            // If checked, store its value
            checkedId = radioButton.id;
        }
    });

    // Assign bill based on checkedId
    if (checkedId === 'arcade') {
        bill = 9;
    } else if (checkedId === 'advanced') {
        bill = 12;
    } else if (checkedId === 'pro') {
        bill = 15;
    }

    if (toggleButton.checked) {
        toggle = 'Yearly';
        bill *= 12
        billStr = `+$${bill}/yr`;
    } else {
        toggle = 'Monthly';
        billStr = `+$${bill}/mo`;
    }

    if (checkedId) {
        const capitalizedId = checkedId.charAt(0).toUpperCase() + checkedId.slice(1);

        // Update the text content of the span inside #plantext
        document.querySelector('#plantext').innerHTML = 
            `${capitalizedId} (${toggle}) <span class="ml-[250px] font-bold text-sm">${billStr}</span>`;


        document.querySelector('#step2Form').style.display = 'none';
        document.querySelector('#step3Form').style.display = 'block';
        document.querySelector('#planRequired').style.display = 'none';

        document.querySelector('#step2Header').style.display = 'none';
        document.querySelector('#step3Header').style.display = 'block';
    } else {
        document.querySelector('#planRequired').style.display = 'block';

        document.getElementById('arcadeDiv').classList.add("border-red-500", "focus:ring-red-500");
        document.getElementById('advancedDiv').classList.add("border-red-500", "focus:ring-red-500");
        document.getElementById('proDiv').classList.add("border-red-500", "focus:ring-red-500");

        // Remove the classes after 3 seconds
        setTimeout(function() {
            document.getElementById('arcadeDiv').classList.remove("border-red-500", "focus:ring-red-500");
            document.getElementById('advancedDiv').classList.remove("border-red-500", "focus:ring-red-500");
            document.getElementById('proDiv').classList.remove("border-red-500", "focus:ring-red-500");
        }, 1500); 
    }

    formData[0].bill = bill;
    formData[0].billInit = bill;
    formData[0].toggle = toggle;

    console.log('Bill: ', formData[0].bill);
}


function next_step_3() {
    // Get all checkboxes with the name "checkbox" (step 3 checkboxes)
    const checkButtons = document.querySelectorAll('input[name="checkbox"]');
    
    let ids = [];

    // Iterate over each checkbox
    checkButtons.forEach(function(checkButton) {
        // Check if the current checkbox is checked
        if (checkButton.checked) {
            // If checked, store its ID
            ids.push(checkButton.id);      
        }
    });

    // Filter id's
    ids = ids.filter(id => id.includes("online") || id.includes("profile") || id.includes("storage"));

    console.log(ids);

    // Check if we should uncover the info
    ids.forEach(id => {
        if (id.includes("online")) {
            document.getElementById('onlineInfo').classList.remove('hidden');
            
            if (formData[0].toggle === 'Yearly') {
                formData[0].bill += 12;
            }
            else {
                formData[0].bill++;
            }
        }
        else if (id.includes("storage")) {
            document.getElementById('storageInfo').classList.remove('hidden');
    
            if (formData[0].toggle === 'Yearly') {
                formData[0].bill += 24;
            }
            else {
                formData[0].bill += 2;
            }
        }
        else if (id.includes("profile")) {
            document.getElementById('profileInfo').classList.remove('hidden');
    
            if (formData[0].toggle === 'Yearly') {
                formData[0].bill += 24;
            }
            else {
                formData[0].bill += 2;
            }
        }
    });
    

    if (formData[0].toggle === 'Yearly') {
        totalUnit = '/yr';
    } else {
        totalUnit = '/mo'
    }

    document.querySelector('#total span').innerHTML = 
        `+$${formData[0].bill.toString()+totalUnit}`;

    document.querySelector('#step3Form').style.display = 'none';
    document.querySelector('#step4Form').style.display = 'block';

    document.querySelector('#step3Header').style.display = 'none';
    document.querySelector('#step4Header').style.display = 'block';
}


function next_step_4() {
    document.querySelector('#step4Form').style.display = 'none';
    document.querySelector('#step5Form').style.display = 'block';

    document.querySelector('#step4Header').style.display = 'none';
}
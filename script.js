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
    document.getElementById('emailInvalid').style.display = 'none';

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

    document.getElementById('infoBackground').classList.add("bg-blue-200", "border-blue-600");
    document.getElementById('infoBackground').classList.remove("border-white");

    document.getElementById('infoInnerText').classList.add('text-blue-600');
    document.getElementById('infoInnerText').classList.remove('text-white');

    document.getElementById('planBackground').classList.add("border-white", "bg-blue-600");
    document.getElementById('planBackground').classList.remove("bg-blue-200", "border-blue-600");

    document.getElementById('planInnerText').classList.add('text-white');
    document.getElementById('planInnerText').classList.remove('text-blue-600');
}


function go_back_2() {
    document.querySelector('#step2Form').style.display = 'block';
    document.querySelector('#step3Form').style.display = 'none';

    document.querySelector('#step2Header').style.display = 'block';
    document.querySelector('#step3Header').style.display = 'none';

    document.getElementById('toggleBtn').checked = false;

    formData[0].bill = 0;
    formData[0].toggle = null;

    document.getElementById('planBackground').classList.add("bg-blue-200", "border-blue-600");
    document.getElementById('planBackground').classList.remove("border-white");

    document.getElementById('planInnerText').classList.add('text-blue-600');
    document.getElementById('planInnerText').classList.remove('text-white');

    document.getElementById('addBackground').classList.add("border-white", "bg-blue-600");
    document.getElementById('addBackground').classList.remove("bg-blue-200", "border-blue-600");

    document.getElementById('addInnerText').classList.add('text-white');
    document.getElementById('addInnerText').classList.remove('text-blue-600');
}

function go_back_3() {
    document.querySelector('#step3Form').style.display = 'block';
    document.querySelector('#step4Form').style.display = 'none';

    document.querySelector('#step3Header').style.display = 'block';
    document.querySelector('#step4Header').style.display = 'none';

    document.getElementById('onlineInfo').classList.add('hidden');
    document.getElementById('storageInfo').classList.add('hidden');
    document.getElementById('profileInfo').classList.add('hidden');
    document.getElementById('onlineSpan1').classList.add('hidden');
    document.getElementById('onlineSpan2').classList.add('hidden');
    document.getElementById('storageSpan1').classList.add('hidden');
    document.getElementById('storageSpan2').classList.add('hidden');
    document.getElementById('profileSpan1').classList.add('hidden');
    document.getElementById('profileSpan2').classList.add('hidden');

    formData[0].bill = formData[0].billInit;

    document.getElementById('addBackground').classList.add("bg-blue-200", "border-blue-600");
    document.getElementById('addBackground').classList.remove("border-white");

    document.getElementById('addInnerText').classList.add('text-blue-600');
    document.getElementById('addInnerText').classList.remove('text-white');

    document.getElementById('sumBackground').classList.add("border-white", "bg-blue-600");
    document.getElementById('sumBackground').classList.remove("bg-blue-200", "border-blue-600");

    document.getElementById('sumInnerText').classList.add('text-white');
    document.getElementById('sumInnerText').classList.remove('text-blue-600');
}


function change_plan() {
    document.querySelector('#step4Form').style.display = 'none';
    document.querySelector('#step2Form').style.display = 'block';

    document.querySelector('#step4Header').style.display = 'none';
    document.querySelector('#step2Header').style.display = 'block';

    formData[0].bill = formData[0].billInit;
    formData[0].bill = 0;
    formData[0].toggle = null;

    document.getElementById('onlineInfo').classList.add('hidden');
    document.getElementById('storageInfo').classList.add('hidden');
    document.getElementById('profileInfo').classList.add('hidden');
    document.getElementById('onlineSpan1').classList.add('hidden');
    document.getElementById('onlineSpan2').classList.add('hidden');
    document.getElementById('storageSpan1').classList.add('hidden');
    document.getElementById('storageSpan2').classList.add('hidden');
    document.getElementById('profileSpan1').classList.add('hidden');
    document.getElementById('profileSpan2').classList.add('hidden');

    formData[0].bill = 0;
    formData[0].toggle = null;

    document.getElementById('planBackground').classList.add("bg-blue-200", "border-blue-600");
    document.getElementById('planBackground').classList.remove("border-white");

    document.getElementById('planInnerText').classList.add('text-blue-600');
    document.getElementById('planInnerText').classList.remove('text-white');

    document.getElementById('sumBackground').classList.add("border-white", "bg-blue-600");
    document.getElementById('sumBackground').classList.remove("bg-blue-200", "border-blue-600");

    document.getElementById('sumInnerText').classList.add('text-white');
    document.getElementById('sumInnerText').classList.remove('text-blue-600');
}


function validateInput(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputValue = inputElement.value.trim();
    const errorMessageElement = document.getElementById(inputId + "Required");
    const errorMessageEmailElement = document.getElementById('emailInvalid');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Manipulate elements to reflect empty information
    if (!inputValue) {
        errorMessageElement.style.display = 'block';
        inputElement.classList.add("border-red-500", "focus:ring-red-500");
        inputElement.classList.remove("focus:ring-blue-500");

        return false;
    } 

    if (!emailRegex.test(inputValue) && inputId === 'email') {
        errorMessageEmailElement.style.display = 'block';
        inputElement.classList.add("border-red-500", "focus:ring-red-500");
        inputElement.classList.remove("focus:ring-blue-500");

        return false;
    } else if (emailRegex.test(inputValue) && inputId === 'email') {
        errorMessageEmailElement.style.display = 'none';
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

        document.getElementById('infoBackground').classList.remove("bg-blue-200", "border-blue-600");
        document.getElementById('infoBackground').classList.add("border-white");

        document.getElementById('infoInnerText').classList.remove('text-blue-600');
        document.getElementById('infoInnerText').classList.add('text-white');

        document.getElementById('planBackground').classList.remove("border-white", "bg-blue-600");
        document.getElementById('planBackground').classList.add("bg-blue-200", "border-blue-600");

        document.getElementById('planInnerText').classList.remove('text-white');
        document.getElementById('planInnerText').classList.add('text-blue-600');
    }
}


function next_step_2() {
    console.log("next_step_2");

    // Reset bill
    formData[0].bill = 0;
    formData[0].billInit = 0;
    let bill = 0;

    // Get all radio buttons with the name "checkbox"
    const radioButtons = document.querySelectorAll('input[name="radiocheckbox"]');
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

    console.log("checkedId:", checkedId); // Debug statement

    // Assign bill based on checkedId
    if (checkedId === 'arcade') {
        bill = 9;
    } else if (checkedId === 'advanced') {
        bill = 12;
    } else if (checkedId === 'pro') {
        bill = 15;
    }

    console.log("bill:", bill); // Debug statement

    if (toggleButton.checked) {
        toggle = 'Yearly';
        bill *= 12
        billStr = `+$${bill}/yr`;
    } else {
        toggle = 'Monthly';
        billStr = `+$${bill}/mo`;
    }

    console.log("toggle:", toggle); // Debug statement
    console.log("billStr:", billStr); // Debug statement

    if (checkedId !== null) {
        console.log("we are in if");

        const capitalizedId = checkedId.charAt(0).toUpperCase() + checkedId.slice(1);

        // Update the text content of the span inside #plantext
        document.querySelector('#plantext').innerHTML = 
            `${capitalizedId} (${toggle}) <span class="ml-[250px] font-bold text-sm">${billStr}</span>`;

        if (toggle === 'Yearly') {
            document.getElementById('onlineTrans1').classList.add('hidden');
            document.getElementById('onlineTrans2').classList.remove('hidden');
            document.getElementById('storageTrans1').classList.add('hidden');
            document.getElementById('storageTrans2').classList.remove('hidden');
            document.getElementById('profileTrans1').classList.add('hidden');
            document.getElementById('profileTrans2').classList.remove('hidden');
        }
        else {
            document.getElementById('onlineTrans1').classList.remove('hidden');
            document.getElementById('onlineTrans2').classList.add('hidden');
            document.getElementById('storageTrans1').classList.remove('hidden');
            document.getElementById('storageTrans2').classList.add('hidden');
            document.getElementById('profileTrans1').classList.remove('hidden');
            document.getElementById('profileTrans2').classList.add('hidden');
        }

        document.querySelector('#step2Form').style.display = 'none';
        document.querySelector('#step3Form').style.display = 'block';
        document.querySelector('#planRequired').style.display = 'none';

        document.querySelector('#step2Header').style.display = 'none';
        document.querySelector('#step3Header').style.display = 'block';

        document.getElementById('planBackground').classList.remove("bg-blue-200", "border-blue-600");
        document.getElementById('planBackground').classList.add("border-white");

        document.getElementById('planInnerText').classList.remove('text-blue-600');
        document.getElementById('planInnerText').classList.add('text-white');

        document.getElementById('addBackground').classList.remove("border-white", "bg-blue-600");
        document.getElementById('addBackground').classList.add("bg-blue-200", "border-blue-600");

        document.getElementById('addInnerText').classList.remove('text-white');
        document.getElementById('addInnerText').classList.add('text-blue-600');
    } 
    
    if (checkedId === null) {
        console.log("we are in else");

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
                document.getElementById('onlineSpan2').classList.remove('hidden');
            }
            else {
                formData[0].bill++;
                document.getElementById('onlineSpan1').classList.remove('hidden');
            }
        }
        else if (id.includes("storage")) {
            document.getElementById('storageInfo').classList.remove('hidden');
    
            if (formData[0].toggle === 'Yearly') {
                formData[0].bill += 24;
                document.getElementById('storageSpan2').classList.remove('hidden');
            }
            else {
                formData[0].bill += 2;
                document.getElementById('storageSpan1').classList.remove('hidden');
            }
        }
        else if (id.includes("profile")) {
            document.getElementById('profileInfo').classList.remove('hidden');
    
            if (formData[0].toggle === 'Yearly') {
                formData[0].bill += 24;
                document.getElementById('profileSpan2').classList.remove('hidden');
            }
            else {
                formData[0].bill += 2;
                document.getElementById('profileSpan1').classList.remove('hidden');
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

    document.getElementById('addBackground').classList.remove("bg-blue-200", "border-blue-600");
    document.getElementById('addBackground').classList.add("border-white");

    document.getElementById('addInnerText').classList.remove('text-blue-600');
    document.getElementById('addInnerText').classList.add('text-white');

    document.getElementById('sumBackground').classList.remove("border-white", "bg-blue-600");
    document.getElementById('sumBackground').classList.add("bg-blue-200", "border-blue-600");

    document.getElementById('sumInnerText').classList.remove('text-white');
    document.getElementById('sumInnerText').classList.add('text-blue-600');
}


function next_step_4() {
    document.querySelector('#step4Form').style.display = 'none';
    document.querySelector('#step5Form').style.display = 'block';

    document.querySelector('#step4Header').style.display = 'none';
}
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
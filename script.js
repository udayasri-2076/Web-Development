const form = document.getElementById('paymentForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form submission
    let valid = true;

    // Clear all previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    // Name validation
    const name = document.getElementById('name').value.trim();
    if(name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        valid = false;
    }

    // Gender validation
    const gender = document.querySelector('input[name="gender"]:checked');
    if(!gender) {
        document.getElementById('genderError').textContent = 'Please select gender';
        valid = false;
    }

    // Address validation
    const address = document.getElementById('address').value.trim();
    if(address === '') {
        document.getElementById('addressError').textContent = 'Address is required';
        valid = false;
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)) {
        document.getElementById('emailError').textContent = 'Invalid email';
        valid = false;
    }

    // Pincode validation
    const pincode = document.getElementById('pincode').value.trim();
    if(pincode.length !== 6) {
        document.getElementById('pincodeError').textContent = 'Pincode must be 6 digits';
        valid = false;
    }

    // Card type validation
    const cardType = document.getElementById('card_type').value;
    if(cardType === '') {
        document.getElementById('cardTypeError').textContent = 'Please select card type';
        valid = false;
    }

    // Card number validation
    const cardNumber = document.getElementById('card_number').value.trim();
    if(cardNumber.length < 12 || cardNumber.length > 16) {
        document.getElementById('cardNumberError').textContent = 'Card number must be 12-16 digits';
        valid = false;
    }

    // Expiration date validation
    const expire = document.getElementById('expire').value;
    if(!expire) {
        document.getElementById('expireError').textContent = 'Please select expiration date';
        valid = false;
    }

    // CVV validation
    const cvv = document.getElementById('CVV').value.trim();
    if(cvv.length !== 3) {
        document.getElementById('cvvError').textContent = 'CVV must be 3 digits';
        valid = false;
    }

    if(valid) {
        alert('Payment Successful!');
        form.reset();
    }
});

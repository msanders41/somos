function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var email = document.forms["contactForm"]["email"].value;

    // Simple validation for name and email (phone validation already handled by HTML5 pattern)
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    // You can add more sophisticated email validation if needed

    // Optionally, you can handle notes validation here as well

    // If all validations pass, form submits
    return true;
}
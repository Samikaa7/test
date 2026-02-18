function validateForm() {
    let valid = true;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(e => e.innerHTML = "");

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value.trim();
    let prn = document.getElementById("prn").value.trim();
    let course = document.getElementById("course").value.trim();
    let year = document.getElementById("year").value;

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerHTML =
            "Password must be at least 6 characters";
        valid = false;
    }

    let mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        document.getElementById("mobileError").innerHTML =
            "Enter valid 10-digit mobile number";
        valid = false;
    }

    if (prn === "") {
        document.getElementById("prnError").innerHTML = "PRN is required";
        valid = false;
    }

    if (course === "") {
        document.getElementById("courseError").innerHTML = "Course is required";
        valid = false;
    }

    if (year === "") {
        document.getElementById("yearError").innerHTML = "Please select a year";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully ");
    }

    return valid;
}

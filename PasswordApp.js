function checkStrength() {

    const password = document.getElementById("passwordInput").value;
    const strengthText = document.getElementById("strengthText");
    let strength = 0;

    // Length check
    if (password.length >= 8) strength++;

    // Uppercase
    if (/[A-Z]/.test(password)) strength++;

    // Lowercase
    if (/[a-z]/.test(password)) strength++;

    // Number
    if (/[0-9]/.test(password)) strength++;

    // Special characters
    if (/[\W_]/.test(password)) strength++;

    // Common weak passwords
    const weakPasswords = ["password", "123456", "qwerty", "abcd1234"];
    if (weakPasswords.includes(password.toLowerCase())) {
        strengthText.innerText = "Strength: Very Weak (Common Password)";
        strengthText.style.color = "red";
        return;
    }

    // Result display
    switch (strength) {
        case 0:
        case 1:
            strengthText.innerText = "Strength: Very Weak";
            strengthText.style.color = "red";
            break;
        case 2:
            strengthText.innerText = "Strength: Weak";
            strengthText.style.color = "orange";
            break;
        case 3:
            strengthText.innerText = "Strength: Medium";
            strengthText.style.color = "yellow";
            break;
        case 4:
            strengthText.innerText = "Strength: Strong";
            strengthText.style.color = "#32cd32";
            break;
        case 5:
            strengthText.innerText = "Strength: Very Strong";
            strengthText.style.color = "lime";
            break;
    }
}
const usernameField = document.querySelector("#usernameField");
const emailField = document.querySelector("#emailField");
const usernamefeedbackArea = document.querySelector(".invalid_feedback");
const emailfeedBackArea = document.querySelector(".emailFeedbackArea");
const usernameSuccessOutput = document.querySelector(".usernameSuccessOutput");


emailField.addEventListener("keyup", (e) => {
    // console.log("8888888", 8888888);
    const emailVal = e.target.value;
    emailField.classList.remove("is-invalid");
    emailfeedBackArea.style.display = "none";

    if (emailVal.length > 0) {
        fetch("/authentication/validate-email", {
            body: JSON.stringify({ email: emailVal }),
            method: "POST",
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log('data', data);
                if (data.email_error) {
                    emailField.classList.add("is-invalid");
                    emailfeedBackArea.style.display = 'block';
                    emailfeedBackArea.innerHTML = `<p>${data.email_error}</p>`;
                }
            });
    }
});

usernameField.addEventListener("keyup", (e) => {
    // console.log("8888888", 8888888);
    const usernameVal = e.target.value;
    usernameSuccessOutput.style.display = "block";
    usernameSuccessOutput.textContent = ` Checking ${usernameVal}`;

    usernameField.classList.remove("is-invalid");
    usernamefeedbackArea.style.display = 'none';

    if (usernameVal.length > 0) {
        fetch("/authentication/validate-username", {
            body: JSON.stringify({ username: usernameVal }),
            method: "POST",
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log('data', data);
                usernameSuccessOutput.style.display = "none";
                if (data.username_error) {
                    usernameField.classList.add("is-invalid");
                    usernamefeedbackArea.style.display = "block";
                    usernamefeedbackArea.innerHTML = `<p>${data.username_error}</p>`;
                }
            });
    }
});
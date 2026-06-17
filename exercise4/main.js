

    const getRandomColor = function() {
        const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
        const randomPosition = Math.floor(Math.random() * niceColors.length)
        return niceColors[randomPosition]
    }

    const container = document.getElementById("container")

    container.addEventListener("mouseenter", function () {
        container.style.backgroundColor = getRandomColor()
    })

    // cleaning last massage
    const validate = function () {
    const errorsDiv = document.getElementById("errors")
    errorsDiv.innerHTML = ""

    //inputs
    const name = document.getElementById("name").value
    const salary = document.getElementById("salary").value
    const birthday = document.getElementById("birthday").value
    const phone = document.getElementById("phone").value

    const errors = []

    //validations
    if (name.length <= 2) {
        errors.push("Name must be longer than 2 characters")
    }

    if (Number(salary) <= 10000 || Number(salary) >= 16000) {
        errors.push("Salary must be greater than 10,000 and less than 16,000")
    }

    if (birthday === "") {
        errors.push("Birthday is missing")
    }

    if (phone.length !== 10) {
        errors.push("Phone must be 10 digits long")
    }

    if (isNaN(phone)) {
        errors.push("Phone must contain only numbers")
    }

    //creating error message for user
    if (errors.length> 0) {

        for (let error of errors) {
            const errorMessage = document.createElement("div");
            errorMessage.classList.add("error");
            errorMessage.innerHTML = error;
            errorsDiv.appendChild(errorMessage);
        }
    }

    // NO ERROR
    else {
        const container = document.getElementById("container");
        const welcomeMessage = document.getElementById("welcome-message");

        container.style.display = "none";
        welcomeMessage.innerHTML = `Welcome, ${name}!`;
    }
}

const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", validate);
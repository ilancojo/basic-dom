const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

function checkReservation() {
    const checkName = document.getElementById("checkName")
    const value = checkName.value

    const message = document.getElementById("message")

    if (reservations[value] && reservations[value].claimed === false) {
        message.textContent = "Welcome, " + value
    } 
    else if (reservations[value] && reservations[value].claimed === true) {
        message.textContent = "Hmm, someone already claimed this reservation"
    } 
    else {
        message.textContent = "You have no reservation"
    }
}

document.getElementById("checkBtn").addEventListener("click", checkReservation)
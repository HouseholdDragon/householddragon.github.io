document.getElementById("input-form").onsubmit = () => {
    let input = document.getElementById("input-field").value;
    if (input === "BlindPilot") {
        window.location.href = "./kundali.html";
    }
    document.getElementById("input-field").value = "";
    return false;
}
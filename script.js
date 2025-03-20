document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData.entries());

    fetch("YOUR_GOOGLE_APPS_SCRIPT_URL_HERE", {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("responseMessage").innerText = "Thank you for your response!";
        event.target.reset();
    })
    .catch(error => console.error("Error:", error));
});

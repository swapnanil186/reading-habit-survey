document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData.entries());

    fetch("https://script.google.com/macros/s/AKfycbwIbJj6NB-BFmt-PHryOq2KSXAEP8cbm9hzlyb6_RMt_RTWuMbJu6KVFA6zF0dXMdGW7g/exec", {
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

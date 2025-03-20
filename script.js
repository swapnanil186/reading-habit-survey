document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData.entries());

    fetch("https://script.google.com/macros/s/AKfycbzabF8vVz80tyoQzcgZP0KWGWSbeVTKpg8nYFg2ynV50dvi89puAPr5JpXqghs8ecUlMg/exec", {
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

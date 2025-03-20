document.getElementById("questionnaire-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const jsonData = {};

    formData.forEach((value, key) => {
        if (!jsonData[key]) {
            jsonData[key] = value;
        } else {
            if (!Array.isArray(jsonData[key])) {
                jsonData[key] = [jsonData[key]];
            }
            jsonData[key].push(value);
        }
    });

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbwIbJj6NB-BFmt-PHryOq2KSXAEP8cbm9hzlyb6_RMt_RTWuMbJu6KVFA6zF0dXMdGW7g/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jsonData),
        });

        const result = await response.json();
        alert(result.message);
        document.getElementById("questionnaire-form").reset();
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit the form. Please try again.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("questionnaire-form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = {
            gender: getRadioValue("gender"),
            year: getRadioValue("year"),
            stream: getRadioValue("stream"),
            reading_frequency: getRadioValue("reading_frequency"),
            genres: getCheckedValues("genres"),
            primary_reason: getCheckedValues("primary_reason"),
            book_selection: getCheckedValues("book_selection"),
            improves_academics: getRadioValue("improves_academics"),
            reading_influence: getCheckedValues("reading_influence"),
            language_influence: getRadioValue("language_influence"),
            reading_medium: getCheckedValues("reading_medium"),
            own_collection: getRadioValue("own_collection"),
            borrow_books: getRadioValue("borrow_books"),
            importance: getRadioValue("importance"),
            book_discussion: getRadioValue("book_discussion")
        };

        console.log("Submitting Data:", formData); // Debugging

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbwIbJj6NB-BFmt-PHryOq2KSXAEP8cbm9hzlyb6_RMt_RTWuMbJu6KVFA6zF0dXMdGW7g/exec", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (result.status === "success") {
                document.getElementById("responseMessage").innerHTML = "✅ Data submitted successfully!";
                form.reset(); // Clear form after submission
            } else {
                document.getElementById("responseMessage").innerHTML = "❌ Error: " + result.message;
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            document.getElementById("responseMessage").innerHTML = "❌ Submission failed. Try again!";
        }
    });

    // Helper function: Get selected radio button value
    function getRadioValue(name) {
        const selected = document.querySelector(`input[name="${name}"]:checked`);
        return selected ? selected.value : "";
    }

    // Helper function: Get checked values from checkboxes
    function getCheckedValues(name) {
        return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(checkbox => checkbox.value);
    }
});

// (Module 4)

window.addEventListener('DOMContentLoaded', () => {
    let visitorName = prompt("Welcome to my interactive resume! What is your name?", "Guest");

    if (visitorName !== null && visitorName !== "") {
        const greetingBanner = document.getElementById("greeting-banner");
        greetingBanner.innerHTML = `<h3 style="text-align:center; color: teal; margin-bottom: 20px;">Welcome, ${visitorName}! Thanks for viewing my portfolio.</h3>`;
    }
});


// (Module 4.1)

$(document).ready(function () {

    $("#dark-mode-toggle").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("dark-mode");

        if ($("body").hasClass("dark-mode")) {
            $(this).text("☀Light Mode");
        } else {
            $(this).text("Dark Mode");
        }
    });

    $("#skill-search").on("keyup", function() {
        let searchTerm = $(this).val().toLowerCase();

        if (searchTerm !== "") {
            $("#extra-skills").show();
            $("#toggle-skills-btn").hide();
        } else {
            $("#extra-skills").hide();
            $("#toggle-skills-btn").show().text("View More Skills");
        }

        $(".skill-list li").each(function() {
            let skillName = $(this).text().toLowerCase();

            if (skillName.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    $("#toggle-skills-btn").on("click", function () {
        $("#extra-skills").toggle();

        let btnText = $(this).text();
        if (btnText === "View More Skills") {
            $(this).text("View Less Skills");
        } else {
            $(this).text("View More Skills");
        }
    });

    $("#submit-btn").on("click", function () {

        let nameInput = $("#name").val();
        let emailInput = $("#email").val();
        let messageInput = $("#message").val();

        // Basic Validation
        if (nameInput === "" || emailInput === "" || messageInput === "") {

            $("#form-feedback")
                .text("Error: Please fill out all fields before sending.")
                .css("color", "red")
                .show();

        } else {

            alert("Success! Thank you, " + nameInput + ". Your message has been sent.");

            $("#form-feedback").hide();

            $("#name").val("");
            $("#email").val("");
            $("#message").val("");
        }
    });

});
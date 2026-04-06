// Prompt Personalization
document.getElementById("personalizeBtn").onclick = function () {
    let name = prompt("Enter your name:");

    if (name) {
        document.getElementById("welcomeText").innerHTML =
            "Welcome, " + name + "!";
    }
};

// About Me Update
let aboutTexts = [
    "I am an IT student passionate about web development.",
    "I specialize in building interactive web applications.",
    "I have experience with PHP, JavaScript, and databases.",
    "I enjoy solving real-world problems using technology."
];

let index = 0;

document.getElementById("changeAboutBtn").onclick = function () {
    index++;

    if (index >= aboutTexts.length) {
        index = 0; // loop back
    }

    document.getElementById("aboutText").innerHTML = aboutTexts[index];
};

// Form Validation
document.getElementById("contactForm").onsubmit = function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("formFeedback");
    feedback.innerHTML = "";
    feedback.style.color = "";


    if (name === "" || email === "" || message === "") {
        feedback.innerHTML = "All fields are required!";
        feedback.style.color = 'red';  // text red
    } else {
        feedback.innerHTML = "Message sent successfully!";
        feedback.style.color = "green"
    }
};




// jQuery FEATURES

$(document).ready(function () {

    //  Search Filter
    $("#skillSearch").on("keyup", function () {
        let value = $(this).val().toLowerCase();

        $("#skillList li").filter(function () {
            $(this).toggle(
                $(this).text().toLowerCase().includes(value));
        });
    });

    // Dark Mode Toggle 
$("#darkModeBtn").on("click", function () {
        $("body").toggleClass("dark");
        const isDark = $("body").hasClass("dark");
        $(this).text(isDark ? "☀️" : "🌙");
    });

// Dropdown toggle for skills
$(".skill-header").on("click", function () {
    $(this).next(".skill-list").slideToggle();
});

// Projects dropdown toggle
$(".project-header").on("click", function () {
        const list = $(this).next(".project-list");
        list.slideToggle(function () {
            const isVisible = $(this).is(":visible");
            $(".project-header").text(isVisible ? "My Projects ▲" : "My Projects ▼");
        });
    });

});
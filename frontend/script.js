// ------------------ LOGIN ------------------
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (data.success) {
                window.location.href = "home.html";
            } else {
                document.getElementById("message").innerText = data.message;
            }
        });
    }
});


// ------------------ CLUB SELECTION ------------------
function goToRegister(clubName) {
    window.location.href = `register.html?club=${clubName}`;
}


// ------------------ CLUB FORM SUBMISSION ------------------
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const params = new URLSearchParams(window.location.search);
            const club = params.get("club");

            const formData = {
                club,
                name: document.getElementById("name").value,
                roll: document.getElementById("roll").value,
                branch: document.getElementById("branch").value,
                year: document.getElementById("year").value,
                email: document.getElementById("email").value,
                reason: document.getElementById("reason").value
            };

            const response = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            document.getElementById("message").innerText = data.message;
        });
    }
});

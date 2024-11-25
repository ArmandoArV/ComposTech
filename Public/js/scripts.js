document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector("a[href='#inicio-sesion']");
    const signupLink = document.querySelector(".signup-link"); // Link to signup section
    const loginLink = document.querySelector(".login-link"); // Link to login section
    const loginFormButton = document.querySelector("a[href='#dashboard']"); // Login form button
    const signupFormButton = document.querySelector("a[href='#dashboard']"); // Login form button

    const loginSection = document.querySelector("#inicio-sesion"); // Login section
    const signupSection = document.querySelector("#crear-cuenta"); // Signup section
    const dashboardSection = document.querySelector("#dashboard"); // Dashboard section

    // Initially hide all sections except the header
    loginSection.style.display = "none";
    signupSection.style.display = "none";
    dashboardSection.style.display = "none";

    // Show login section when header button is clicked
    loginButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default behavior
        signupSection.style.display = "none"; // Ensure signup is hidden
        dashboardSection.style.display = "none"; // Ensure dashboard is hidden
        loginSection.style.display = "block"; // Show login section
    });

    // Show signup section when "Crear cuenta" link is clicked
    signupLink.addEventListener("click", (e) => {
        e.preventDefault();
        loginSection.style.display = "none";
        dashboardSection.style.display = "none"; // Ensure dashboard is hidden
        signupSection.style.display = "block";
    });

    // Show login section when "Iniciar sesión" link is clicked
    loginLink.addEventListener("click", (e) => {
        e.preventDefault();
        signupSection.style.display = "none";
        dashboardSection.style.display = "none"; 
        loginSection.style.display = "block";
    });

    // Show dashboard section when login form button is clicked
    loginFormButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent form submission
        loginSection.style.display = "none"; // Hide login section
        dashboardSection.style.display = "block"; // Show dashboard section
    });

    signupFormButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent form submission
        signupSection.style.display = "none"; // Hide login section
        dashboardSection.style.display = "block"; // Show dashboard section
    });
});
// Testowe dane logowania
const correctUsername = "Marta";
const correctPassword = "123";

// Obsługa formularza
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;

    if (u === correctUsername && p === correctPassword) {
        alert("Zalogowano pomyślnie (tryb testowy)");
        // Przekierowanie na YouTube po poprawnym loginie
        window.location.href = "https://www.youtube.com/watch?v=lKduL67IulI";
    } else {
        alert("Błędny login lub hasło (tryb testowy)");
    }
});

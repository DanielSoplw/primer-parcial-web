fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => { console.log(data); console.log(data[0]); console.log(data[0].name);
})
.catch(error => console.error(error));

document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            
            if (username === "admin" && password === "1234") {
                window.location.href = "dashboard.html";
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        });
    }
});


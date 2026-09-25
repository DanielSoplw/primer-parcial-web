// Define la URL de la API para un solo elemento todo
const apiUrl = "https://fakestoreapi.com/docs";

// Realiza una solicitud GET utilizando la API fetch
fetch(apiUrl)
  .then((response) => {
    // La función fetch devuelve una promesa.
    // El primer bloque .then() recibe el objeto Response.
    // Necesitamos llamar al método .json() en la respuesta para analizar el cuerpo del texto como JSON.
    return response.json();
  })
  .then((data) => {
    // El segundo bloque .then() recibe los datos JSON analizados.
    console.log("Datos obtenidos exitosamente:");
    console.log(data);
  })
  .catch((error) => {
    // El bloque .catch() se ejecutará si ocurre algún error durante la operación fetch.
    console.error("Error al obtener datos:", error);
  });

document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            //VALIDAR USUARIO
            if (username === "mor_2314" && password === "83r5^_") {
                window.location.href = "dashboard.html";
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        });
    }
});


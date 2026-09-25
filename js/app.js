//Login

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

//Dashboard

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => { console.log(data); console.log(data[0]); console.log(data[0].name);
})
.catch(error => console.error(error));

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Muestra los datos del usuario obtenidos
    userProfileElement.innerHTML = `
      <h3>${data.category}</h3>
      <img class="imagen" src=data.image/>
      <p>${data.title}</p>
      <p>${data.price}</p>
      <button type="submit"> Add </button>
    `;
  })
  .catch((error) => {
    userProfileElement.textContent = "Failed to load user profile.";
    console.error("Error:", error);
  });
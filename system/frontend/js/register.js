const registerBtn = document.getElementById("submit-btn");

registerBtn.addEventListener("click", async function () {
  const name = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value.trim();

  const response = await fetch("/backend/api/users/register.php", {
    method: "POST",

    credentials: "same-origin",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
    }),
  });

  const result = await response.json();

  if (result.success) {
    window.location.href = "/frontend/pages/login.html";
  }
});

const loginBtn = document.getElementById("submit-btn");
const errorBox = document.getElementById("error");

errorBox.textContent = "";

loginBtn.addEventListener("click", async function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const response = await fetch("/backend/api/users/login.php", {
    method: "POST",

    credentials: "same-origin",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const result = await response.json();

  if (result.success) {
    window.location.href = "/frontend/pages/lectures.html";
  } else {
    errorBox.textContent = result.message || "An error occurred.";
  }
});

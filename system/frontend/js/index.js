const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const logoutBtn = document.getElementById("logout");
const message = document.getElementById("message");

// message.textContent = "";

registerBtn.addEventListener("click", () => {
  window.location.href = "/frontend/pages/register.html";
});

loginBtn.addEventListener("click", () => {
  window.location.href = "/frontend/pages/login.html";
});

logoutBtn.addEventListener("click", async function () {
  const response = await fetch("/backend/api/users/logout.php", {
    method: "POST",

    credentials: "same-origin",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(),
  });

  const result = await response.json();

  if (result.success) {
    window.location.href = "/frontend/index.html";
    message.textContent = result.message || "Logout Success.";
  } else {
    message.textContent = result.message || "An error occurred.";
  }
});

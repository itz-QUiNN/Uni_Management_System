const createBtn = document.getElementById("submit-btn");
const errorBox = document.getElementById("error");

createBtn.addEventListener("click", async function () {
  errorBox.textContent = "";

  const module = document.getElementById("module").value.trim();
  const time = document.getElementById("time").value.trim();
  const date = document.getElementById("date").value.trim();

  const response = await fetch("/backend/api/lectures/create_lecture.php", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      module: module,
      time: time,
      date: date,
    }),
  });

  const result = await response.json();

  if (result.success) {
    window.location.href = "/frontend/pages/lectures.html";
  } else {
    errorBox.textContent = result.message || "Unable to create lecture.";
  }
});

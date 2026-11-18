const params = new URLSearchParams(window.location.search);
const lectureId = params.get("id");

const errorBox = document.getElementById("error");
const deleteBtn = document.getElementById("delete-lecture");

// 1. Load lecture details on page load
document.addEventListener("DOMContentLoaded", async function () {
  if (!lectureId) {
    errorBox.textContent = "No lecture ID provided in the URL.";
    return;
  }

  try {
    const response = await fetch(
      `/backend/api/lectures/show_lecture_details.php?id=${lectureId}`,
      {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const result = await response.json();

    if (result.success && result.data) {
      document.getElementById("module").textContent = result.data.module;
      document.getElementById("time").textContent = result.data.time;
      document.getElementById("date").textContent = result.data.date;
    } else {
      errorBox.textContent =
        result.message || "Failed to load lecture details.";
    }
  } catch (error) {
    console.error("Error fetching lecture details:", error);
    errorBox.textContent = "Error loading lecture details.";
  }
});

// 2. Delete lecture on button click
deleteBtn.addEventListener("click", async function () {
  if (!lectureId) return;

  const confirmed = confirm("Are you sure you want to delete this lecture?");
  if (!confirmed) return;

  errorBox.textContent = "";

  try {
    const response = await fetch(
      `/backend/api/lectures/delete_lecture.php?id=${lectureId}`,
      {
        method: "DELETE",
        credentials: "same-origin",
      },
    );

    const result = await response.json();

    if (result.success) {
      window.location.href = "/frontend/pages/lectures.html";
    } else {
      errorBox.textContent = result.message || "Unable to delete lecture.";
    }
  } catch (error) {
    console.error("Error deleting lecture:", error);
    errorBox.textContent = "Error deleting lecture.";
  }
});

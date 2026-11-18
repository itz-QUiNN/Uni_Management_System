const createLecture = document.getElementById("create-lecture");

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("/backend/api/lectures/read_lecture.php", {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (result.success && Array.isArray(result.data)) {
      const lecturesDiv = document.getElementById("lectures");
      lecturesDiv.innerHTML = "";

      const ul = document.createElement("ul");

      for (const lecture of result.data) {
        const li = document.createElement("li");
        const link = document.createElement("a");

        link.textContent = lecture.module;
        console.log(lecture);
        link.href = `/frontend/pages/lecture_details.html?id=${lecture.id}`;

        li.appendChild(link);
        ul.appendChild(li);
      }

      lecturesDiv.appendChild(ul);
    }
  } catch (error) {
    console.error("Error fetching lectures:", error);
  }
});

createLecture.addEventListener("click", function () {
  window.location.href = "/frontend/pages/create_lecture.html";
});

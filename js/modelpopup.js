document.addEventListener("DOMContentLoaded", function () {
  let lastActionDate = localStorage.getItem("popupActionDate");
  let today = new Date().toISOString().split("T")[0];

  // Show popup only if no action was taken today
  if (lastActionDate !== today) {
      showPopup();
  }
});

function showPopup() {
  document.getElementById("custom-overlay").style.display = "block";
  document.getElementById("custom-popup").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closePopup() {
  hidePopups();
  markActionDone();
}

function openDetailsPopup() {
  document.getElementById("custom-popup").style.display = "none";
  document.getElementById("custom-details-popup").style.display = "block";
}

async function submitDetails() {
  const name = document.getElementById("custom-name").value;
  const email = document.getElementById("custom-email").value;
  const phone = document.getElementById("custom-phone").value;

  if (!name || !email || !phone) {
    alert("Please fill in all fields.");
    return;
  }

  const formData = { name, email, phone, message: '' };

  try {
    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    alert(result.message);
    document.getElementById("custom-details-popup").style.display = "none";
  } catch (error) {
    console.error("Error sending email:", error);
    alert("An error occurred. Please try again.");
  }
}


function hidePopups() {
  document.getElementById("custom-overlay").style.display = "none";
  document.getElementById("custom-popup").style.display = "none";
  document.getElementById("custom-details-popup").style.display = "none";
  document.body.style.overflow = "auto";
}

// Function to mark that user took action today
function markActionDone() {
  let today = new Date().toISOString().split("T")[0];
  localStorage.setItem("popupActionDate", today);
}

document.addEventListener("DOMContentLoaded", function () {
  let lastActionDate = localStorage.getItem("popupActionDate");
  let today = new Date().toISOString().split("T")[0];

  // Show popup only if no action was taken today
  if (lastActionDate !== today) {
      showPopup();
  }

  // Attach EmailJS submission handler
  document.getElementById("mainPopupForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload

      emailjs.sendForm("service_3ock698", "template_cfn1ata", this)
          .then(response => {
              alert("Email sent successfully!");
              hidePopups(); // Close popup after submission
              markActionDone(); // Save that action was taken today
          })
          .catch(error => {
              console.error("EmailJS Error:", error);
              alert("Failed to send email. Please try again.");
          });
  });
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

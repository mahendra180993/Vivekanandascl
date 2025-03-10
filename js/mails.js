// Quick Fee Popup Script

function openPopup() {
	document.getElementById("feePopup").style.display = "flex";
}

function FeeclosePopup() {
	document.getElementById("feePopup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("feeForm").addEventListener("submit", function(event) {
			event.preventDefault();

			var pdfUrl = "/images/dummy.pdf"; // Ensure correct path
			
			var link = document.createElement("a");
			link.href = pdfUrl;
			link.download = "Fee_StructureFor_2024-25.pdf";
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			alert("Form submitted successfully! The PDF has been downloaded.");
			
			window.open(pdfUrl, "_blank");

			FeeclosePopup(); // Close popup after submission
	});
});

// Close the popup when clicking outside the popup


// email sending code stert

(function () {
  emailjs.init("L39OLhwvPp9l9mwU1"); // Replace with your actual EmailJS Public Key
})();

function sendEmail(serviceID, templateID, formID) {
  const form = document.getElementById(formID);
  const formData = new FormData(form);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  emailjs.send(serviceID, templateID, data)
    .then(function (response) {
      showPopupMessage("Email sent successfully!", "success");
      form.reset();
      if (formID === "feeForm") {
        downloadPDF(); // Call function to download PDF
        FeeclosePopup(); // Close popup after successful email
      }
    }, function (error) {
      showPopupMessage("Failed to send email. Please try again.", "error");
      console.error("EmailJS Error:", error);
    });

  return false; // Prevent default form submission
}

// Function to show a custom popup message
function showPopupMessage(message, type) {
  let popup = document.getElementById("customMessagePopup");
  let popupText = document.getElementById("popupMessageText");

  popupText.innerHTML = message;
  popup.className = "message-popup " + type; // Add class based on type
  popup.style.display = "block";

  // Hide popup after 3 seconds
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}


//email send code ended
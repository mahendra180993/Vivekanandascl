// Quick Fee Popup Script

const FEE_PDF_PATH = "images/Vivekananda_Fee_Structure_Updated.pdf";

function ensureFeePopupElements() {
  if (!document.getElementById("customMessagePopup")) {
    const messagePopup = document.createElement("div");
    messagePopup.id = "customMessagePopup";
    messagePopup.className = "message-popup";
    messagePopup.innerHTML = '<p id="popupMessageText"></p>';
    document.body.appendChild(messagePopup);
  }

  const feePopup = document.getElementById("feePopup");
  if (feePopup && feePopup.parentElement !== document.body) {
    document.body.appendChild(feePopup);
  }
}

function openFeePopup(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  ensureFeePopupElements();

  const popup = document.getElementById("feePopup");
  if (!popup) return;

  popup.style.display = "flex";
  document.body.style.overflow = "hidden";
  popup.dataset.justOpened = "true";

  setTimeout(function () {
    delete popup.dataset.justOpened;
  }, 350);
}

// Keep legacy name used in HTML onclick handlers
function openPopup(event) {
  openFeePopup(event);
}

function FeeclosePopup() {
  const popup = document.getElementById("feePopup");
  if (popup) {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function downloadPDF() {
  const link = document.createElement("a");
  link.href = FEE_PDF_PATH;
  link.download = "Fee_Structure_2024-25.pdf";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function initFeePopup() {
  ensureFeePopupElements();

  document.querySelectorAll(".quick-access-btn").forEach(function (button) {
    button.addEventListener("click", openFeePopup);
  });

  const feePopup = document.getElementById("feePopup");
  if (!feePopup) return;

  feePopup.addEventListener("click", function (event) {
    if (event.target === feePopup && !feePopup.dataset.justOpened) {
      FeeclosePopup();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && feePopup.style.display === "flex") {
      FeeclosePopup();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFeePopup);
} else {
  initFeePopup();
}

if (typeof emailjs !== "undefined") {
  emailjs.init("L39OLhwvPp9l9mwU1");
}

function sendEmail(serviceID, templateID, formID) {
  const form = document.getElementById(formID);
  if (!form) return false;

  if (typeof emailjs === "undefined") {
    showPopupMessage("Email service is not available. Please try again later.", "error");
    return false;
  }

  const formData = new FormData(form);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  emailjs.send(serviceID, templateID, data)
    .then(function () {
      showPopupMessage("Email sent successfully!", "success");
      form.reset();
      if (formID === "feeForm") {
        downloadPDF();
        FeeclosePopup();
      }
    }, function (error) {
      showPopupMessage("Failed to send email. Please try again.", "error");
      console.error("EmailJS Error:", error);
    });

  return false;
}

function showPopupMessage(message, type) {
  ensureFeePopupElements();

  const popup = document.getElementById("customMessagePopup");
  const popupText = document.getElementById("popupMessageText");
  if (!popup || !popupText) return;

  popupText.innerHTML = message;
  popup.className = "message-popup " + type;
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}

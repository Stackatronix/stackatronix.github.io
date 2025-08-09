var url = "https://wa.me/918281772071?text=";

function send() {
  var msg = url + "Hi, Stackatronix";
  window.open(msg, "_blank").focus();
}

function submitform(event,form,status) {
  event.preventDefault();

  // 2. PASTE YOUR REAL WEB APP URL HERE
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzXGpPSooyQCUbzjAA3cFY2PnPNcAS8L7YAjhcQYs0iZMuMC_E917Km31GU2fhxdfh4/exec"; // ❗IMPORTANT

  const formData = new FormData(form);

  status.textContent = "Submitting...";

  fetch(scriptURL, { method: "POST", body: formData })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === "success") {
        status.textContent = "Success! Your message has been sent.";
        status.style.color = "green";
        form.reset(); 
      } else {
        throw new Error(data.error || "Unknown error occurred.");
      }
    })
    .catch((error) => {
      status.textContent = "Error: Something went wrong. Please try again.";
      status.style.color = "red";
    });
  setTimeout(() => {
    status.textContent = "";
  }, 10000);
}

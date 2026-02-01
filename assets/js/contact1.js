// ===============================
// CONFIGURACIÓN EMAILJS
// ===============================
const EMAILJS_PUBLIC_KEY = "VsVlz1O93lIlWTE68";
const EMAILJS_SERVICE_ID = "service_ky6fnjt";
const EMAILJS_TEMPLATE_ID = "template_3vdjwjd";

emailjs.init(EMAILJS_PUBLIC_KEY);

// ===============================
// FORMULARIO
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("status");
  const btn = document.getElementById("btnSend");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    statusEl.textContent = "";
    btn.disabled = true;
    btn.textContent = "Sending...";

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form
      );

      statusEl.textContent = "✅ Message Sent.";
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      statusEl.textContent =
        "❌ Error sending the message. Please try again.";
    } finally {
      btn.disabled = false;
      btn.textContent = "Send";
    }
  });
});

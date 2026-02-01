// ===============================
// CONFIGURACIÓN EMAILJS
// ===============================
const EMAILJS_PUBLIC_KEY = "TU_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "TU_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "TU_TEMPLATE_ID";

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
    btn.textContent = "Enviando...";

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form
      );

      statusEl.textContent = "✅ Mensaje enviado correctamente.";
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      statusEl.textContent =
        "❌ Error al enviar el mensaje. Intenta de nuevo.";
    } finally {
      btn.disabled = false;
      btn.textContent = "Enviar";
    }
  });
});

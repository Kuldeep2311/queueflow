/* ======================================================
   QUEUEFLOW AUTH + NAVIGATION + CHATBOT (GITHUB PAGES)
   ====================================================== */

/* ---------------- AUTH STATE ---------------- */
const isLoggedIn = localStorage.getItem("loggedIn") === "true";

/* ---------------- ELEMENT REFERENCES ---------------- */
const authModal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const consultBtn = document.getElementById("consultBtn");

/* ---------------- LOGIN / SIGNUP BUTTON ---------------- */
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    authModal.style.display = "flex";
  });
}

/* ---------------- BOOK CONSULTATION ---------------- */
if (consultBtn) {
  consultBtn.addEventListener("click", () => {
    const logged = localStorage.getItem("loggedIn") === "true";
    if (!logged) {
      authModal.style.display = "flex";
    } else {
      window.location.href = "./dashboard.html";
    }
  });
}

/* ---------------- LOGIN FUNCTION ---------------- */
function login() {
  localStorage.setItem("loggedIn", "true");
  window.location.href = "./dashboard.html";
}

/* ---------------- LOGOUT FUNCTION (DASHBOARD) ---------------- */
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "./index.html";
}

/* ---------------- DASHBOARD CONSULTATION ---------------- */
function bookConsultation() {
  alert("✅ Consultation booked! Our team will contact you within 24 hours.");
}

/* ======================================================
   CHATBOT LOGIC
   ====================================================== */

const chatLauncher = document.getElementById("chatLauncher");
const chatbot = document.getElementById("chatbot");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

/* Toggle chatbot */
if (chatLauncher && chatbot) {
  chatLauncher.addEventListener("click", () => {
    chatbot.style.display =
      chatbot.style.display === "block" ? "none" : "block";
  });
}

/* Send chat message */
if (chatInput && chatMessages) {
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && chatInput.value.trim()) {
      const userText = chatInput.value.trim();

      chatMessages.innerHTML += `
        <div style="text-align:right; margin-bottom:6px;">
          <strong>You:</strong> ${userText}
        </div>
      `;

      chatInput.value = "";

      let reply =
        "Thanks for reaching out! Our team will get back to you shortly.";

      const lower = userText.toLowerCase();
      if (lower.includes("service")) {
        reply =
          "We provide Web Development, Backend Systems, Cloud & Automation services.";
      } else if (lower.includes("price") || lower.includes("cost")) {
        reply =
          "Pricing depends on scope. Book a free consultation to discuss details.";
      } else if (lower.includes("contact")) {
        reply = "You can contact us at contact@queueflow.in";
      }

      setTimeout(() => {
        chatMessages.innerHTML += `
          <div style="color:#38bdf8; margin-bottom:8px;">
            <strong>Queueflow AI:</strong> ${reply}
          </div>
        `;
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 600);
    }
  });
}

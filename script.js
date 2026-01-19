/* ---------------- AUTH STATE ---------------- */
let loggedIn = localStorage.getItem("loggedIn") === "true";

/* ---------------- INDEX PAGE LOGIC ---------------- */
const modal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const consultBtn = document.getElementById("consultBtn");

if (loginBtn) {
  loginBtn.onclick = () => modal.style.display = "flex";
}

if (consultBtn) {
  consultBtn.onclick = () => {
    if (!loggedIn) {
      modal.style.display = "flex";
    } else {
      window.location.href = "dashboard.html";
    }
  };
}

function login() {
  loggedIn = true;
  localStorage.setItem("loggedIn", "true");
  modal.style.display = "none";
  window.location.href = "dashboard.html";
}

/* ---------------- DASHBOARD LOGIC ---------------- */
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

function bookConsultation() {
  alert("✅ Consultation booked! Our team will contact you shortly.");
}

/* ---------------- CHATBOT ---------------- */
const launcher = document.getElementById("chatLauncher");
const chatbot = document.getElementById("chatbot");
const input = document.getElementById("chatInput");
const messages = document.getElementById("chatMessages");

if (launcher) {
  launcher.onclick = () => {
    chatbot.style.display =
      chatbot.style.display === "block" ? "none" : "block";
  };
}

if (input) {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && input.value.trim()) {
      const userMsg = input.value;
      messages.innerHTML += `<div>You: ${userMsg}</div>`;
      input.value = "";

      setTimeout(() => {
        messages.innerHTML += `
          <div style="color:#38bdf8">
            Queueflow AI: We help with Web, Backend, Cloud & Automation services.
          </div>`;
        messages.scrollTop = messages.scrollHeight;
      }, 600);
    }
  });
}

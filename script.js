let loggedIn = false;

const modal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const consultBtn = document.getElementById("consultBtn");

loginBtn.onclick = () => modal.style.display = "flex";

consultBtn.onclick = () => {
  if (!loggedIn) {
    modal.style.display = "flex";
  } else {
    alert("Thanks! Our team will contact you soon.");
  }
};

function login() {
  loggedIn = true;
  modal.style.display = "none";
  alert("Login successful (demo)");
}

/* CHATBOT */
const launcher = document.getElementById("chatLauncher");
const chatbot = document.getElementById("chatbot");
const input = document.getElementById("chatInput");
const messages = document.getElementById("chatMessages");

launcher.onclick = () => {
  chatbot.style.display = chatbot.style.display === "block" ? "none" : "block";
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value.trim()) {
    const userMsg = input.value;
    messages.innerHTML += `<div>You: ${userMsg}</div>`;
    input.value = "";

    setTimeout(() => {
      messages.innerHTML += `<div style="color:#38bdf8">Queueflow AI: We offer Web, Backend, Cloud & Automation services.</div>`;
      messages.scrollTop = messages.scrollHeight;
    }, 600);
  }
});

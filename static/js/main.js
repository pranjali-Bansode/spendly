// main.js — students will add JavaScript here as features are built
const openBtn = document.getElementById("openModal");
const modal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeModal");
const overlay = document.getElementById("modalOverlay");
const iframe = document.getElementById("videoFrame");

if (openBtn) {
    openBtn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "block";
    });
}

function closeModal() {
    modal.style.display = "none";

    // Stop video by resetting src
    iframe.src = iframe.src;
}

if (closeBtn) closeBtn.addEventListener("click", closeModal);
if (overlay) overlay.addEventListener("click", closeModal);
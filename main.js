const checklistModal = document.getElementById("checklistModal");
const openChecklist = document.getElementById("openChecklist");
const closeChecklist = document.getElementById("closeChecklist");
const checklistOverlay = document.getElementById("checklistOverlay");

openChecklist.addEventListener("click", () => {
    checklistModal.classList.remove("hidden");
    checklistModal.classList.add("flex");
});

function closeChecklistModal() {
    checklistModal.classList.add("hidden");
    checklistModal.classList.remove("flex");
}

closeChecklist.addEventListener("click", closeChecklistModal);
checklistOverlay.addEventListener("click", closeChecklistModal);
// CHECKLIST POPUP

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


// ENQUIRY POPUP

const enquiryModal = document.getElementById("enquiryModal");
const enquiryButtons = document.querySelectorAll("[data-open-enquiry]");
const closeEnquiry = document.getElementById("closeEnquiry");
const enquiryOverlay = document.getElementById("enquiryOverlay");

enquiryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        enquiryModal.classList.remove("hidden");
        enquiryModal.classList.add("flex");
    });
});

function closeEnquiryModal() {
    enquiryModal.classList.add("hidden");
    enquiryModal.classList.remove("flex");
}

closeEnquiry.addEventListener("click", closeEnquiryModal);
enquiryOverlay.addEventListener("click", closeEnquiryModal);


// ESCAPE KEY

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeChecklistModal();
        closeEnquiryModal();
    }
});


// MOBILE NAVIGATION

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuButton.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");

    mobileMenu.classList.toggle("hidden");

    mobileMenuButton.textContent = isOpen ? "☰" : "×";

    mobileMenuButton.setAttribute(
        "aria-expanded",
        String(!isOpen)
    );

    mobileMenuButton.setAttribute(
        "aria-label",
        isOpen ? "Open navigation menu" : "Close navigation menu"
    );
});


// CLOSE MOBILE MENU WHEN A LINK IS CLICKED

const mobileMenuLinks = mobileMenu.querySelectorAll("a");

mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");

        mobileMenuButton.textContent = "☰";

        mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileMenuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    });
});
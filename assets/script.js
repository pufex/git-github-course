// Some javascript changes to the file
const modalContainer = document.querySelector(".contact-modal")
const modalXIcon = document.querySelector(".contact-modal__close-icon");
const contactForm = document.querySelector("#contact-form-id")
const modalCloseBtn = document.querySelector(".contact-modal__close-btn")

modalXIcon.addEventListener("click", () => {
    if(!modalContainer.classList.contains("hidden")){
        modalContainer.classList.add("hidden")
    }
})

modalCloseBtn.addEventListener("click", () => {
    if(!modalContainer.classList.contains("hidden")){
        modalContainer.classList.add("hidden")
    }
})

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(modalContainer.classList.contains("hidden")){
        modalContainer.classList.remove("hidden")
    }
})


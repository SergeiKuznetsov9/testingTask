"use strict";
const documentHandler = (event) => {
    const target = event.target;
    const popup = document.querySelector(".popup");
    if (popup && target === popup) {
        popup.classList.remove("display");
        document.removeEventListener("click", documentHandler);
    }
};
const mainButton = document.querySelector(".mainButton");
mainButton === null || mainButton === void 0 ? void 0 : mainButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const popup = document.querySelector(".popup");
    if (popup) {
        popup.classList.add("display");
        document.addEventListener("click", documentHandler);
    }
});
const closePopup = () => {
    const popup = document.querySelector(".popup");
    popup === null || popup === void 0 ? void 0 : popup.classList.remove("display");
};
const closeButton = document.querySelector(".popup-closeButton");
closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", () => {
    closePopup();
});
const form = document.querySelector(".popup-form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const contact = formData.get("contact");
    const password = formData.get("password");
    const isRemember = formData.get("isRemember") === "on" ? true : false;
    console.log({
        contact,
        password,
        isRemember,
    });
    closePopup();
});
const backUpButton = document.querySelector(".popup-textButton");
backUpButton === null || backUpButton === void 0 ? void 0 : backUpButton.addEventListener("click", () => console.log("Перейти в форму для восстановления акаунта"));
const regButton = document.querySelector(".popup-regButton");
regButton === null || regButton === void 0 ? void 0 : regButton.addEventListener("click", () => console.log("Перейти в форму для регистрации акаунта"));

const documentHandler = (event: MouseEvent) => {
  const target = event.target as Node;
  const popup = document.querySelector(".popup");
  if (popup && target === popup) {
    popup.classList.remove("display");
    document.removeEventListener("click", documentHandler);
  }
};

const mainButton = document.querySelector(".mainButton");

mainButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  const popup = document.querySelector(".popup");

  if (popup) {
    popup.classList.add("display");

    document.addEventListener("click", documentHandler);
  }
});

const closePopup = () => {
  const popup = document.querySelector(".popup");
  popup?.classList.remove("display");
};

const closeButton = document.querySelector(".popup-closeButton");
closeButton?.addEventListener("click", () => {
  closePopup();
});

const form: HTMLFormElement | null = document.querySelector(".popup-form");
form?.addEventListener("submit", (event) => {
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
backUpButton?.addEventListener("click", () =>
  console.log("Перейти в форму для восстановления акаунта")
);

const regButton = document.querySelector(".popup-regButton");
regButton?.addEventListener("click", () =>
  console.log("Перейти в форму для регистрации акаунта")
);

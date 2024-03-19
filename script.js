const openPopup = document.querySelector(".popup-button");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".close-popup");

let openClosePopup = false;

openPopup.addEventListener("click", (e) => {
    // e.preventDefault();
    popup.style.display = "initial";
});
closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

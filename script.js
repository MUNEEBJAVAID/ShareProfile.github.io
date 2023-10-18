const shareProfileBtn = document.querySelector(".btnShare");
const modal = document.querySelector(".modal");
const overLay = document.querySelector(".overlay");

const classModal = () => {
    modal.classList.add("active");
    overLay.classList.add("overlayActive");

}

shareProfileBtn.addEventListener('click', classModal);

const removeModal = () => {
    modal.classList.remove("active");
    overLay.classList.remove("overlayActive");
}

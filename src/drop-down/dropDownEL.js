export default function () {
  const DBDrop = document.querySelectorAll(".DB-drop");

  DBDrop.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(btn.parentElement.lastElementChild);
      btn.parentElement.lastElementChild.classList.toggle("DB-hide");
    });
  });
}

const burguerMenu = document.querySelector("#burguerMenu");
const asideMenu = document.querySelector("#aside-menu");
const body = document.querySelector("body");
const imgContainer = document.querySelector("#img-container");
const editContainer = document.querySelector('#edit-container')

burguerMenu.addEventListener("click", () => {
  burguerMenu.classList.toggle("rotate");
  asideMenu.classList.toggle("active");

  if (asideMenu.classList.contains("active")) {
    body.style.overflow = "hidden";
    imgContainer.style.opacity = "0";
    editContainer.style.opacity = '0'
  } else {
    imgContainer.style.opacity = "1";
    editContainer.style.opacity = '1'
  }
});

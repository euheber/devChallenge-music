const burguerMenu = document.querySelector("#burguerMenu");
const asideMenu = document.querySelector("#aside-menu");

burguerMenu.addEventListener("click", () => {
    burguerMenu.classList.toggle('rotate')
  asideMenu.classList.toggle('active')
  
});

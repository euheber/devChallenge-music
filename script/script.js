const burguerMenu = document.querySelector("#burguerMenu");
const asideMenu = document.querySelector("#aside-menu");
const body = document.querySelector('body')
const profileSection = document.querySelector("#profile-section");

burguerMenu.addEventListener("click", () => {
  burguerMenu.classList.toggle("rotate");
  asideMenu.classList.toggle("active");

  if(asideMenu.classList.contains('active')){
    body.style.overflow = "hidden"
  }

  
});

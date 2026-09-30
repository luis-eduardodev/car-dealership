const buttonNav = document.querySelector(".navtop button");
const navList = document.querySelector(".navtop ul");

buttonNav.addEventListener("click", () => {
  navList.classList.toggle("open");
});

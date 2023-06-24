const barmenuEL = document.querySelector(".bar-menu");
let menuOpen = false;

barmenuEL.addEventListener("click", () => {
  if (!menuOpen) {
    barmenuEL.classList.add("open");
    menuOpen = true;
  } else {
    barmenuEL.classList.remove("open");
    menuOpen = false;
  }
});

// $(function () {
//   $("li").click(function (e) {
//     e.preventDefault();
//     $("li").removeClass("active");
//     $(this).addClass("active");
//   });
// });

const panelsEL = document.querySelectorAll("li");

panelsEL.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActive();
    panel.classList.add("active");
  });
});

function removeActive() {
  panelsEL.forEach((panelR) => {
    panelR.classList.remove("active");
  });
}

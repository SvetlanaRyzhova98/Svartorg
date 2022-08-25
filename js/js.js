// (function () {
//     const decor = document.querySelector(".hiro__decor");
//     const header = document.querySelector(".header");
//     window.onscroll = () => {
//       if (window.pageYOffset > 0) {
//         // header.style.background = 'linear-gradient(to top, black, var(--bg-color))';
//         header.style.background = 'rgb(0 0 0 / 99%)';
//       } else {
//         header.style.background = ' var(--bg-color)';
//       }
//     };
//   })();
(function () {
  const acsess = document.querySelector(".category__acces");
  const instrumental = document.querySelector(".category__instrum ");
  const instrumentalCard = document.querySelector(".instrumental");
  const acsessCard = document.querySelector(".acsess");
  acsess.addEventListener("click", () => {
    acsessCard.classList.remove("displaynone");
    instrumentalCard.classList.add("displaynone");
  });
  instrumental.addEventListener("click", () => {
    instrumentalCard.classList.remove("displaynone");
    acsessCard.classList.add("displaynone");
  });
})();

(function () {
  if(document.querySelector(".map-click")){
  const map = document.getElementById("map");
  let click = document.querySelector('.map-click');
  click.addEventListener("click", () => {
  map.scrollIntoView({ behavior: "smooth" });

  });}
})();

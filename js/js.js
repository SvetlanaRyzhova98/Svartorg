(function () {
    const decor = document.querySelector(".hiro__decor");
    const header = document.querySelector(".header");
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        header.style.backgroundColor = '#ff9800';
      } else {
        header.style.backgroundColor = '#ff9800ba';
      }
    };
  })();
  (function () {
    const acsess = document.querySelector(".main__link-two");
    const instrumental = document.querySelector(".main__link-one ");
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
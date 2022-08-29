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
    const artclick = document.querySelector(".articles");
    artclick.addEventListener("click", () => {
      window.open("/Svartorg/article.html")
    
      });  
    })();


    (function () {
        let select = document.querySelector(".location-select");
        let locCity = document.querySelector(".location-city");
        const arrow = document.querySelector(".fa-arrow-circle-down");
        select.addEventListener("click", () => {
            locCity.classList.toggle("visible");
            arrow.classList.toggle("rotate180")
        })
    })();
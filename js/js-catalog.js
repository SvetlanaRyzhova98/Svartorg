(function () {
    let card_items = document.querySelectorAll(".card-item");
    Array.from(card_items).forEach((card_item) => {
        card_item.addEventListener("click", () => {
            card_item.classList.toggle("card-item-hover")
        })

    })
 

  })();
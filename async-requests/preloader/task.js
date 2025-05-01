const loader = document.getElementById("loader-wrapper");
if (window.localStorage.getItem("valutesCache")) {
  fillValutesList(JSON.parse(window.localStorage.getItem("valutesCache")));
}

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.addEventListener("readystatechange", function (e) {
   if (this.readyState === this.DONE && this.status === 200) {
    const valutesData = JSON.parse(e.currentTarget.responseText).response.Valute;
    loader.classList.remove("loader-wrapper_active");
    window.localStorage.setItem("valutesCache", JSON.stringify(valutesData));
    fillValutesList(valutesData);
   }
});
xhr.send();

function fillValutesList(valutesData) {
  const items = document.getElementById("items");
  let itemsContent = "";
  for (const valuteData of Object.values(valutesData)) {
    itemsContent += `
      <div class="item">
        <div class="item__code">${valuteData.CharCode}</div>
        <div class="item__value">${valuteData.Value}</div>
        <div class="item__currency">руб.</div>
      </div>
    `;
  }

  items.innerHTML = itemsContent;
}
const loader = document.getElementById("loader");
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.addEventListener("readystatechange", function () {
   if (this.readyState === this.DONE && this.status === 200) {
    loader.classList.remove("loader_active");
    const valutesData = JSON.parse(this.responseText);
    fillValutesList(valutesData);
   }
});
xhr.send();

function fillValutesList(valutesData) {
  const items = document.getElementById("items");
  let itemsContent = "";
  for (const valuteData of Object.values(valutesData.response.Valute)) {
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
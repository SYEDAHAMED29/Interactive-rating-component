const button = document.getElementById("btn");
const ratingCard = document.getElementById("rating-card");
const thanksCard = document.getElementById("thanks-card");
const ratingNum = document.querySelectorAll(".rating-num");
const ratingCount = document.getElementById("rating-count");

button.addEventListener("click", () => {
   ratingCard.style.display = "none";
   thanksCard.style.display = "block";
});

ratingNum.forEach((num) => {
   num.addEventListener("click", (event) => {
      console.log(event.target.value);
      let countNum = event.target.value;
      ratingCount.textContent = `You selected ${countNum} out of 5`;
   });
});

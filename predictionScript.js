const form = document.getElementById("my-form");
const coinSelect = document.getElementById("coin-select");
const currencySelect = document.getElementById("currency-select");
const image = document.getElementById("image");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const crypto = coinSelect.value;
  const currency = currencySelect.value;
  const data = {
    crypto: crypto,
    currency: currency,
  };

  fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.blob())
    .then((blob) => {
      const objectURL = URL.createObjectURL(blob);
      image.src = objectURL;
    })
    .catch((error) => console.error(error));
});

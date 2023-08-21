async function customFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const randomFact = document.querySelector(".fact");

async function getRandomFact() {
  const fact = await customFetch(
    "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
  );

  return fact.text;
}
async function setRandomFact() {
  randomFact.textContent = "Loading...";
  randomFact.textContent = await getRandomFact();
}
setRandomFact();
const newFact = document.querySelector(".btn");

newFact.addEventListener("click", async () => {
  setRandomFact();
});

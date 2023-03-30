const form = document.getElementById("my-form");
const investTerm = document.getElementById("invest");
const termYears = document.getElementById("term");
const riskType = document.getElementById("risk");
const budgetMoney = document.getElementById("budget");
const goals = document.getElementById("goal");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const invest = investTerm.value;
  const term = termYears.value;
  const risk = riskType.value;
  const budget = budgetMoney.value;
  const goal = goals.value;
  const data = {
    invest: invest,
    term: term,
    risk: risk,
    goal: goal,
    budget: budget,
  };

  fetch("http://127.0.0.1:8082/survey", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .then((data) => {
      const responseEl = document.getElementById("response");
      responseEl.textContent = data;
    })
    .catch((error) => console.error(error));
});

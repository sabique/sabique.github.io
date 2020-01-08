function calculateExperience() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  return currentMonth === 0
    ? `${currentYear - 2016} years`
    : `${currentYear - 2016}.${currentMonth - 1} years`;
}

function renderExperience() {
  const exp = document.querySelector("strong.experience");
  exp.textContent = calculateExperience();
}

renderExperience();

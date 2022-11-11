export const HomeCard = (() => {
  const homeCard = document.createElement("div");
  homeCard.classList.add("home_card");

  const title = document.createElement("h2");
  title.textContent = "Welcome to Restaurant!";
  homeCard.appendChild(title);

  const description = document.createElement("p");
  description.textContent =
    "Our restaurant is famous for its excellent cuisine, beautiful interiors and first-class service.";
  homeCard.appendChild(description);

  return homeCard;
})();

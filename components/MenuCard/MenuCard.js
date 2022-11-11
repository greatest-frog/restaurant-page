import { Meal } from "../Meal/Meal";

const mealsMoc = [
  {
    name: "Shrimps",
    image: "./images/shrimps.jpg",
    description: "Tiger shrimps with soy sauce",
  },
  {
    name: "Steak",
    image: "./images/steak.jpg",
    description: "Excellent steaks of any kind of roasting",
  },
  {
    name: "Pasta",
    image: "./images/pasta.jpg",
    description: "Pasta from the best Italian chefs",
  },
  {
    name: "Salad",
    image: "./images/salad.jpg",
    description: "Olive oil salad with Parma cheese",
  },
];

export const MenuCard = (() => {
  const menuCard = document.createElement("div");
  menuCard.classList.add("menu_card");

  const title = document.createElement("h2");
  title.textContent = "Menu";
  menuCard.appendChild(title);

  const meals = document.createElement("div");
  meals.classList.add("meals");
  mealsMoc.forEach((meal) => meals.appendChild(Meal(meal)));
  menuCard.appendChild(meals);

  return menuCard;
})();

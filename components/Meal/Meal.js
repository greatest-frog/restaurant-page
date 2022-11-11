export const Meal = (meal) => {
  const mealDiv = document.createElement("div");
  mealDiv.classList.add("meal");

  const image = document.createElement("img");
  image.classList.add("meal_image");
  image.src = meal.image;
  image.alt = meal.name;
  mealDiv.appendChild(image);

  const title = document.createElement("h3");
  title.textContent = meal.name;
  mealDiv.appendChild(title);

  const description = document.createElement("p");
  description.textContent = meal.description;
  mealDiv.append(description);

  return mealDiv;
};

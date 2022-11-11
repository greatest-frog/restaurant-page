export const Category = (el) => {
  const category = document.createElement("li");
  category.classList.add("category");
  category.classList.add(el.toLowerCase());
  category.textContent = el;

  return category;
};

import { Category } from "../Category/Category";

export const Categories = (() => {
  const categories = document.createElement("ul");
  categories.classList.add("categories");

  ["Home", "Menu", "Contacts"].forEach((el) => {
    categories.appendChild(Category(el));
  });

  return categories;
})();

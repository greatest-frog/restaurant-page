import { ContactsCard } from "../ContactsCard/ContactsCard";
import { HomeCard } from "../HomeCard/HomeCard";
import { MenuCard } from "../MenuCard/MenuCard";

export const Cards = () => {
  const cards = document.createElement("div");
  cards.classList.add("card");

  let activeCard = 0;
  const categories = [
    document.querySelector(".home"),
    document.querySelector(".menu"),
    document.querySelector(".contacts"),
  ];
  const categoryCards = [HomeCard, MenuCard, ContactsCard];

  const changeCategory = (index) => {
    activeCard = index;
    cards.innerHTML = null;
    cards.appendChild(categoryCards[index]);
  };

  categories[activeCard].classList.add("active_category");
  changeCategory(activeCard);

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    category.addEventListener("click", (e) => {
      document
        .querySelector(".active_category")
        ?.classList.remove("active_category");
      e.target.classList.add("active_category");
      if (i != activeCard) {
        changeCategory(i);
      }
    });
  }

  return cards;
};

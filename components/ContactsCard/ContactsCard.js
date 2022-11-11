export const ContactsCard = (() => {
  const contactsCard = document.createElement("div");

  const title = document.createElement("h2");
  title.textContent = "Contacts";
  contactsCard.appendChild(title);

  const phone = document.createElement("p");
  phone.textContent = "Phone: +1 206 555 0100";
  contactsCard.appendChild(phone);

  const email = document.createElement("p");
  email.textContent = "Email: restaurant@example.com";
  contactsCard.appendChild(email);

  return contactsCard;
})();

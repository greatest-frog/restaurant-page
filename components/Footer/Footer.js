export const Footer = (() => {
  const footer = document.createElement("footer");

  const info = document.createElement("h6");
  info.textContent = "Copyright © Maxim Popov 2022";
  footer.appendChild(info);

  return footer;
})();

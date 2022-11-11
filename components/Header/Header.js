export const Header = (() => {
  const header = document.createElement("header");

  const h1 = document.createElement("h1");
  h1.textContent = "Restaurant";
  header.appendChild(h1);

  const info = document.createElement("div");
  info.classList.add("info");

  const logoLink = document.createElement("a");
  logoLink.classList.add("github");
  const githubImage = document.createElement("img");
  githubImage.src = "./GitHub-Mark-Light-32px.png";
  githubImage.alt = "Github logo";
  logoLink.appendChild(githubImage);
  logoLink.href = "https://github.com/greatest-frog";
  info.appendChild(logoLink);

  const projectLink = document.createElement("a");
  projectLink.href = "https://github.com/greatest-frog/restaurant-page";
  projectLink.textContent = "Project page";
  info.appendChild(projectLink);

  header.appendChild(info);
  return header;
})();

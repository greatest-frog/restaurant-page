export const Header = (() => {
  const header = document.createElement("header");

  const name = document.createElement("h1");
  name.textContent = "Restaurant";
  header.appendChild(name);

  const info = document.createElement("div");
  info.classList.add("info");

  const logoLink = document.createElement("a");
  logoLink.classList.add("github");
  const githubImage = document.createElement("img");
  githubImage.src = "./images/GitHub-Mark-Light-32px.png";
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

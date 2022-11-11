import { Header } from "../components/Header/Header";
import { Categories } from "../components/Categories/Categories";
import { Cards } from "../components/Cards/Cards";
import { Footer } from "../components/Footer/Footer";

const contentRoot = document.getElementById("content");

contentRoot.appendChild(Header);

contentRoot.appendChild(Categories);

const mainWrapper = document.createElement("div");
mainWrapper.classList.add("main-wrapper");
mainWrapper.appendChild(Cards());
contentRoot.appendChild(mainWrapper);

contentRoot.append(Footer);

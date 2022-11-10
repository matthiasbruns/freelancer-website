import "reset-css";
import "@fontsource/anton";
import "./styles.scss";

const heroWrapper = document.querySelector(".hero-wrapper");
const heroElement = document.querySelector(".hero");

function hero() {
  const elementTop = heroWrapper.getBoundingClientRect().top;
  heroWrapper.classList.add("animate");

  if (elementTop < 0) {
    heroElement.classList.add("active");
  } else {
    heroElement.classList.remove("active");
  }
}

window.addEventListener("scroll", hero);

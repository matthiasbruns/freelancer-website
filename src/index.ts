import "reset-css";
import "@fontsource/anton";
import "./styles.scss";

function hero() {
  const heroWrapper = document.querySelector(".hero-wrapper");
  const hero = document.querySelector(".hero");
  const elementTop = heroWrapper.getBoundingClientRect().top;

  if (elementTop < 0) {
    hero.classList.add("active");
  } else {
    hero.classList.remove("active");
  }
}

window.addEventListener("scroll", hero);

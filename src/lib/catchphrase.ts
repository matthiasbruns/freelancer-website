export default function CatchPhrase() {
  //const heroWrapper = document.querySelector(".catchphrase-wrapper");
  //const catchphraseElement = document.querySelector(".catchphrase") as HTMLElement;

  function catchphrase() {
    console.log(this.scrollY);
    //catchphraseElement.style.transform = `translateY(${-this.scrollY * 0.5}px)`;
  }

  window.addEventListener("scroll", catchphrase);
}

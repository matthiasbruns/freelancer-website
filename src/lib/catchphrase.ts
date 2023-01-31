export default function CatchPhrase() {
  const catchphraseWrapper = document.querySelector(".catchphrase-wrapper");
  const catchphraseElement = document.querySelector(".catchphrase") as HTMLElement;

  function catchphrase() {
    const elementTop = catchphraseWrapper.getBoundingClientRect().top;
    console.log(elementTop);

    catchphraseElement.style.pointerEvents = "none";
    if(elementTop < 0) {
      catchphraseElement.style.pointerEvents = "auto";
    }

  }

  window.addEventListener("scroll", catchphrase);
  catchphraseElement.style.pointerEvents = "none";
}

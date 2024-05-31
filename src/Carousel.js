export class Carousel {
  constructor(
    images = [
      "https://via.placeholder.com/600x400?text=Image+1",
      "https://via.placeholder.com/600x400?text=Image+2",
      "https://via.placeholder.com/600x400?text=Image+3",
      "https://via.placeholder.com/600x400?text=Image+4",
      "https://via.placeholder.com/600x400?text=Image+5",
    ]
  ) {
    this.currentIndex = 0;
    this.images = images;
    this.carouselElement = this.#renderComponent();
    this.#addEventListeners();
    return this.carouselElement;
  }

  #addEventListeners = () => {
    const nextBtn = this.carouselElement.querySelector(".next-slide");
    const prevBtn = this.carouselElement.querySelector(".prev-slide");
    const dotDivs = this.carouselElement.querySelectorAll(".dot");

    // dot click
    dotDivs.forEach((dotDiv) => {
      dotDiv.addEventListener("click", () => {
        const dataOrder = dotDiv.dataset.order;
        this.currentIndex = dataOrder;
        this.#updateDotActive();
        this.#updateSlidePosition();
      });
    });

    // nextBtn click
    nextBtn.addEventListener("click", this.#handleNextBtnClick);

    // prevBtn click
    prevBtn.addEventListener("click", this.#handlePrevBtnClick);

    // setInterval
    setInterval(() => {
      this.#handleNextBtnClick();
    }, 5000);
  };

  #handlePrevBtnClick = () => {
    const maxLen = this.images.length;
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = maxLen - 1;
    }
    this.#updateSlidePosition();
    this.#updateDotActive();
  };

  #handleNextBtnClick = () => {
    const maxLen = this.images.length;
    if (this.currentIndex < maxLen - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.#updateSlidePosition();
    this.#updateDotActive();
  };

  #resetDotActive = () => {
    const dotDivs = this.carouselElement.querySelectorAll(".dot");
    dotDivs.forEach((div) => {
      div.classList.remove("dot-active");
    });
  };

  #updateSlidePosition = () => {
    const slides = this.carouselElement.querySelector(".slides");
    slides.style.transform = `translateY(-50%) translateX(${
      this.currentIndex * -100
    }%)`;
  };

  #updateDotActive = () => {
    this.#resetDotActive();
    const target = this.carouselElement.querySelector(
      `div[data-order="${this.currentIndex}"]`
    );
    target.classList.add("dot-active");
  };

  #renderComponent = () => {
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");

    const slides = document.createElement("div");
    slides.classList.add("slides");

    // images
    this.images.forEach((src) => {
      const imgTag = document.createElement("img");
      imgTag.setAttribute("src", src);
      imgTag.setAttribute("alt", "slide img");
      imgTag.classList.add("slide");
      slides.appendChild(imgTag);
    });

    const controls = this.#createControls();

    const dots = this.#createDots();

    // append to carousel
    carousel.appendChild(slides);
    carousel.appendChild(controls);
    carousel.appendChild(dots);
    return carousel;
  };

  #createDots = () => {
    const dots = document.createElement("div");
    dots.classList.add("dots");
    for (let i = 0; i < this.images.length; i++) {
      const dot = document.createElement("div");
      if (i === 0) {
        dot.classList.add("dot-active");
      }
      dot.classList.add("dot");
      dot.dataset.order = i;
      dot.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="dot-svg" width="32" height="32" fill="#ffffff"
      viewBox="0 0 256 256" class="dot-active">
      <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z"></path>
    </svg>`;
      dots.appendChild(dot);
    }
    return dots;
  };

  #createControls = () => {
    // controls
    const controls = document.createElement("div");
    controls.classList.add("controls");
    // prev btn
    const prevBtn = document.createElement("div");
    prevBtn.classList.add("control");
    prevBtn.classList.add("prev-slide");
    // svg
    prevBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256">
    <path
      d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,112H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168a8,8,0,0,1,0,16Z">
    </path>
  </svg>`;

    // next btn
    const nextBtn = document.createElement("div");
    nextBtn.classList.add("control");
    nextBtn.classList.add("next-slide");
    // svg
    nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256">
    <path
      d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,109.66-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,173.66,133.66Z">
    </path>
  </svg>`;

    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);
    return controls;
  };
}

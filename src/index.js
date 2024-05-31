import image1 from "./img/image.png";
import image2 from "./img/image2.png";
import image3 from "./img/image3.png";
import image4 from "./img/image4.png";
import image5 from "./img/image5.png";
import dotActive from "./img/dot-active.svg";
import dotInactive from "./img/dot-inactive.svg";
import arrowRight from "./img/arrow-right.svg";
import arrowLeft from "./img/arrow-left.svg";
import "./style.css";
import { Carousel } from "./carousel";

// document.addEventListener("DOMContentLoaded", () => {
//   const nextBtn = document.querySelector(".next-slide");
//   const prevBtn = document.querySelector(".prev-slide");
//   const slides = document.querySelector(".slides");
//   const slideImgs = document.querySelectorAll(".slide");
//   const maxLen = slideImgs.length;
//   const dotDivs = document.querySelectorAll(".dot");
//   const svgEls = document.querySelectorAll(".dot-svg");

//   let index = 0;

//   const resetDotActive = () => {
//     dotDivs.forEach((el) => {
//       el.classList.remove("dot-active");
//     });
//   };

//   const updateSlidePosition = () => {
//     slides.style.transform = `translateY(-50%) translateX(${index * -100}%)`;
//   };

//   const updateDotActive = () => {
//     resetDotActive();
//     const target = document.querySelector(`div[data-order='${index}']`);
//     target.classList.add("dot-active");
//   };

//   // dot click
//   dotDivs.forEach((dotDiv) => {
//     dotDiv.addEventListener("click", (e) => {
//       const dataOrder = dotDiv.dataset.order;
//       index = dataOrder;
//       updateDotActive();
//       updateSlidePosition();
//     });
//   });

//   // nextBtn click
//   const handleNextBtnClick = () => {
//     if (index < maxLen - 1) {
//       index++;
//     } else {
//       index = 0;
//     }
//     updateSlidePosition();
//     updateDotActive();
//   };
//   nextBtn.addEventListener("click", handleNextBtnClick);

//   // prevBtn click
//   const handlePrevBtnClick = () => {
//     if (index > 0) {
//       index--;
//     } else {
//       index = maxLen - 1;
//     }
//     updateSlidePosition();
//     updateDotActive();
//   };
//   prevBtn.addEventListener("click", handlePrevBtnClick);

//   // setInterval
//   setInterval(() => {
//     handleNextBtnClick();
//   }, 5000);
// });

const carousel = new Carousel();
console.log(carousel); // Log the class instance
document.body.appendChild(carousel);

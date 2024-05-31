# vanilla-carousel-component

This document provides guidance on how to utilize the Carousel component in web projects. The component is highly customizable and can be styled using CSS variables.

_This package is **distributed as ES Modules** and is expected to be used in environments that support module syntax._

## Installation

```bash
npm install vanilla-carousel-component
```

## Usage

### Basic Usage

```javascript
import { Carousel } from "vanilla-carousel-component";

// creates carousel with default imgs
const carouselElement = new Carousel();
document.body.appendChild(carouselElement);
```

### Custom Images

```javascript
import { Carousel } from "vanilla-carousel-component";

const imgList = [
  "https://via.placeholder.com/600x400?text=Image+1",
  "https://via.placeholder.com/600x400?text=Image+2",
  "https://via.placeholder.com/600x400?text=Image+3",
];

// accepts list of url strings
const customCarousel = new Carousel(imgList);
document.body.appendChild(customCarousel);
```

## CSS variables

```css
:root {
  --carousel-width: 80vw;
  --carousel-height: 400px;
}
```

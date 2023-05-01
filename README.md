# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Code Snippets](#code-snippets)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./src/images/screenshot.png)

### Links

- Solution URL: [https://github.com/vljones133/advice-generator](https://github.com/vljones133/advice-generator)
- Live Site URL: [https://advice-generator-vjonesdev.vercel.app](https://advice-generator-vjonesdev.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties, converted to SASS
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [SASS](https://sass-lang.com/) - CSS extension language

### To be continued...

- [TypeScript](https://www.typescriptlang.org/) - JS with syntax for types
- [Testing](https://jestjs.io/) - JS testing framework

### Code Snippets

```css
.spin {
  animation: spin 1s linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

```js
  <picture>
      <source srcSet={pauseMobile} media='(max-width: 575px)' />
      <img src={pauseDesktop} alt='pause' />
  </picture>
  <button
     className={clicked ? "spin" : ""}
     onClick={fetchAdviceAndSpin}
  >
     <img src={dice} alt='roll the dice' />
  </button>
```

### Continued development

I plan to implement a little testing, and as much TypeScript as I can into the project for more practice on these newly learned concepts.

## Author

- Frontend Mentor - [@VLJones133](https://www.frontendmentor.io/profile/vljones133)

[![Website](https://img.shields.io/badge/Website-54039A?style=for-the-badge&logo=GoogleChrome&logoColor=white)](https://vjones.dev/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/valeriejones133)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/ValJonesDev)

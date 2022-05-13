# Password Generator
​
## Table of contents
​
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

​
## Overview
​
### The challenge
​
This challenge is an on the job type of format; it requires me to use starter code to make an application that will enable the user to generate random passwords that fulfill user criteria input.  This application runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code that I have written.  It has a responsive UI that can adapt to multiple screen sizes.

### User Story
​
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
​
### Acceptance Criteria
​
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
​
### Screenshot
​
![My Website](./assets/images/screenshot.png)
​
### Links
​
- Solution URL: [https://github.com/Unicorn-Barf/homework_2](https://github.com/Unicorn-Barf/homework_2)
- Live Site URL: [https://unicorn-barf.github.io/homework_2/](https://unicorn-barf.github.io/homework_2/)
​
## My process
​
### Built with
​
- HTML5 Markup
- CSS
- JavaScript
​
### What I learned
​
This challenged requited me to build a web application from scratch.  It was challenging to plan and organize this project from the ground up with no starting code.  First, I utilized my newly learned skill of making wire frames to design my desktop layout so that I had a visualization of how to use flexbox.  Here is the wireframe that I made:\
\
![Desktop Wireframe](./assets/images/Port-WF-Desk1.png)\
\
I learned how to make a sticky nav bar and header while still leaving space for it when using scroll links on my page.  Also, the z-index was very important to specify what layer the elements would be as it scrolled along the page.  Here are the snippets of CSS that make this feature function appropriately.

​
```css
html {
  scroll-padding-top: 200px; /* height of sticky header */
}

header {
  position: sticky;
  top: 0px;
  z-index: 1;
  height: 100px;
  background-color: var(--lt);
}

nav {
  position: sticky;
  top: 100px;
  display: flex;
  justify-content: space-around;
  align-content: center;
  padding: 10px;
  margin-bottom: 150px;
  z-index: 1;
  background-color: var(--dk);
}
```
​
​
### Continued development
​
From my experience gained working on this project I have realized my lack of skills using CSS.  I want to continue to practice so that I have a super solid understanding of how CSS selectors work and what is the most eloquent way to apply attributes to my HTML elemnts in my CSS code.
### Useful resources
​
- [Markdown Guide](https://www.markdownguide.org/basic-syntax/) - I continue to use this source as a referernce when writing my README.md to understand markdown syntax.
- [Difference between sticky and fixed position](https://stackoverflow.com/questions/19501919/difference-between-positionsticky-and-positionfixed) - This stackoverflow question helped me immensely in understanding the difference between sticky and fixed position so that I could effectively implement my sticky navbar and header.
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This flexbox guide was a helpful quick reference when I had trouble with positioning my elements.
- [Transitions on hover](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) - I used this page as a reference to have hover transitions in my CSS.
​
## Author
​
**Nolan Spence**
- GitHub - [https://github.com/Unicorn-Barf](https://github.com/Unicorn-Barf)
- LinkedIn - [https://www.linkedin.com/in/aerospence/](https://www.linkedin.com/in/aerospence/)
​
## Acknowledgments
​
My teacher, Emmanuel Jacuban, helped me with understanding scroll-padding-top in CSS to keep my sticky navbar and heading from covering my page scroll links.

My tutor, Jacob Norman, helped me understand how CSS selectors could specifically reference elements through heiarchy and not just individual class and id.  He also should be cool dynamic effects CSS can achieve using pseudo classes like hover.
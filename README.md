# Your sometimes friendly Oneiric Oracle
## For you it's probably just a game, but the stars are being very serious about this. 

![](assets/images/Preview_Responsiveness.png)

[Preview the live site here](https://nathiedeheyl.github.io/oneiric-oracle/)

## General

### Project Description

This web-based project is an interactive experience that offers to interpret a user’s dream. Rather than complex text analysis, the user is presented with questions reflecting common symbols in dream interpretation. Those questions are designed to trigger the user’s intuition. The user is also encouraged to respond quickly without overthinking. By responding intuitively to the given prompts, the user receives a dream "interpretation" tailored to the answers they’ve selected before.  

The user answers 7 questions, with each answer corresponding to a different dream mood or concept. Each response option is assigned a specific value that adds up to a total score throughout the question session. After one answer has been selected by the user, the next question is displayed during question session. Based on the user's total score, they receive one of four possible dream interpretations.

<details>
<summary>Wireframes</summary>

<details>
<summary>Wireframes for Mobile Devices</summary>

![Landing page for mobile 1](assets/images/landing%20page%20mobile.png)
![Landing page for mobile 2](assets/images/landing%20page%20mobile%202.png)
![Game page for mobile](assets/images/game%20page%20mobile.png)
![Feedback page for mobile](assets/images/feedback%20page%20mobile.png)

</details>
<details>
<summary>Wireframes for Tablet Devices</summary>

![Landing page for tablet 1](assets/images/landing%20page%20tablet.png)
![Landing page for tablet 2](assets/images/landing%20page%20tablet%202.png)
![Game page for tablet](assets/images/game%20page%20tablet.png)
![Feedback page for tablet](assets/images/feedback%20page%20tablet.png)

</details>
<details>
<summary>Wireframes for Desktop</summary>

![Landing page for desktop](assets/images/landing%20page%20desktop.png)
![Game page for desktop](assets/images/game%20page%20desktop.png)
![Feedback page for desktop](assets/images/feedback%20page%20desktop.png)

</details>
</details>

### Purpose of the Project

The Website "Oneiric Oracle" aims to provide the user with fun and light-hearted introduction to dream interpretation. Designed for users who are new to the world of dream interpretation, the project touches on common themes and symbols, without going to deep. The goal is to encourage reflection and give reassurance by validating the user's feelings and experiences while dreaming.  

Introspection is fostered by presenting the user with a series of questions based on typical dream symbols. The interpretations given in the end are blended with a little bit of humor, containing just enough insight to spark curiosity about what our dreams might reveal, without taking oneself too seriously. 

The initial version of the project focuses on providing an engaging experience. The long-term vision is to develop the website into a more nuanced tool, incorporating text inputs with language processing and accessing a wider range of interpretation. For now, the purpose of the project is to make users curious about the world of symbols, and to be a fun prompt to encourage reflection and introspection on thoughts and feelings.

## UX

### User Demographic

Generally speaking, the project is designed to appeal to a broad age range. The website and it's game-like approach to dream interpretation is easily accessible to anyone interested and open to dream interpretation. However, the website targets mainly users who are beginners in the field of dream interpretation. The quiz-styled tool helps users who are curious about what their dream might mean, but who may not have any deeper knowledge about the topic or experience in dream interpretation yet. Target users are looking for a mix of entertainment and encouragement to self-reflect. 

### User Goals

- The user wants to explore the meaning of their dream. 
- The user is curious about the topic of dream interpretation and wants to get some insights about what symbols and themes mean according to the field of study. 
- The user wants to be entertained with a light-hearted game-like quiz. 

### User Expectations

- A responsive, accessible website on all devices (mobile, tablet, desktop).
- User-friendly and straightforward design with minimal steps to start the game. 
- Intuitive navigation that guides the user throught the experience without distraction. 
- Interactive, clickable elements that make it easy to progress through the game. 
- A visible progress bar that helps track the position within the game. 
- A clear outcome at the end of the game: A unique dream interpretation based on the answers chosen. 
- If the user choses to start over, they expect the score and with in the progress bar to be reset. 

### User Stories

#### As a user ... 

- I want to explore the meaning of my dreams in a fun and interactive way. 
- I want to reflect on my subconcious thoughts and hidden feelings. 
- I want clear steps (no multiple choice, one question, one answer) to answer the questions. 
- I want a straightforward layout, so I can start the game easily and quickly. 
- I want to gain some insight into the meaning of my dream and get a feedback after answering all questions. 

#### As the site owner ... 

- I want user to return to the site thanks to it's engaging and game-like approach on the topic. 
- I want to encourage users to practice introspection. 
- I want to teach users to watch out for symbols and themes in their dreams. 

## Design

### Fonts

### Font Choices

For the **Oneiric Oracle** website, I chose two creative fonts to transport the mystic vibe of a fortune teller's tent: 

| Font  | Use               | Justification                                                                                                                                           |
|-------|------------------------|-------------------------------------------------------------------------------|
| Cinzel | Headings & Buttons | Mysterious, still elegant, fitting the vibe. |
| Lora   | Italic for body texts | For body text I'm generally trying to go for a more subtle version that is easier to read to assure user friendliness. The Lora font provides those aspects while still fitting the mystical vibe that Cinzel gives. |

### Colors and Contrast

- **Primary Colors**: https://coolors.co/202332-413d51-9102de-b26e63-519872

## Features

- 

## Possible Future Features

- A prompt when the timer runs out for the first time without answer selection from user whether the user prefers to switch off the timer feature instead. 
- Switch off the timer feature before starting the game. 
- dream log (text input) or diary
- Natural language processing and keyword recognition of dream log 

## Languages

- HTML, CSS, JavaScript

## Technologies

- Google Fonts for typography
- Flaticon for icons 
- Favicon.io for converting icon to favicon 
- Coolors for generating the color palette

## Testing

### Code validation 

| **Validation Issue**                                | **Screenshot**          | **Fix**                                                |
|-----------------------------------------------------|--------------------------|--------------------------------------------------------------|
| Attribute `aria-expanded` not valid at an early stage | ![Error Screenshot](assets/images/html_validation_2.png) | Removed the attribute to avoid confusion while working on the project | 


### Manual Testing Checklist

- ... in the preview it looks as if the layout for tablet is not quite right, but that's because I though it'd be much more intuitive to go throught he quiz on a tablet held horizontally and then the layout looks much better to my eyes. 

### Bugs

- After a first validation when wrapping up the landing page html, the W3HTML validator pointed out an error indicating that `role="checkbox"` was missing for the `checkbox` `input` element. After adding `role="checkbox"` when validating the html code after setting up some basic html for the question sessions, I was prompted with the error: attribute `aria-checked` missing and role `checkbox` unnecessary at the same time. After testing and researching, I came to the conclusion that both attributes are obsolete for the element `input type="checkbox` and removed both which resolved the validation issue.  
<details>
<summary>Screenshot validation issues after landing page html</summary>

![Error Screenshot](assets/images/html_validation_1.png)

</details>
<details>
<summary>Screenshot validation error after question session html</summary>

![Error Screenshot](assets/images/html_validation_4.png)

</details>

## Deployment

The site was deployed using GitHub Pages. The steps to deploy are the following:

- In the [GitHub repository](https://github.com/nathiedeheyl/oneiric-oracle), navigate to the Settings tab.
- Under the heading "Code and automation", select "Pages".
- From the Build and deployment section Branch drop-down menu, select the **Main** Branch and the /root folder, then click "Save".
- Refresh the page. It should then say: "Your site was last deployed to the github-pages environment by the pages build and deployment workflow." and show the link to the live site on top of the page. 

[View the live site here](https://nathiedeheyl.github.io/oneiric-oracle/)

## Credits

### Media

- Favicon Emoji Source: <a href="https://www.flaticon.com/free-icons/crystal-ball" title="crystal ball icons">Crystal ball icons created by Freepik - Flaticon</a> 
- Flaticon Timer Emoji <a href="https://www.flaticon.com/free-icons/timer" title="timer icons">Timer icons created by Freepik - Flaticon</a>
- Flaticon cloud and question mark icon: <a href="https://www.flaticon.com/free-icons/question" title="question icons">Question icons created by Freepik - Flaticon</a>
- Favicon converter: https://favicon.io/favicon-converter/ 

### Resources

- Coolors: https://coolors.co/
- Fonts: https://fonts.google.com/
- Code Institute's Submissions repository: https://github.com/Code-Institute-Submissions/ 
- Research on elements, attributes, properties and functions, mainly using: https://developer.mozilla.org/ , https://www.w3schools.com/ , and https://stackoverflow.com/

### Research 

- css columns: https://css-tricks.com/introduction-fr-css-unit/ 

## Acknoledgements 

I would like to thank my mentor, Rory Patrick Sheridan, for guiding me through the most difficult steps and always providing helpful insights. 
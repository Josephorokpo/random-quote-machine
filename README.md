## Random Quote Machine

This project is a Random Quote Machine built with React.js, designed to display random quotes with the ability to fetch new quotes and share them on Twitter. The project is part of the [freeCodeCamp Front End Libraries Projects](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine).

##Table of Contents

- Features
- Live Demo
- Installation
- Usage
- Technologies Used
- Project Structure
- License

##Features

- Displays a random quote on initial load.
- Fetches a new random quote when the "New Quote" button is clicked.
- Displays the author of the quote.
- Allows users to share the current quote on Twitter.
- Fully responsive design that works well on all screen sizes.

##Live Demo

Check out the live demo of the Random Quote Machine [here]().

##Installation
To run this project locally, follow these steps:

1. Clone the repository:
	
- git clone https://github.com/Josephorokpo/random-quote-machine.git
cd random-quote-machine

2. Install the dependencies:

- npm install

3. Start the development server:

- npm start

## Usage

Get a new quote: Click on the "New Quote" button to fetch and display a new random quote.
Tweet the quote: Click on the "Tweet" button to share the current quote on Twitter.

##Technologies Used

- React.js: JavaScript library for building user interfaces.
- CSS: Styling the application.
- Web Vitals (optional): For measuring performance in the app.


## Project Structure
'''
src/
├── components/
│   └── QuoteBox.js       # Component responsible for displaying quotes and handling user interactions
├── App.js                # Root component that renders QuoteBox
├── App.css               # Styles for the App component
├── index.js              # Entry point for the React application
└── reportWebVitals.js    # Optional performance monitoring
'''

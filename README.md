# A React Portfolio Project

[![Build Status](https://travis-ci.com/yadam/portfolio.svg?branch=master)](https://travis-ci.com/yadam/portfolio) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yadam/portfolio/blob/master/LICENSE) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## What is this?

This is a simple web application intended to be a representation of the skill set of a single developer. It's also a place to experiment with new technology and tools in a simple, but fully featured environment.

## What does it do?

The current incarnation of this project is a "Funny or Meh" rating system for [xkcd](https://xkcd.com/) comics. It comprises of a front end that displays some dashboard widgets and the latest comic. Two buttons are provided. One rates the comic as "funny". The other rates the comic as "meh". Clicking on one of these buttons records that vote in a database. It also retrieves a random comic for voting. The dashboard widgets will adjust to display voting statistics.

## What technology is this using?

### The frontend

- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)

### The backend

- [Serverless](https://serverless.com/)

### Testing

- [Jest](https://jestjs.io/)

### Linting/code formatting

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

### Bundling/Transpiling

- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)

### Environment

- [AWS Lambda](https://aws.amazon.com/lambda/)

## Intended Audience

This project is intended for hiring managers and recruiters looking for examples of the skills that I provide.

## Who am I?

My name is Adam. Hopefully if you've gotten this far you found this site from my resume or social media accounts and you have all of the answers you need.

## TODO

- [ ] Load another random comic when the user reacts to the current comic
  - [ ] Add Redux
    - [ ] Store the most recent comic's ID for use as an upper bound for retrieving random comics in the future
    - [ ] Store current list of comics
  - [ ] Convert root page to contain a list of comics instead of a single one
  - [ ] Trigger download of random comic when the current comic's reaction is recorded
- [ ] Add a dashboard gauge to indicate the average funniness
  - [ ] Add an API endpoint to fetch all of the reactions from the database
  - [ ] Add gauge component
- [ ] Refactor to React Hooks where appropriate
- [ ] Add code coverage reporter (codecov)
- [ ] Add dependency up-to-date reporter (greenkeeper)
- [ ] Add support for SSR
  - [ ] Add feature toggle to enable/disable SSR on the fly
  - [ ] Add next.js support and refactor
  - [ ] Add toggle component to flip feature toggle

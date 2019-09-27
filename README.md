# Rexpack

This is a ReactJS example projects with minimal Express, Webpack app that serves an image, adds some styling and some basic functionality. This project can then be used as a template for other more complex apps.

Stack: Node (ES6+), Express, Webpack, React, Jest, and Enzyme that has Hot Module Reloading and can be deployed to Google App Engine with a single command. It has dev and prod builds, where the prod build outputs a minified, uglified bundle where images are encoded in Base64 directly into the css file.

- jest is an open-source testing framework that has become increasingly popular recently. Developed by Facebook.

App can be run locally on your machine, or pushed to cloud

## Installation

    npm install

## Create a Development build

    npm run build:dev

## Create a Production build

    npm run build:prod

## Run the code on a local webserver

    npm start

## Run test

    npm test

## Generate coverage report

    npm run coverage

## Prettier - Code formatter

    https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

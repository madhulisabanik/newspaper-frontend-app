# Update 24x7 News application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

To install all the dependencies available in package.json

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Steps to setup the project using Docker

1. First setup the Backend:

### `docker pull madhulisa/nodejs-demo-app:1.1`
### `docker run -d -p 8080:8080 madhulisa/nodejs-demo-app:1.1`


2. Then setup the Frontend:

### `docker pull madhulisa/newspaper-frontend-app:1.0`
### `docker run -d -p 3000:3000 madhulisa/newspaper-frontend-app:1.0`


## Home page -

![ScreenShot](https://raw.github.com/madhulisabanik/newspaper-frontend-app/main/ProjectScreenshots/homePage.png)

## About Us page -

![ScreenShot](https://raw.github.com/madhulisabanik/newspaper-frontend-app/main/ProjectScreenshots/aboutUs.PNG)

## Contact Us page -

![ScreenShot](https://raw.github.com/madhulisabanik/newspaper-frontend-app/main/ProjectScreenshots/contactUs.PNG)

## Login page -

![ScreenShot](https://raw.github.com/madhulisabanik/newspaper-frontend-app/main/ProjectScreenshots/login.PNG)

## Registration page -

![ScreenShot](https://raw.github.com/madhulisabanik/newspaper-frontend-app/main/ProjectScreenshots/register.jpg)

## News Listing page -

![ScreenShot](https://raw.github.com/madhulisabanik/newspaper-frontend-app/main/ProjectScreenshots/news_listing_page.png)

## Add news -

![ScreenShot](https://raw.github.com/madhulisabanik/newspaper-frontend-app/main/ProjectScreenshots/addNews.jpg)


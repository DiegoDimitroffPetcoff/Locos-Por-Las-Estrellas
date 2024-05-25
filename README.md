## Project Description
This project is a mobile application developed with React Native, using the @react-navigation/native library to manage the routes between views. The application is designed to display daily astronomical images obtained from an external API, as well as images from the last five days. Here is a detailed description of the structure and main functionalities of the project:

## Navigation Structure
The navigation of the application is managed through a Stack Navigator, allowing transitions between two main views: Home and Details.

### Home: 
This is the main screen displaying the astronomical image of the day and a list of images from the last five days.
### Details: 
This is the detail screen that shows detailed information about a selected image, including its title, date, and an explanation.

## Components and Functionalities
### Home:
##### Header: 
A common component that displays the application header.
##### CurrentImages: 
Displays the image of the current day. It includes a button to navigate to the details view.
##### LastFiveDays: 
A list of images from the last five days. Each image has a button to view more details on the Details screen.

## Details:
### Header: 
A common component that displays the application header.
### DetailsComponent: 
Displays the selected image with its title, date, and detailed explanation.

## Data Logic
### FetchGet: 
A utility for making HTTP requests to the external API and fetching astronomical image data.
### DaysFormater: 
A utility for formatting dates and creating the necessary queries to fetch images from the last five days.

## Styles
The application's design is managed through React Native's StyleSheet, providing consistent and custom styles for various components to ensure an attractive and cohesive user experience.

## Lifecycle and Effects
useEffect: In the Home view, the useEffect hook is used to load the current day's image and images from the last five days when the component mounts. Potential errors during data fetching are handled appropriately.

## Overview of the Application
This project provides an intuitive and visually appealing way for users to explore and learn about daily and recent astronomical images, promoting interest in astronomy and space science.
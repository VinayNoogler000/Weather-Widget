# Weather-Widget

## Overview:
I am excited and proud to share you about my another milestone web-project **Weather Widget**.<br>
The project is built of mainly just three components, named as, *Search box*, *Search button* and *Weather card*.<br>
In this project, the user enters the location name in the search box, then click the search button or press the enter key on the keyboard, which displays the current weather information of that location in the form of card, with an example image of the weather of that location.

## Tech Deep-Dive:
I developed this project by using front-end technologies: *HTML, CSS, JavaScript, React & Material UI Library/Framework*.  
I used *Vite* tool to setup local environment for this React project.

## Note:
All the main files, which contains code of this project are in the *src* folder/directory. To fetch weather data, [OpenWeatherMap's](https://openweathermap.org/current) API has been used.

## Development Journey:
First, I learnt about Material UI library and it's pre-defined React UI components. Then I started  developing the project, by figuring out the total no. of components I need to create, starting from the bottom. Here the following components:
- The first component is the `<SearchBox />` component, which renders a *TextField* input MUI component of *search type*, where the user will enter the location.
- The`<SearchButton />` component is the 2nd component, which renders a *Button* MUI component of *submit type*, and on click, the button submits the value/data, entered by the user in the *SearchBox* component.
- The `<SearchForm />` component is the 3rd component, which contains and renders *SearchBox* and *SearchButton* components, as form elements, and when the *SearchButton* component is clicked then the form gets submitted, calling the `getWeatherInfo()` function from *weatherInfo.js* file, which sends an API request to the *OpenWeatherMap*, with the value of the *SearchBox* component as a query string.

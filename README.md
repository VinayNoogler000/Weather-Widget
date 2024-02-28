# Weather-Widget

## Overview:
I am excited and proud to share you about my another milestone web-project **Weather Widget**.<br>
The project is built of mainly just three components, named as, *Search box*, *Search button* and *Weather card*.<br>
In this project, the user enters the location name in the search box, then click the search button or press the enter key on the keyboard, which displays the current weather information of that location in the form of card, with an example image of the weather of that location.

## Tech Deep-Dive:
I developed this project by using front-end technologies: *HTML, CSS, JavaScript, React & Material UI Library/Framework*.  
I used *Vite* tool to setup local environment for this React project.  
To get weather data, [OpenWeatherMap's](https://openweathermap.org/current) API has been used.

## Note:
All the main files, which contains code of this project are in the *src* folder/directory.

## Development Journey:
First, I learnt about Material UI library and it's pre-defined React UI components. Then I started  developing the project, by figuring out the total no. of components I need to create, starting from the bottom. Here are the following components:
1. The [SearchBox](https://github.com/VinayNoogler000/Weather-Widget/blob/main/src/SearchBox.jsx) component renders a `<TextField />` MUI input component of *search type*, where the user will enter the location.
2. The [SearchButton](https://github.com/VinayNoogler000/Weather-Widget/blob/main/src/SearchButton.jsx) component renders a `<Button />` MUI component of *submit type*.
3. The [SearchForm](https://github.com/VinayNoogler000/Weather-Widget/blob/main/src/SearchForm.jsx) component contains and renders `<SearchBox />` and `<SearchButton />` components, as form elements, and when the `<SearchButton />` component is clicked, then the form gets submitted, calling the `getWeatherInfo()` function from the [weatherInfo.js](https://github.com/VinayNoogler000/Weather-Widget/blob/main/src/weatherInfo.js) file, which sends an API request to the *OpenWeatherMap* with the value in the `<SearchBox />` component as a query string.
4. The [WeatherCard](https://github.com/VinayNoogler000/Weather-Widget/blob/main/src/WeatherCard.jsx) component renders a *Card* MUI component, containing the weather data. This data was received as an API response to the `getWeatherInfo()` function, and the function passes that data as a prop to this `<WeatherCard />` component.
5. The [WeatherWidget](https://github.com/VinayNoogler000/Weather-Widget/blob/main/src/Weather%20Widget.jsx) component is the ultimate main component, which renders the `<SearchForm />` & `<WeatheCard />` components as a complete working weather-widget. The `weatherData` state variable of this component, gets initialized by a random weather data, then later, gets updated with the weather data returned by the `getWeatherInfo()` function, when the `<SearchForm />` component gets submitted, and at last, the `weatherData` state variable gets passed as a prop to the `<WeatherCard />` component.

There are two additional features added in this project:
1. After the location name on the `<WeatherCard />` component, different MUI icons gets rendered, according to the description of the weather of that location. The logic is defined in the [WeatherIcon.jsx](https://github.com/VinayNoogler000/Weather-Widget/blob/main/src/WeatherIcon.jsx) file.
2. The image on the `<WeatherCard />` component dynamically changes, depending on the description of the weather. These images are an example of the current weather of that location, but not the exact image of the current weather of that location. The logic is defined in [weatherImg.js](https://github.com/VinayNoogler000/Weather-Widget/blob/main/src/weatherImg.js) file.
  
## Play around with this Weather Widget & feel free to give feedbacks🙏😇 

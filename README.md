# Weather App

A simple weather application that fetches and displays real-time weather information for a given city using the OpenWeather API.

## Features

- Displays temperature, humidity, wind speed, and weather icon.
- Supports search functionality by city name.
- Handles errors for invalid city names or empty inputs.
- Automatically converts temperatures from Kelvin to Celsius.

## Technologies Used

- **React**: For building the user interface.
- **OpenWeather API**: For fetching real-time weather data.
- **CSS**: For styling the application.

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- OpenWeather API key. You can get one by signing up at [OpenWeather](https://openweathermap.org/).

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Choubi-Mohammed/Weather-App.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Weather-App
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenWeather API key:
   ```env
   VITE_APP_ID=your_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Usage

1. Enter the name of a city in the search bar.
2. Click the search button or press Enter.
3. View the weather information, including:
   - Temperature (in Celsius).
   - Humidity.
   - Wind speed.
   - Weather icon.

![Screenshot](src/assets/Screenshot%202024-12-11%20172937.png)


## Error Handling

- Displays a message if:
  - The input field is empty.
  - The city is not found in the OpenWeather database.

## Project Structure

```
Weather-App/
├── public/
├── src/
│   ├── assets/
│   │   ├── clear.png
│   │   ├── cloud.png
│   │   ├── drizzle.png
│   │   ├── humidity.png
│   │   ├── rain.png
│   │   ├── search.png
│   │   ├── snow.png
│   │   └── wind.png
│   ├── components/
│   │   ├── Weather.css
│   │   ├── Weather.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## Contact

For any inquiries, please reach out to [Choubi Mohammed](https://github.com/Choubi-Mohammed).

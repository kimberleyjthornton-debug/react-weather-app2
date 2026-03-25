import "./App.css";
import SearchWeather from "./Weather";

function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>Weather App</h1>
        <SearchWeather />
        <footer>
          <p>
            This project was coded by Kimberley Thornton and is {""}
            <a
              href="https://github.com/kimberleyjthornton-debug/react-weather-app2"
              target="_blank"
              rel="noopener noreferrer"
            >
              open sourced
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

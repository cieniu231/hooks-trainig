import './App.css';
import React from "react";
import CityList from "./components/citylist.js";
import AddCityForm from "./components/addcityform.js";




function App() {
    //const [cities, setCities] = useState(cityData);
    return (
        // with useContext
        <>
            <AddCityForm/>
            <CityList/>
        </>

        /* without useContext
        <>
            <AddCityForm
                   onNewColor={(title, color) => {
                  const newCities = [
                      ...cities,
                      {
                          id: v4(),
                          rating: 0,
                          title,
                          color
                      }
                  ];
                  setCities(newCities);
              }}
              />
              <CityList
                  cities={cities}
                  onRateCity={(id, rating) => {
                  const newCities = cities.map(city =>
                      city.id === id ? { ...city, rating } : city
                  );
                  setCities(newCities);
              }}
                  onRemoveCity={ id => {
                  const newCities = cities.filter(city => city.id !== id);
                  setCities(newCities);
                   }}
              />

        </>
        */
    );
}

export default App;

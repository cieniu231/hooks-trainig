import './App.css';
import React, { useState } from "react";
import cityData from "./data/cities-data.json";
import CityList from "./components/citylist";
import AddCityForm from "./components/addcityform";
import { v4 } from "uuid";




function App() {
    const [cities, setCities] = useState(cityData);
    return (
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
    );
}

export default App;

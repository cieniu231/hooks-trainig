import React, { createContext, useState, useContext } from "react";
import cityData from "../data/cities-data.json"
import { v4 as uuidv4} from 'uuid';

const CityContext = createContext();
export const useCities = () => useContext(CityContext);

export default function CityProvider ({ children }) {
    const [cities, setCities] = useState(cityData);

    const addCity = (title, color) =>
        setCities([
            ...cities,
            {
                id: uuidv4(),
                rating: 0,
                title,
                color
            }
        ]);

    const rateCity = (id, rating) =>
        setCities(
            cities.map(city => (city.id === id ? {...city, rating} : city))
        );
    const removeCity = id => setCities(cities.filter(city => city.id !== id));

    return (
        <CityContext.Provider value={{ cities, addCity, removeCity, rateCity }}>
            {children}
        </CityContext.Provider>
    );

}
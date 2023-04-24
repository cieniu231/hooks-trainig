import React, { useContext } from "react";
import City from "./city.js";
import { useCities } from "./city-hooks.js";




//with useContext
export default function CityList() {
    const { cities } = useCities();

    if (!cities.length) return <div>No Colors Listed. (Add a Color)</div>;

    return (
        <div className="city-list">
            {cities.map(city => (
                <City key={city.id} {...city} />
            ))}
        </div>
    );
}

/* without useContext
export default function CityList( { cities = [], onRemoveCity = f => f, onRateCity = f => f }) {
    if(!cities.length) return <div>Brak kolorów. (Dodaj kolor)</div>
    return (
        <div className="city-list">
            {
                cities.map(city => (
                    <City
                        key={city.id}
                        {...city}
                        onRemove={onRemoveCity}
                        onRate={onRateCity}
                    />
                    )
                )
            }
        </div>
    );
}
 */


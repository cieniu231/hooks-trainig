import City from "./city.js";

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
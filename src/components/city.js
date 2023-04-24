import React from "react";
import StarRating from "./starrating.js";
import { FaTrash} from "react-icons/fa";
import { useCities } from "./city-hooks.js"

export default function City({ id, title, color, rating, onRemove = f => f, onRate = f => f }) {
    const { rateCity, removeCity } = useCities();
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => removeCity(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating
                selectedStars={rating}
                onRate={rating => rateCity(id,rating)}
            />
        </section>
    );
}
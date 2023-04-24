import React from "react";
import { useInput } from "./hooks";
import {useCities} from "./city-hooks";


export default function AddCityForm() {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const { addCity } = useCities();
    const submit = e => {
        e.preventDefault();
        addCity(titleProps.value,colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="Nazwa koloru... "
                required />
            <input
                {...colorProps}
                type="color"
                required
            />
            <button>DODAJ</button>
        </form>
    )


}
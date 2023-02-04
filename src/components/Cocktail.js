import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Cocktail(props) {
    const [cocktailData, setCocktailData] = useState([]);

    useEffect(() => {
            axios
                .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props.cocktail}`)
                .then(response => setCocktailData(response.data.drinks));
    }, [props.cocktail]);

    const cocktailCards = cocktailData.map(cocktail => {
        return (
            <Card
                key={cocktail.idDrink}
                cocktail={cocktail}
            />
        )
    })

    return (
        <div className="card-container">
            {cocktailCards}
        </div>
    )
}

export default Cocktail;
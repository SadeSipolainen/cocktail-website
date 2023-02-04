import React, {useEffect, useState} from "react";

function Card({cocktail}) {
    const [ingredients, setIngredients] = useState([{
        id: 0,
        ingredient: "",
        measure: ""
    }]);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        for(let i = 1 ; i <= 15; i++) {
            if(cocktail[`strIngredient${i}`] === null) {
                return
            } else {
                setIngredients(prevIngredients => ([
                    ...prevIngredients,
                    {
                        id: i,
                        ingredient: cocktail[`strIngredient${i}`],
                        measure: cocktail[`strMeasure${i}`]
                    }
                ]));
            }
        }
    }, []);

    function toggle() {
        setShowDetails(prevShowDetails => !prevShowDetails);
    }
    
    return (
        <div className="card" onClick={toggle}>
            <div className="card--base">
                {showDetails ?
                (<>
                    <p className="card--instructions">{cocktail.strInstructions}</p>
                    {ingredients.map(item => <li className="card--measurements" key={item.id}><span className="card-ingredient">{item.ingredient}</span>{item.measure}</li>)}
                </>)
                : (<>
                    <img className="card--img" src={cocktail.strDrinkThumb}/>
                    <h3 className="card--header">{cocktail.strDrink}</h3>
                    <p className="card--to-open">{showDetails ? "Click to close" : "Click to open"}</p>
                </>)}
            </div>
        </div>
    )
}

export default Card;
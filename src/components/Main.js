import React, { useState } from "react";
import Cocktail from "./Cocktail.js";
import Footer from "./Footer.js";
import orangeCocktail from "../images/orange-cocktail.jpg";
import cocktailIcon from "../images/cocktail-icon.png";

function Main() {
    const [cocktailNames, setCocktailNames] = useState([
        "cosmopolitan",
        "daiquiri",
        "margarita",
        "martini",
        "mojito",
        "negroni"
    ]);
    const [alcoholNames, setAlcoholNames] = useState ([
        "brandy",
        "gin",
        "rum",
        "sherry",
        "vodka",
        "whiskey"
    ]);

    const [activeButton, setActiveButton] = useState("cosmopolitan");

    const handleClick = (props) => {
        setActiveButton(props);
    }

    const cocktails = cocktailNames.map(cocktail => 
        <button className="main--search-button" key={cocktail} onClick={() => handleClick(cocktail)}>{cocktail}</button>);
    const ingredients = alcoholNames.map(ingredients => 
        <button className="main--search-button" key={ingredients} onClick={() => handleClick(ingredients)}>{ingredients}</button>);

    return (
        <div className="main">
            <header>
                <img alt="Cocktail glass" className="header--icon" src={cocktailIcon}/>
                <h1 className="header--text">Cocktail</h1>
            </header>
            <div className="main--intro">
                <img alt="Orange cocktail" className="intro--img" src={orangeCocktail} />
                <div className="intro--text">
                    <h1 className="intro--text-header">Celebration for everyday life with <span className="intro--italic-pink">a sip</span></h1>
                    <h2 className="intro--text-body">Here you can find a cocktail to sip on your birthdays...or while laying on your sofa. You choose!</h2>
                    <h2 className="intro--text-body">All you need are the listed ingredients and you are ready to go.</h2>
                </div>
            </div>
            <div className="main--search">
                <div className="main--search-bar">
                    <h2 className="main--search-text">Search by cocktail:</h2>
                    {cocktails}
                </div>
                <div className="main--search-bar">
                    <h2 className="main--search-text">Search by alcohol:</h2>
                    {ingredients}
                </div>
            </div>
            <h1 className="main--searched-item">{activeButton}</h1>
            <div>
                <Cocktail cocktail={activeButton}/>
            </div>
            <Footer />
        </div>
    );
}

export default Main;
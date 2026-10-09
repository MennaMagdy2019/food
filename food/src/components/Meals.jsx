import {useEffect, useState} from "react";
import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

export default function Meals() {
   
    const {data: meals, isLoading, error} = useHttp ('http://localhost:3000/meals', {}, []);
 
    if(isLoading) {
        return <p className="center">fetching meals ...</p>
    }
    if(error) {
        return <Error title="Failed to Fetch meals" message={error}/>
    }

    return (
        <ul id="meals">
            {meals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    )
}
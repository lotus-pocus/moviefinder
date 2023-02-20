import Genres from "./components/Genre.json";
import { useState, useEffect } from "react";
import movieList from "./movieList.json";

function Random() {
    const [randomize, setRandomize] = useState(true);



    function handleClick() {
        console.log(movieList);
        const randomMovie = [Math.floor(Math.random() * movieList.length)].id

        setRandomize(randomMovie);
    };

    return (

        <div className="randomizer" style={{ background: "yellow" }}>
            <h1>{randomize}</h1>

            <button onClick={handleClick}>Randomize</button>
        

        </div>
    )
}


export default Random;

import Genres from "./components/Genre.json";
import { useState, useEffect } from "react";

function Random() {
    const [randomize, setRandomize] = useState(true);


    const toggle

    function handleClick () {
        console.log(Genres);
        const randomGenre = Genres[Math.floor(Math.random() *Genres.length)].id
        console.log(randomGenre);
      };

    return (
        <button onClick={handleClick}>Randomize</button>
    )
}


export default Random;

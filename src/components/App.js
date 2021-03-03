import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/api";
import CharacterList from "./CharacterList";
//import CharacterCard from "./CharacterCard";
import CharacterDetail from "./CharacterDetail";
// import Filters from "./Filters";
//import { Route, Switch } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  return (
    <div className="App">
      {/* <Filters /> */}
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;

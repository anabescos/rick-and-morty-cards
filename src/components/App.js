import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/api";
import CharacterList from "./CharacterList";
//import CharacterCard from "./CharacterCard";
// import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import { Route, Switch } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  console.log(name);
  const handleFilter = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
    }
    console.log(inputChange);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(name.toLowerCase());
  });
  console.log(filteredCharacters);
  return (
    <div className="App">
      <Filters handleFilter={handleFilter} />
      <CharacterList characters={filteredCharacters} />
      <Switch>
        <Route path="/character/:id" />
      </Switch>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/api";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  // console.log(name);
  const handleFilter = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
    }
    // console.log(inputChange);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(name.toLowerCase());
  });
  //   console.log(filteredCharacters);
  const renderDetail = (props) => {
    // console.log(props.match);
    const id = parseInt(props.match.params.id);
    const selectedCharacter = characters.find((character) => {
      return character.id === id;
    });
    // console.log(selectedCharacter);
    return <CharacterDetail selectedCharacter={selectedCharacter} />;
  };
  return (
    <div className="App">
      <Filters handleFilter={handleFilter} />

      <Switch>
        <Route exact path="/">
          <CharacterList characters={filteredCharacters} />
        </Route>
        <Route path="/character/:id" render={renderDetail} />
      </Switch>
    </div>
  );
}

export default App;

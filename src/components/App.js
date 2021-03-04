import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/api";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import Header from "./Header";
import "../stylesheets/App.scss";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("All");

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  // console.log(name);
  const handleFilter = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
    } else if (inputChange.key === "species") {
      setSpecies(inputChange.value);
    }
    // console.log(inputChange);
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(name.toLowerCase());
    })
    .filter((character) => {
      return species === "All" ? true : character.species === species;
    });

  const renderDetail = (props) => {
    const id = parseInt(props.match.params.id);
    const selectedCharacter = characters.find((character) => {
      return character.id === id;
    });

    return <CharacterDetail selectedCharacter={selectedCharacter} />;
  };
  return (
    <div className="page">
      <div className="layer">
        <Header />

        <Filters handleFilter={handleFilter} name={name} species={species} />

        <Switch>
          <Route exact path="/">
            <CharacterList characters={filteredCharacters} />
          </Route>
          <Route path="/character/:id" render={renderDetail} />
        </Switch>
      </div>
    </div>
  );
};

export default App;

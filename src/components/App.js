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
  const [status, setStatus] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const handleFilter = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
    } else if (inputChange.key === "species") {
      setSpecies(inputChange.value);
    } else if (inputChange.key === "status") {
      const indexStatus = status.indexOf(inputChange.value);
      if (indexStatus === -1) {
        const newStatus = [...status, inputChange.value];
        setStatus(newStatus);
      } else {
        const newStatus = [...status];
        newStatus.splice(indexStatus, 1);
        setStatus(newStatus);
      }
    }
  };
  console.log(status);
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(name.toLowerCase());
    })
    .filter((character) => {
      return species === "All" ? true : character.species === species;
    })
    .filter((character) => {
      return status.length === 0 ? true : status.includes(character.status);
    });

  const getStatus = () => {
    const status = characters.map((character) => character.status);
    return [...new Set(status)];
  };

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
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Filters
                name={name}
                species={species}
                handleFilter={handleFilter}
                status={getStatus()}
              />
              <CharacterList characters={filteredCharacters} />
            </Route>
            <Route path="/character/:id" render={renderDetail} />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default App;

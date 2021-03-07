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
  // This function registers the changes on all the inputs and updates their state
  const handleFilter = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
    } else if (inputChange.key === "species") {
      setSpecies(inputChange.value);
    } else if (inputChange.key === "status") {
      // we do this so we can go through the array so we can get the index and check whether it is already on the array or not.
      const indexStatus = status.indexOf(inputChange.value);
      if (indexStatus === -1) {
        const newStatus = [...status, inputChange.value];
        setStatus(newStatus);
      } else {
        // We create a new array so we can use a splice method on it. We do this, so we can remove the elements that are already in the array. Then we save this  new array on the 'status' state.
        const newStatus = [...status];
        newStatus.splice(indexStatus, 1);
        setStatus(newStatus);
      }
    }
  };
  // apply filters functionality to inputs
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
  // this funtion is to avoids rendering every status from every character on the checkbox options
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
                statusOptions={getStatus()}
                status={status}
              />
              <CharacterList characters={filteredCharacters} />
            </Route>
            {/* This dynamic route let us share links and paste then in browsers */}
            <Route path="/character/:id" render={renderDetail} />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default App;

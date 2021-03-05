import CharacterCard from "./CharacterCard";
import "../stylesheets/characterList.scss";
import parasites from "../images/parasites.png";

const CharacterList = (props) => {
  // To sort them by name, it gets the index, so you need to specify the data you want to sort it by.
  const sortedList = props.characters.sort((a, b) =>
    a.name > b.name ? 1 : a.name < b.name ? -1 : 0
  );

  const characterData = sortedList.map((eachCharacter) => {
    return (
      <li key={eachCharacter.id} className="cardList__eachCard">
        <CharacterCard info={eachCharacter} />
      </li>
      // Since characterData is an array, we have to do a ternary conditional below and set length>0 so it renders the list
    );
  });
  return (
    <ul className="cardList">
      {characterData.length > 0 ? (
        characterData
      ) : (
        <li className="cardList__notFound">
          Not a character, it's a parasite!{" "}
          <img
            className="cardList__notFound--parasite"
            src={parasites}
            alt=""
          />
        </li>
      )}
    </ul>
  );
};

export default CharacterList;

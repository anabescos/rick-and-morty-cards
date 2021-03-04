import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  // To sort them by name, it gets the index, so you need to specify the data you want to sort it by.
  const sortedList = props.characters.sort((a, b) =>
    a.name > b.name ? 1 : a.name < b.name ? -1 : 0
  );
  console.log(sortedList);
  const characterData = sortedList.map((eachCharacter) => {
    return (
      <li key={eachCharacter.id}>
        <CharacterCard info={eachCharacter} />
      </li>
    );
  });
  return (
    <ul>
      {characterData.length > 0 ? (
        characterData
      ) : (
        <p>This character does not exist</p>
      )}
    </ul>
  );
};

export default CharacterList;

import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterData = props.characters.map((eachCharacter) => {
    console.log(eachCharacter);
    return (
      <li key={eachCharacter.id}>
        <CharacterCard info={eachCharacter} />
      </li>
    );
  });
  return <ul>{characterData}</ul>;
};

export default CharacterList;

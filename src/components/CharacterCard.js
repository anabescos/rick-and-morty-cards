import CharacterDetail from "./CharacterDetail";

function CharacterCard(props) {
  return (
    <>
      <h3>{props.info.name}</h3>
      <img src={props.info.image} alt={props.info.name} />
      <h4>{props.info.species}</h4>
    </>
  );
}

export default CharacterCard;

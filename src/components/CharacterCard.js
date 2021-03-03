import { Link } from "react-router-dom";

function CharacterCard(props) {
  return (
    <>
      <Link to={`/character/${props.info.id}`}>
        <h3>{props.info.name}</h3>
        <img src={props.info.image} alt={props.info.name} />
        <h4>{props.info.species}</h4>
      </Link>
    </>
  );
}

export default CharacterCard;

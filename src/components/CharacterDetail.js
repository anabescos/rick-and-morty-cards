import { Link } from "react-router-dom";

function CharacterDetail(props) {
  return (
    <section>
      <Link to="/"> Return </Link>
      <img
        src={props.selectedCharacter.image}
        alt={props.selectedCharacter.name}
      />
      <ul>
        <li>Name:{props.selectedCharacter.name}</li>
        <li>Gender:{props.selectedCharacter.gender} </li>
        <li>Species:{props.selectedCharacter.species}</li>
        <li>Origin:{props.selectedCharacter.origin}</li>
        <li>Number of episodes featured:{props.selectedCharacter.episodes}</li>
      </ul>
    </section>
  );
}

export default CharacterDetail;

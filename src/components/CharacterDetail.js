import { Link } from "react-router-dom";

function CharacterDetail(props) {
  return (
    <section className="details">
      <Link className="details__link" to="/">
        {" "}
        Return{" "}
      </Link>
      <img
        className="details__img"
        src={props.selectedCharacter.image}
        alt={props.selectedCharacter.name}
      />
      <ul className="details__list">
        <li className="details__list--name">
          Name:{props.selectedCharacter.name}
        </li>
        <li className="details__list--gender">
          Gender:{props.selectedCharacter.gender}{" "}
        </li>
        <li className="details__list--species">
          Species:{props.selectedCharacter.species}
        </li>
        <li className="details__list--origin">
          Origin:{props.selectedCharacter.origin}
        </li>
        <li className="details__list--episodes">
          Number of episodes featured:{props.selectedCharacter.episodes}
        </li>
      </ul>
    </section>
  );
}

export default CharacterDetail;

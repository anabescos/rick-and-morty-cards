import { Link } from "react-router-dom";
import PickleRick from "../images/PickleRick.png";
import "../stylesheets/characterDetail.scss";

function CharacterDetail(props) {
  if (props.selectedCharacter === undefined) {
    return (
      <>
        <Link className="link" to="/">
          {" "}
          Return{" "}
        </Link>
        <div className="pickleContainer">
          <img
            className="pickleContainer__img"
            src={PickleRick}
            alt="character not found"
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Link className="link" to="/">
          {" "}
          Return{" "}
        </Link>
        <section className="details">
          <img
            className="details__img"
            src={props.selectedCharacter.image}
            alt={props.selectedCharacter.name}
          />
          <ul className="details__list">
            <li className="details__list--data">
              Name:{" "}
              <span className="description">
                {" "}
                {props.selectedCharacter.name}
              </span>
            </li>
            <li className="details__list--data">
              Gender:{" "}
              <span className="description">
                {props.selectedCharacter.gender}
              </span>
            </li>
            <li className="details__list--data">
              Species:{" "}
              <span className="description">
                {props.selectedCharacter.species}
              </span>
            </li>
            <li className="details__list--data">
              Origin:{" "}
              <span className="description">
                {props.selectedCharacter.origin}
              </span>
            </li>
            <li className="details__list--data">
              Number of episodes featured:{" "}
              <span className="description">
                {props.selectedCharacter.episodes}
              </span>
            </li>
          </ul>
        </section>
      </>
    );
  }
}

export default CharacterDetail;

import { Link } from "react-router-dom";
import PickleRick from "../images/PickleRick.png";
import "../stylesheets/characterDetail.scss";
import PropTypes from "prop-types";

function CharacterDetail(props) {
  if (props.selectedCharacter === undefined) {
    return (
      <>
        {" "}
        <button className="linkButton">
          <Link className="link" to="/">
            Home
          </Link>
        </button>
        <div className="pickleContainer">
          <p className="pickleContainer__message">404 error URL not found</p>
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
        <button className="linkButton">
          <Link className="link" to="/">
            {" "}
            Home{" "}
          </Link>
        </button>
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
CharacterDetail.propTypes = {
  selecterCharacter: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
    id: PropTypes.number,
    gender: PropTypes.string,
    origin: PropTypes.string,
    episodes: PropTypes.string,
  }),
};

export default CharacterDetail;

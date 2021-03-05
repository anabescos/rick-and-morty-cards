import { Link } from "react-router-dom";
import "../stylesheets/characterCard.scss";

function CharacterCard(props) {
  const statusIcon = () => {
    if (props.info.status === "Dead") {
      return <i className="fas fa-skull-crossbones"></i>;
    } else if (props.info.status === "unknown") {
      return <i className="fas fa-question"></i>;
    } else {
      return <i className="fas fa-heartbeat"></i>;
    }
  };
  const speciesIcon = () => {
    return props.info.species === "Alien" ? (
      <i className="fas fa-pastafarianism"></i>
    ) : (
      <i className="fas fa-user"></i>
    );
  };

  return (
    <>
      <Link to={`/character/${props.info.id}`}>
        <img
          className="cardList__eachCard--img"
          src={props.info.image}
          alt={props.info.name}
        />
        <h3 className="cardList__eachCard--name">{props.info.name}</h3>
        <h4 className="cardList__eachCard--species">{props.info.species}</h4>
        <span className="cardList__eachCard--icon">{statusIcon()}</span>
        <span className="cardList__eachCard--icon">{speciesIcon()}</span>
      </Link>
    </>
  );
}

export default CharacterCard;

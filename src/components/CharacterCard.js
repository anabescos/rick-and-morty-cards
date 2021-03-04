import { Link } from "react-router-dom";

function CharacterCard(props) {
  const statusIcon = () => {
    if (props.info.status === "Dead") {
      return <i class="fas fa-skull-crossbones"></i>;
    } else if (props.info.status === "unknown") {
      return <i className="fas fa-question"></i>;
    } else {
      return <i class="fas fa-heartbeat"></i>;
    }
  };
  const speciesIcon = () => {
    return props.info.species === "Alien" ? (
      <i class="fas fa-pastafarianism"></i>
    ) : (
      <i class="fas fa-user"></i>
    );
  };

  return (
    <>
      <Link to={`/character/${props.info.id}`}>
        <img src={props.info.image} alt={props.info.name} />
        <h3>{props.info.name}</h3>
        <h4>{props.info.species}</h4>
        <span>{statusIcon()}</span>
        <span>{speciesIcon()}</span>
      </Link>
    </>
  );
}

export default CharacterCard;

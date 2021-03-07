import parasites from "../images/BG2.jpg";

const NotFound = () => {
  return (
    <li className="cardList__notFound">
      Not a character, it's a parasite!{" "}
      <img
        className="cardList__notFound--parasite"
        src={parasites}
        alt="this character does not exist"
      />
    </li>
  );
};

export default NotFound;

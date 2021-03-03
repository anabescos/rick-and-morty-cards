function CharacterDetail(props) {
  console.log(props);
  return (
    <section>
      {/* <img
        className="card__img"
        src={props.selectedCharacter.image}
        alt={props.selectedCharacter.name}
      /> */}
      <ul className="ml-1 mt-1">
        {/* <li>Género:{props.selectedCharacter.gender} </li> */}
        <li>nombre: Hola</li>
      </ul>
    </section>
  );
}

export default CharacterDetail;

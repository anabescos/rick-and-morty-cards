const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "species",
      value: ev.target.value,
    });
  };

  return (
    <>
      <label className="filters__form--speciesTitle" htmlFor="species">
        Filter by species:
      </label>
      <select
        className="filters__form--speciesInput"
        name="species"
        id="species"
        value={props.species}
        onChange={handleChange}
      >
        <option value="All">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};
export default FilterBySpecies;

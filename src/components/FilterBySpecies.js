const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "species",
      value: ev.target.value,
    });
  };

  return (
    <>
      <label htmlFor="species">Filtrar por especie:</label>
      <input type="text" name="species" id="species" onChange={handleChange} />
    </>
  );
};
export default FilterBySpecies;

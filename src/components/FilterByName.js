const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.target.value,
    });
  };

  return (
    <>
      <label className="form__label display-block" htmlFor="name">
        Filter by name:
      </label>
      <input
        className="form__input-text"
        name="name"
        type="text"
        value={props.name}
        id="name"
        onChange={handleChange}
      />
    </>
  );
};
export default FilterByName;

import "../stylesheets/filterByName.scss";
import PropTypes from "prop-types";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.target.value,
    });
  };

  return (
    <>
      <label className="filters__form--nameTitle" htmlFor="name">
        Filter by name:
      </label>
      <input
        className="filters__form--nameInput"
        name="name"
        type="text"
        value={props.name}
        id="name"
        onChange={handleChange}
      />
    </>
  );
};
FilterByName.propTypes = {
  name: PropTypes.string,
};
export default FilterByName;

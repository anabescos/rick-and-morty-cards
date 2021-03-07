import "../stylesheets/filterByStatus.scss";
import PropTypes from "prop-types";

const FilterByStatus = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "status",
      value: ev.target.value,
    });
  };

  const statusList = props.statusOptions.map((eachStatus, i) => {
    return (
      <label key={i} className="filters__form--statusSubtitle">
        <input
          className="filters__form--box"
          type="checkbox"
          name="status"
          value={eachStatus}
          checked={props.status.includes(eachStatus)}
          onChange={handleChange}
        />
        {eachStatus}
      </label>
    );
  });
  return (
    <>
      <legend className="checkboxWrapper">
        <label className="filters__form--statusTitle" htmlFor="status">
          Status:
        </label>
        {statusList}
      </legend>
    </>
  );
};

FilterByStatus.propTypes = {
  status: PropTypes.array,
};
export default FilterByStatus;

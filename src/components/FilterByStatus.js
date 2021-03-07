import "../stylesheets/filterByStatus.scss";
import PropTypes from "prop-types";

const FilterByStatus = (props) => {
  // this funtion lifts the key and the value of the status checkbox
  const handleChange = (ev) => {
    props.handleFilter({
      key: "status",
      value: ev.target.value,
    });
  };
  // we go through the array which has a lifting method and we return a label and an input checkbox for each element of the array
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
      {/* here we render a label and the list with all the labels and inputs from the statusList */}
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

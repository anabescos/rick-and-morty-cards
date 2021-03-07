import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import "../stylesheets/filters.scss";
import PropTypes from "prop-types";
import FilterByStatus from "./FilterByStatus";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleClick = () => {
    // props.resetButton();
  };

  return (
    <section className="filters">
      <form className="filters__form" onSubmit={handleSubmit}>
        <FilterByName handleFilter={props.handleFilter} name={props.name} />
        <FilterBySpecies
          handleFilter={props.handleFilter}
          species={props.species}
        />
        <FilterByStatus
          handleFilter={props.handleFilter}
          status={props.status}
          statusOptions={props.statusOptions}
        />
        <button className="resetButton" value="reset" onClick={handleClick}>
          <i className="fas fa-undo-alt"></i>
        </button>
      </form>
    </section>
  );
};
Filters.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
};
export default Filters;

import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import "../stylesheets/filters.scss";
import PropTypes from "prop-types";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className="filters">
      <form className="filters__form" onSubmit={handleSubmit}>
        <FilterByName handleFilter={props.handleFilter} name={props.name} />
        <FilterBySpecies
          handleFilter={props.handleFilter}
          species={props.species}
        />
      </form>
    </section>
  );
};
Filters.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
};
export default Filters;

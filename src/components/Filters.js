import FilterByName from "./FilterByName";

const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterByName handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};
export default Filters;

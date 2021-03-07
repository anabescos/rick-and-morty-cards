const FilterByStatus = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "status",
      value: ev.target.value,
    });
  };

  const statusList = props.status.map((eachStatus, i) => {
    return (
      <label key={i} className="">
        <input
          type="checkbox"
          name="status"
          value={eachStatus}
          onChange={handleChange}
        />
        {eachStatus}
      </label>
    );
  });
  return (
    <>
      <label className="" htmlFor="status">
        Status:
      </label>
      {statusList}
    </>
  );
};

export default FilterByStatus;

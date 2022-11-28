const CenterContent = () => {
  return (
    <>
      <div className="search-bar col-7">
        <div className="d-flex">
          <span className="input-group-text " id="basic-addon1">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="جستوجوی پیشرفته ..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </>
  );
};

export default CenterContent;

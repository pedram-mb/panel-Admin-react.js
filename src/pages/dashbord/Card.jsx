import React from "react";

const Cards = ({classCa , numValue , Title , icon , infoTitle}) => {
  return (
    <>
      <div className={`card ${classCa}`}>
        <div className="card-body">
          <h4 className="mt-1 p-1">{numValue}</h4>
          <div className="d-flex justify-content-between mt-2 p-2">
            <h5 className="card-title">{Title}</h5>
            <span>
              <i className={`${icon}`}></i>
            </span>
          </div>
          <h6 className="card-subtitle mb-2  mt-1 p-1">
            {infoTitle}
          </h6>
        </div>
      </div>
    </>
  );
};
export default Cards;

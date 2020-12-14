import React from "react";
import Loader from "../Loader/Loader";
import moment from 'moment';

const CardRepository = ({ data, loader }) => {
  if (loader) return (
      <div className="overflow-hidden d-flex justify-content-center">
        <Loader />
      </div>
    );

  return (
    <>
      {data?.map((item, index) => (
        <div key={index} className="card mb-5 shadow-sm border-0">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={item.owner.avatar_url}
                className="card-img"
                alt="avatar"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">{item.name}</h1>
                <p className="card-text">{item.description}.</p>
                <p className="card-text">
                  <small className="text-muted">
                    Submited  {moment(item.created_at.split(/[T]/)[0], 'YYYY.MM.DD').fromNow()}
                  </small>
                </p>
                <span className="text-white">
                  <small className="bg-warning p-1">stars : {item.forks}</small>
                  <small className="ml-5 p-1 bg-info">
                    open_issues : {item.open_issues}
                  </small>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardRepository;

import React from 'react';
import {Link} from 'react-router-dom';

export const Card = ({charac}) => {
  const img = `/assets/${charac.type}-${charac.id}.png`;
  const url = `/character/${charac.id}`;
  return (
    <div className="col my-2">
      <div className="card border-opacity-100" style={{ width: "18rem", border: "2px solid rgba(128, 0, 128, .5)", }}>
        <img src={img} className="card-img-top" alt={charac.id} />
        <div className="card-body">
          <h3 className="card-title">{charac.name}</h3>
          <Link className="btn btn-info" to={url}>See more...</Link>
        </div>
      </div>
    </div>
  )
}
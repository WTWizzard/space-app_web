import React from "react";
import { NavLink } from "react-router-dom";
import "./archive-card-styles.css";

const ArchiveCard = ({ data }) => {
  return (
    <div className="archive-card">
      {data.media_type === "image" ? (
        <img className="archive-card-img" src={data.url} alt="Card" />
      ) : (
        <iframe
          width="100%"
          height="300"
          src={data.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <div className="archive-card-content">
        <p className="archive-card-title">{data.title}</p>
        <div className="archive-card-seeMore-container">
          <span className="archive-card-date">{data.date}</span>
          <NavLink
            className={'archive-card-seeMore'} 
            to={`/archive/${data.date}`}
          >
            read more <span className="archive-card-seeMore-icon"> ᐅ</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ArchiveCard;

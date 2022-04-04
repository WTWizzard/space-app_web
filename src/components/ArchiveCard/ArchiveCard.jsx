import React from "react";
import { NavLink } from "react-router-dom";
import "./archive-card-styles.css";

const ArchiveCard = ({ data }) => {
  return (
    <div className="archive-card">
      <NavLink
        style={{ textDecoration: "none", color: "#000" }}
        to={`/archive/${data.date}`}
      >
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
          <span className="archive-card-date">{data.date}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default ArchiveCard;

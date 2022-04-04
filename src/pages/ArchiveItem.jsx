import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APOD_URL } from "../constants";
import "../styles/archive-item-page.css";

const ArchiveItem = () => {
  const [apiData, setApiData] = useState({ info: [], didItFetch: false });

  const { date } = useParams();

  useEffect(() => {
    fetch(`${APOD_URL}&date=${date}`)
      .then((data) => data.json())
      .then((res) => {
        setApiData({ info: res, didItFetch: true });
      });
  }, [date]);

  if (!apiData.didItFetch) {
    return (
      <section className="main__archive-item">
        <div className="archive__content">
          <h1 className="archive-title">Archive Item is loading:</h1>
          <div className="loading-circle">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="main__archive-item">
      <div className="archive__content">
        <h1 className="archive-title">Archive Item:</h1>
        <div className="archive-fetched">
          <div className="archive-fetched_media-container">
            {apiData.info.media_type === "image" ? (
              <img
                src={apiData.info.hdurl}
                alt={apiData.info.title}
                className="archive-picture"
              />
            ) : (
              <iframe
                width="560"
                height="315"
                src={apiData.info.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className="archive-fetched_text-container">
            <h2 className="archive-picture-title">{apiData.info.title}</h2>
            <span className="archive-picture-date">{apiData.info.date}</span>
            <p className="archive-picture-author">{apiData.info.copyright}</p>
            <p className="archive-picture-description">
              {apiData.info.explanation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchiveItem;

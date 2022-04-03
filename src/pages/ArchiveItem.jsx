import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APOD_URL } from "../constants";
import "../styles/apod-page.css";

const ArchiveItem = () => {
  const [apiData, setApiData] = useState({ info: [], didItFetch: false });

  const {date} = useParams();

  useEffect(() => {
    fetch(`${APOD_URL}&date=${date}`)
      .then((data) => data.json())
      .then((res) => {
        setApiData({ info: res, didItFetch: true });
      });
  }, [date]);

  if (!apiData.didItFetch) {
    return (
      <section className="main__apod">
        <div className="apod__content">
          <h1 className="apod-title">Archive Item is loading:</h1>
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
    <section className="main__apod">
      <div className="apod__content">
        <h1 className="apod-title">Archive Item:</h1>
        <div className="apod-fetched">
          <h2 className="apod-picture-title">{apiData.info.title}</h2>
          <span className="apod-picture-date">{apiData.info.date}</span>
          <p className="apod-picture-author">{apiData.info.copyright}</p>
          <img
            src={apiData.info.hdurl}
            alt={apiData.info.title}
            className="apod-picture"
          />
          <p className="apod-picture-description">{apiData.info.explanation}</p>
        </div>
      </div>
    </section>
  );
};

export default ArchiveItem;

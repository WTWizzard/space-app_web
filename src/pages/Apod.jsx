import React, { useEffect, useState } from "react";
import { APOD_URL } from "../constants";
import "../styles/apod-page.css";

const Apod = () => {
  const [apiData, setApiData] = useState({ info: [], didItFetch: false });

  useEffect(() => {
    fetch(APOD_URL)
      .then((data) => data.json())
      .then((res) => {
        setApiData({ info: res, didItFetch: true });
      });
  }, []);

  if (!apiData.didItFetch) {
    return (
      <section className="main__apod">
        <div className="apod__content">
          <h1 className="apod-title">Astronomic Picture of the Day:</h1>
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
        <h1 className="apod-title">Astronomic Picture of the Day:</h1>
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

export default Apod;

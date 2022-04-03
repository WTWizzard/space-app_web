import React, { useEffect, useState } from "react";
import { APOD_URL } from "../constants";
import { NavLink } from "react-router-dom";
import "../styles/home-page.css";

const Home = () => {
  const [apiData, setApiData] = useState({ info: [], didItFetch: false });

  useEffect(() => {
    fetch(`${APOD_URL}&count=3`)
      .then((data) => data.json())
      .then((res) => {
        setApiData({ info: res, didItFetch: true });
      });
  }, []);

  return (
    <section className="main__home">
      <div className="home__parallax">
        <div className="home__parallax__content">
          <div className="home__parallax-intro">
            <h1 className="home-title">Bring a piece of space in your hand</h1>
            <div className="home__img-container">
              {apiData.info.map((item, idx) => {
                return (
                  <NavLink key={idx} to={`/archive/${item.date}`}>
                    <img key={idx} src={item.url} alt="" />
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div className="home__parallax-navigate">
            <p className="home__parallax-navigate-archive home-title secondary">
              Explore previous cosmic images:
              <NavLink to="/archive" className={"parallax-navigate-link"}>
                Surf
              </NavLink>
            </p>
            <p className="home__parallax-navigate-archive home-title secondary">
              Astronomic Pic of the Day:
              <NavLink to="/apod" className={"parallax-navigate-link"}>
                Check
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

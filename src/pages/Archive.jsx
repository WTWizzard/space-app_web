import React, { useState, useEffect } from "react";
import ArchiveCard from "../components/ArchiveCard/ArchiveCard";
import Select from "../components/Select";
import { APOD_URL } from "../constants";
import "../styles/archive-page.css";

const YEARS = [
  1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
  2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
  2021, 2022,
];

const DAYS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const MONTHS = [
  "January",
  "Ferbuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Archive = () => {
  const [apiData, setApiData] = useState({ info: [], didItFetch: false });

  const [date, setDate] = useState({
    startDate: new Date("2016-1-1"),
    endDate: new Date("2016-2-1"),
  });
  const dateFormatter = (dateInput) => {
    const year = dateInput.getFullYear();
    const month = dateInput.getMonth() + 1;
    const day = dateInput.getDate();
    return `${year}-${month}-${day}`;
  };

  const handleNavForward = () => {
    setApiData({ ...apiData, didItFetch: false });
    setDate({
      startDate: new Date(date.endDate),
      endDate: new Date(date.endDate.setMonth(date.endDate.getMonth() + 1)),
    });
  };

  const handleNavBackward = () => {
    setApiData({ ...apiData, didItFetch: false });
    setDate({
      startDate: new Date(
        date.startDate.setMonth(date.startDate.getMonth() - 1)
      ),
      endDate: new Date(date.endDate.setMonth(date.endDate.getMonth() - 1)),
    });
  };
  useEffect(() => {
    fetch(
      `${APOD_URL}&start_date=${dateFormatter(
        date.startDate
      )}&end_date=${dateFormatter(date.endDate)} `
    )
      .then((data) => data.json())
      .then((res) => {
        setApiData({ info: res, didItFetch: true });
      });
  }, [date]);

  return (
    <section className="main__archive">
      <div className="main__archive__header">
        <h1 className="archive-title">Archive:</h1>
        <div className="archive__searchByDate">
          <p className="archive__searchByDate-tooltip">
            the range of search is limited (1995 jun 20 - present)
          </p>
          <div className="archive__searchByDate-selects">
            <Select data={YEARS} name={"years"} />
            <Select data={MONTHS} name={"month"} />
            <Select data={DAYS} name={"day"} />
          </div>
        </div>
      </div>
      <div className="main__archive__body">
        {apiData.didItFetch ? (
          <div className="main__archive__body-container">
            {apiData.info.map((item, idx) => {
              return <ArchiveCard key={idx} data={item} />;
            })}
          </div>
        ) : (
          <div className="loading-circle">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </div>
      <div className="archive__navigation">
        <span
          className="archive__navigation-arrows"
          onClick={handleNavBackward}
        >
          &#5130;
        </span>
        <span className="archive__navigation-date-range">
          {`${dateFormatter(date.startDate)} - ${dateFormatter(date.endDate)}`}
        </span>
        <span className="archive__navigation-arrows" onClick={handleNavForward}>
          &#5125;
        </span>
      </div>
    </section>
  );
};
export default Archive;

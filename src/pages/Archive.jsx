import React, { useState, useEffect } from "react";
import ArchiveCard from "../components/ArchiveCard/ArchiveCard";
import Select from "../components/Select";
import { APOD_URL } from "../constants";
import "../styles/archive-page.css";
import LoadingCircle from "../components/loadingCircle/loadingCircle";
import ArchiveNav from "../components/archiveNav/ArchiveNav";

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
  { name: "January", value: 1 },
  { name: "Ferbuary", value: 2 },
  { name: "March", value: 3 },
  { name: "April", value: 4 },
  { name: "May", value: 5 },
  { name: "June", value: 6 },
  { name: "July", value: 7 },
  { name: "August", value: 8 },
  { name: "September", value: 9 },
  { name: "October", value: 10 },
  { name: "November", value: 11 },
  { name: "December", value: 12 },
];

const Archive = () => {
  const [apiData, setApiData] = useState({ info: [], didItFetch: false });

  const [date, setDate] = useState({
    startDate: new Date("2016-1-1"),
    endDate: new Date("2016-2-1"),
  });

  const [selected, setSelected] = useState({
    year: "",
    month: "",
    day: "",
  });

  const [search, setSearch] = useState(false);

  const dateFormatter = (dateInput) => {
    const year = dateInput.getFullYear();
    const month = dateInput.getMonth() + 1;
    const day = dateInput.getDate();
    return `${year}-${month}-${day}`;
  };

  const handleSelect = (name, value) => {
    setSelected({ ...selected, [name]: value });
  };

  const handleSearch = () => setSearch(true);

  useEffect(() => {
    if (search) {
      fetch(
        `${APOD_URL}&date=${
          selected.year + "-" + selected.month + "-" + selected.day
        }`
      )
        .then((data) => data.json())
        .then((res) => {
          setApiData({ info: res, didItFetch: true });
        });
    }
  }, [search, selected]);

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
    setSearch(false);
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
            <Select data={YEARS} onSelect={handleSelect} name={"year"} />
            <Select data={MONTHS} onSelect={handleSelect} name={"month"} />
            <Select data={DAYS} onSelect={handleSelect} name={"day"} />
            <button
              className="archive__searchByDate-btn"
              onClick={handleSearch}
            >
              search
            </button>
          </div>
        </div>
      </div>
      <div className="main__archive__body">
        {apiData.didItFetch ? (
          <div className="main__archive__body-container">
            {!search ? (
              apiData.info.map((item, idx) => {
                return <ArchiveCard key={idx} data={item} />;
              })
            ) : (
              <ArchiveCard data={apiData.info} />
            )}
          </div>
        ) : (
          <LoadingCircle />
        )}
      </div>
      <ArchiveNav
        formatter={dateFormatter}
        dateState={date}
        dateSetter={setDate}
        apiState={apiData}
        apiSetter={setApiData}
      />
    </section>
  );
};
export default Archive;

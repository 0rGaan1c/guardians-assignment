import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import { hospitalsData } from "../data";
import Fuse from "fuse.js";

const Home = () => {
  const [hospitalsToShow, setHospitalsToShow] = useState(hospitalsData);
  const [currentHospitals, setCurrentHospitals] = useState(hospitalsData);

  const fuse = new Fuse(hospitalsToShow, {
    keys: ["Name", "Area"],
    isCaseSensitive: false,
    threshold: 0.5,
  });

  const onSearchTextChange = (searchText) => {
    const results = fuse.search(searchText);
    const hospitalsAfterSearch = searchText
      ? results.map((result) => result.item)
      : hospitalsData;
    setHospitalsToShow(hospitalsAfterSearch);
    setCurrentHospitals(hospitalsAfterSearch);
  };

  return (
    <>
      <Navbar />
      <SearchBar onSearchTextChange={onSearchTextChange} />
      <Table
        hospitalsToShow={hospitalsToShow}
        setHospitalsToShow={setHospitalsToShow}
        currentHospitals={currentHospitals}
      />
    </>
  );
};

export default Home;

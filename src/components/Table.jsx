import { useEffect, useState } from "react";
import { propertyNames } from "../data";
import SortAsc from "../assets/sortdown.png";
import SortDesc from "../assets/sortup.png";

const isNameOrAreaProperty = (property) => {
  // propertyNames.forEach((name) => {

  // })

  // if (propertyNames.includes(property)) {
  //   return true;
  // }

  return propertyNames.includes(property);

  // return property === "Name" || property === "Area" || property === "Lat";
  // return true;
};

const generateObj = () => {
  const obj = {};
  propertyNames.forEach((name) => {
    obj[name] = "";
  });

  return obj;
};

const Table = ({ hospitalsToShow, setHospitalsToShow, currentHospitals }) => {
  // const [sortState, setSortState] = useState({
  //   Name: "",
  //   Area: "",
  //   Lat: "",
  // });
  const [sortState, setSortState] = useState(generateObj());
  console.log(sortState);
  const [currentPropertyToSort, setCurrentPropertySort] = useState("");

  // const sortedHospitals = () => {

  // }

  const handleSorting = (propertyName) => {
    if (isNameOrAreaProperty(propertyName)) {
      setSortState((prevState) => ({
        ...prevState,
        [propertyName]:
          prevState[propertyName] === ""
            ? "asc"
            : prevState[propertyName] === "asc"
            ? "desc"
            : "",
      }));
      setCurrentPropertySort(propertyName);
    }
  };

  useEffect(() => {
    if (currentPropertyToSort) {
      const sortedHospitals = [...currentHospitals];
      const sortOrder = sortState[currentPropertyToSort];

      if (sortOrder === "asc") {
        sortedHospitals.sort((a, b) =>
          a[currentPropertyToSort] > b[currentPropertyToSort]
            ? 1
            : b[currentPropertyToSort] > a[currentPropertyToSort]
            ? -1
            : 0
        );
      }
      if (sortOrder == "desc") {
        sortedHospitals.sort((a, b) =>
          a[currentPropertyToSort] > b[currentPropertyToSort]
            ? -1
            : b[currentPropertyToSort] > a[currentPropertyToSort]
            ? 1
            : 0
        );
      }
      setHospitalsToShow(sortedHospitals);
    }
  }, [sortState, currentPropertyToSort, setHospitalsToShow, currentHospitals]);

  return (
    <div className="overflow-x-auto my-10">
      <table className="table table-sm">
        <thead>
          <tr>
            {propertyNames.map((propertyName, idx) => {
              return (
                <td
                  key={idx}
                  onClick={() => {
                    handleSorting(propertyName);
                  }}
                  className={`${
                    isNameOrAreaProperty(propertyName) && "cursor-pointer"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {propertyName}
                    {isNameOrAreaProperty(propertyName)
                      ? sortState[propertyName] === "asc" && (
                          <img src={SortAsc} className="w-4 h-4" />
                        )
                      : ""}
                    {isNameOrAreaProperty(propertyName)
                      ? sortState[propertyName] === "desc" && (
                          <img src={SortDesc} className="w-4 h-4" />
                        )
                      : ""}
                  </div>
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {hospitalsToShow.length > 0 ? (
            hospitalsToShow?.map(
              ({ Name, Address, Lat, Lng, Area, Type }, idx) => {
                return (
                  <tr key={idx}>
                    <td>{Name}</td>
                    <td>{Address}</td>
                    <td>{Lat}</td>
                    <td>{Lng}</td>
                    <td>{Area}</td>
                    <td>{Type}</td>
                  </tr>
                );
              }
            )
          ) : (
            <p className="mt-4">No results found.</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

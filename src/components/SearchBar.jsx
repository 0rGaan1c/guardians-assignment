import Search from "../assets/search.svg";

const SearchBar = ({ onSearchTextChange }) => {
  return (
    <div className="bg-dark-blue w-56 h-9 rounded-xl ml-auto mt-14 relative">
      <img
        src={Search}
        alt="search icon"
        className="w-4 h-4 absolute mt-3 ml-2"
      />
      <input
        type="text"
        className="bg-transparent h-9 text-xs font-medium pl-8 outline-none text-white"
        placeholder="Search by Name or Area"
        onChange={(e) => {
          onSearchTextChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;

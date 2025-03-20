import { useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      window.location.href = `https://www.google.com/search?q=${searchText}`;
    }
  };

  return (
    <>
      <div className="w-full mt-3">
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          onKeyDown={handleKeyPress}
          placeholder="Google Search..."
          autoFocus
          className="w-full rounded-full border-1 border-gray-300 p-2 bg-gray-200 text-black px-6 opacity-50 focus:border-gray-500 focus:outline-none"
        />
      </div>
    </>
  );
};

export default SearchBar;

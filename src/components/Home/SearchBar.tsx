import { motion } from "framer-motion";
import Fuse from "fuse.js";
import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { search } from "../../constants/search";

const SearchBar: React.FC = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any>([]);

  const fuse = new Fuse(search, {
    keys: [
      "section",
      "keyWords",
      "data.title",
      "data.desc",
      "data.highlights",
      "data.skills",
      "data.link",
    ],
    includeScore: true,
    threshold: 0.3,
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);

    if (searchQuery) {
      const searchResults = fuse
        .search(searchQuery)
        .map((result) => result.item);
      console.log("searchResults", searchResults);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="search-bar-component">
      <h1 className="heading" data-color-inverted={true}>
        Search More About Avi.
      </h1>

      <motion.div
        className="search-bar-col-flex"
        animate={{
          width: focus || results.length > 0 ? "100%" : "600px",
          height: focus || results.length > 0 ? "700px" : "auto",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div
          className={`search-bar-flex ${
            focus || results.length > 0 ? "focus" : ""
          }`}
        >
          <FiSearch className={`icon`} />
          <input
            className="search-input"
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search..."
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />

          <FiX
            className={`icon x-icon`}
            onClick={() => {
              setQuery("");
              setFocus(false);
              setResults([]);
            }}
          />
        </div>
        <div className="search-results">
          {results.map((result: any) => (
            <div key={result.id}>
              <h2>{result.section}</h2>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SearchBar;

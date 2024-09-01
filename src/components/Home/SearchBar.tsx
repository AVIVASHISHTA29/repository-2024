import { AnimatePresence, motion } from "framer-motion";
import Fuse from "fuse.js";
import React, { useEffect, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { search, TSearch } from "../../constants/search";

const SearchBar: React.FC = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any>([]);
  const [placeholderIndex, setPlaceholderIndex] = useState<number>(0);

  const placeholders = [
    "Avi's Work",
    "Avi's Projects",
    "Who is Avi?",
    "Avi's Skills",
    "Avi's Experience",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

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
          style={{ position: "relative" }}
        >
          <FiSearch className={`icon`} />

          {/* Animated placeholder container */}
          <AnimatePresence>
            {!focus && !query && (
              <motion.div
                key={placeholderIndex}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 0.5, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                className="animated-placeholder"
              >
                {placeholders[placeholderIndex]}
              </motion.div>
            )}
          </AnimatePresence>

          <input
            className="search-input"
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder=""
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            style={{ position: "relative" }}
          />

          <FiX
            className={`icon x-icon`}
            onClick={() => {
              setResults([]);
              setQuery("");
              setFocus(false);
            }}
          />
        </div>
        {results.length > 0 && (
          <motion.div
            className="search-results"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
          >
            {results.map((result: TSearch, index: number) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 15,
                  delay: index * 0.1,
                }}
                className="result-item"
              >
                <h1 className="result-heading">{result.section}</h1>
                <div className="result-data">
                  {result.data.map((data, i) => (
                    <motion.div
                      key={`${i}-${data.title}`}
                      className="result-item"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: i * 0.1 + 0.35,
                      }}
                    >
                      <h2 className="result-sub-heading">
                        {i + 1}. {data.title}
                      </h2>
                      <p className="result-sub-desc">{data.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SearchBar;

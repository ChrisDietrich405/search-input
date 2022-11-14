import React, { useRef, useState, useMemo } from "react";

const SearchBar = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const value = inputRef.current.value;
    setItems((prev) => [...prev, value]);
  };

  const filteredItems = useMemo(() =>  {
    return items.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase())
  }) 
},[items, query])

  return (
    <div>
      <h2>Search</h2>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        <label>
          Items:
          <input type="text" ref={inputRef} />
        </label>
        <button>add</button>
      </form>
      {filteredItems.map((item) => {
        return <h4>{item}</h4>;
      })}
    </div>
  );
};

export default SearchBar;

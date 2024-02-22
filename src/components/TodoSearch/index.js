import React from "react";
import "./TodoSearch.css";
import { useTodoContext } from "../../Context";

function TodoSearch() {
  const { searchValue, setSearchValue } = useTodoContext();

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}
export { TodoSearch };

import React, { useContext } from "react";
import { MixtapeContext } from "./MixtapeContext";

export const Controls = () => {
  const { genre, setGenre, sortOrder, setSortOrder } =
    useContext(MixtapeContext);
  return (
    <div className="controls">
      <select onChange={(e) => setGenre(e.target.value)} value={genre}>
        <option value="all">all</option>
        <option value="hip hop">hip hop</option>
        <option value="rap">rap</option>
        <option value="rock">rock</option>
        <option value="pop">pop</option>
      </select>
      <button
        onClick={() =>
          setSortOrder(sortOrder === "ascending" ? "descending" : "ascending")
        }
      >
        {sortOrder}
      </button>
    </div>
  );
};

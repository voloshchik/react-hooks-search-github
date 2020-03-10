import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

const Search = () => {
  const { show } = useContext(AlertContext);

  const onSubmit = event => {
    if (event.key === "Enter") {
      show("This is alert!");
      console.log("event.key", event.key);
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
        onKeyPress={onSubmit}
      />
    </div>
  );
};

export default Search;

import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { GithubContect } from "../context/github/githubContext";

const Search = () => {
  const { show } = useContext(AlertContext);
  const [value, setValue] = useState("");
  const github = useContext(GithubContect);
  const onSubmit = event => {
    if (event.key !== "Enter") {
      return;
    }
    if (value.trim()) {
      console.log("Make request with", value);
      github.search(value.trim())
    } else {
      show("Введите данные пользователя");
    }
  };

  return (
    <div className="form-group">
      <input
        value={value}
        onChange={event => setValue(event.target.value)}
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
        onKeyPress={onSubmit}
      />
    </div>
  );
};

export default Search;

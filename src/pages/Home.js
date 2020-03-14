import React, { useContext } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import { GithubContect } from "../context/github/githubContext";

const Home = () => {
  // const cards = new Array(15).fill("").map((_, i) => i);
  // console.log("cards", cards);
  const { loading, users } = useContext(GithubContect);
  console.log("object", users);
  return (
    <>
      <Search />

      {loading ? (
        <p className="text-center">загрузка</p>
      ) : (
        <div className="row">
          {users.map(user => {
            return (
              <div key={user.id} className="col-sm-4 mb-4">
                <Card user={user} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;

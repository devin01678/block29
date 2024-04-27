import { useState } from "react";
import PlayerCard from "../components/PlayerCard";

export default function AllPlayers({ players }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const searchResults = players.filter((player) => {
    if (searchValue.length < 1) {
      return;
    }
    const lowercaseName = player.name.toLowerCase();
    return lowercaseName.includes(searchValue.toLowerCase());
  });
  console.log(searchResults);
  console.log(searchValue);
  return (
    <>
      <label htmlFor="search" className="homeLabel">
        Search
      </label>
      <input
        className="homeInput"
        placeholder="Search"
        name="search"
        type="text"
        value={searchValue}
        onChange={handleChange}
      />
      {searchResults.length > 0
        ? searchResults.map((result) => {
            // console.log(searchResults);
            return <PlayerCard key={result.id} player={result} />;
          })
        : players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
    </>
  );
}

//we will use useEffect to fetch players, the result of that effect will be stored...
// useEffect is a hook that allows you to perform side effects in your component... side effect depends on variable or not..

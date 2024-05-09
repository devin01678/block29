import "./App.css";
import AllPlayers from "./pages/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchPlayers } from "./api";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function receivePlayers() {
      const receivedPlayers = await fetchPlayers();
      setPlayers(receivedPlayers);
    }
    receivePlayers();
  }, []);

  console.log(players);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPlayers players={players} />} />
          <Route
            path="/allplayers/:playerId"
            element={<SinglePlayer players={players} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

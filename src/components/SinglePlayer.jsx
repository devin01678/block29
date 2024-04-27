import { useParams } from "react-router-dom";
import PlayerCard from "./PlayerCard";

export default function SinglePlayer({ players }) {
  console.log(players);

  const { playerId } = useParams();

  const player = players.find((p) => p.id == playerId);

  if (players.length == 0) {
    return <div>Loading</div>;
  }

  if (!player) {
    return (
      <div>
        404 - Unless you have a time machine, this player does not exist
      </div>
    );
  }

  return <PlayerCard key={player.id} player={player} players={players} />;
}

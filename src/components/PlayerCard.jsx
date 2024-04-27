import { useNavigate, useParams } from "react-router-dom";

export default function PlayerCard({ player }) {
  const navigate = useNavigate();
  const { playerId } = useParams();

  function handleClick() {
    playerId ? navigate("/") : navigate(`/allplayers/${player.id}`);
  }
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline">{player.name}</h1>
        <span>{player.breed}</span>
        <img src={player.imageUrl} />
      </div>
      <div>
        <button onClick={handleClick} className="btn">
          {playerId ? "Back" : "Details"}
        </button>
      </div>
    </div>
  );
}

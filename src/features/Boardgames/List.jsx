import { use } from "react";
import { BoardgameItem } from "./BoardgameItem";

export function List({ games: gamesPromise }) {
  const games = use(gamesPromise);
  return games.map((game) => (
    <BoardgameItem
      key={game.id}
      name={game.name}
      thumbnail={game.thumbnail}
      id={game.id}
    />
  ));
}

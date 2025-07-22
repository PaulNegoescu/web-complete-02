import { useEffect, useState } from 'react';
import { BoardgameItem } from './BoardgameItem';

import styles from './Boardgames.module.css';
import { useAuthContext } from '../Auth/AuthContext';
import { Link } from 'react-router';

const apiUrl = import.meta.env.VITE_API_URL;

export function BoardgameList() {
  const [games, setGames] = useState(null);

  const {accessToken} = useAuthContext();

  useEffect(() => {
    fetch(`${apiUrl}/boardgames?_limit=10&_page=29`)
      .then((res) => res.json())
      .then(setGames);
  }, []);

  return (
    <section className={styles.list}>
      <h1 className="fullGridWidth">Boardgames</h1>
      {accessToken && <Link to="add" className="fullGridWidth">Add a new boardgame</Link>}
      {!games && <strong>Loading ...</strong>}
      {games &&
        games.map((game) => (
          <BoardgameItem
            key={game.id}
            name={game.name}
            thumbnail={game.thumbnail}
            id={game.id}
          />
        ))}
    </section>
  );
}

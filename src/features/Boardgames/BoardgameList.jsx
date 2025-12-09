import { Suspense } from 'react';
import { useAuthContext } from '../Auth/AuthContext';
import { List } from './List';

import styles from './Boardgames.module.css';

const apiUrl = import.meta.env.VITE_API_URL;
const gamesPromise = fetch(`${apiUrl}/boardgames?_limit=10&_page=29`)
      .then((res) => res.json());

export function BoardgameList() {
  const {accessToken} = useAuthContext();

  return (
    <section className={styles.list}>
      <h1 className="fullGridWidth">Boardgames</h1>
      {accessToken && <Link to="add" className="fullGridWidth">Add a new boardgame</Link>}
      <Suspense fallback={<strong>Loading ...</strong>}>
        <List games={gamesPromise} />
      </Suspense>
    </section>
  );
}

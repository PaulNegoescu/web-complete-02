import { Link } from "react-router";

import styles from './Boardgames.module.css';

export function BoardgameItem({ thumbnail, name, id }) {
  return (
    <article className={styles.item}>
      <Link to={String(id)}>
        <img src={thumbnail} alt={`Poster for '${name}'`} />
        <h2>{name}</h2>
      </Link>
    </article>
  )
}

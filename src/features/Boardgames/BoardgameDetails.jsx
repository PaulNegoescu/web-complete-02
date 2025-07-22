import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { useAuthContext } from '../Auth/AuthContext';

const apiUrl = import.meta.env.VITE_API_URL;

export function BoardgameDetails() {
  const [game, setGame] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  const { accessToken } = useAuthContext();

  useEffect(() => {
    fetch(`${apiUrl}/boardgames/${id}`)
      .then((res) => res.json())
      .then(setGame);
  }, [id]);

  async function handleDelete() {
    const shouldDelete = confirm(
      `Are you sure you want to delete "${game.name}"?`
    );

    if (shouldDelete) {
      await fetch(`${apiUrl}/boardgames/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      navigate(-1);
    }
  }

  if (!game) {
    return <strong>Loading ...</strong>;
  }

  return (
    <>
      <h1>{game.name}</h1>
      {accessToken && (
        <>
          <button type="button" onClick={handleDelete}>
            Delete game
          </button>
          <Link to="edit">Edit Boardgame</Link>
        </>
      )}
      <img src={game.image} alt={`Poster for ${game.name}`} />
    </>
  );
}

import { useState } from "react"
import { useAuthContext } from "../Auth/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const apiUrl = import.meta.env.VITE_API_URL;

export function AddBoardgame() {
  const [formData, setFormData] = useState({
    name: '',
    thumbnail: '',
    description: ''
  });

  const {user, accessToken} = useAuthContext();

  const navigate = useNavigate();

  function handleInputChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  async function handleAddGame(e) {
    e.preventDefault();

    const forServer = {...formData, userId: user.id}

    await fetch(`${apiUrl}/boardgames`, {
      method: 'POST',
      body: JSON.stringify(forServer),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      }
    });

    toast.success('Game added successfully!');
    navigate(-1);
  }

  return (
    <form onSubmit={handleAddGame} className="brandForm">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

      <label htmlFor="thumbnail">Thumbnail</label>
      <input type="url" id="thumbnail" name="thumbnail" value={formData.thumbnail} onChange={handleInputChange} />

      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" value={formData.description} onChange={handleInputChange}></textarea>

      <button type="submit">Add game</button>
    </form>
  )
}

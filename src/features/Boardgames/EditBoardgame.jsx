import { useEffect, useState } from "react"
import { useAuthContext } from "../Auth/AuthContext";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const apiUrl = import.meta.env.VITE_API_URL;

export function EditBoardgame() {
  const [formData, setFormData] = useState({
    name: '',
    thumbnail: '',
    description: ''
  });

  const {id} = useParams();

  useEffect(() => {
      fetch(`${apiUrl}/boardgames/${id}`)
        .then((res) => res.json())
        .then(setFormData);
    }, [id]);

  const {accessToken} = useAuthContext();

  function handleInputChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  async function handleUpdateGame(e) {
    e.preventDefault();


    await fetch(`${apiUrl}/boardgames/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      }
    });

    toast.success('Game edited successfully!');

  }

  return (
    <form onSubmit={handleUpdateGame} className="brandForm">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

      <label htmlFor="thumbnail">Thumbnail</label>
      <input type="url" id="thumbnail" name="thumbnail" value={formData.thumbnail} onChange={handleInputChange} />

      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" value={formData.description} onChange={handleInputChange}></textarea>

      <button type="submit">Save game</button>
    </form>
  )
}

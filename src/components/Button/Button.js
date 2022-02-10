import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Button = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const URL = process.env.REACT_APP_API_URL;

    const handleDelete = () => {
        const deletePost = async () => {
          await axios.delete(URL + "/songs/" + id);
          navigate("/songs/");
        };
        deletePost();
        
      };

    // const handleDelete = (event) => {
    //     axios
    //     .delete(`${URL}/songs/${id}`)
    //     navigate('/songs')
    // }
    return (
    <div>
        
        <button onClick={() => navigate('/songs')}>Back</button>
        <button onClick={() => navigate(`/songs/${id}/edit`)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
    </div>

)

};

export default Button;

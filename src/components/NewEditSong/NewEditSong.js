import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const NewEditSong = () => {
    const URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const { id } = useParams();
    const [Song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: "",
    });


    useEffect(() => {
        axios
        .get(`${URL}/songs/${id}`)
        .then((response) => {
            setSong(response.data);
            
        })
    }, []);
    
    const handleOnChange = (event) => {
        setSong({...Song, [event.target.id] : event.target.value})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .put(`${URL}/songs/${id}`, Song)
        .then(() => navigate('/songs'));
    }

    console.log(Song)
    const { name, album, artist, is_favorite, time } = Song;

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name</label>
            <br />
            <input 
            type="text" 
            value={name}
            id='name'
            onChange={handleOnChange}
            />
            </div>
            
            <div>
            <label htmlFor="artist">Artist</label>
            <br />
            <input 
            type="text" 
            value={artist}
            id='artist'
            onChange={handleOnChange}
            />
            </div>
            
            <div>
            <label htmlFor="album">Album</label>
            <br />
            <input 
            type="text" 
            value={album}
            id='album'
            onChange={handleOnChange}           
            />
            </div>

            <div>
            <label htmlFor="time">Time</label>
            <br />
            <input 
            type="text" 
            value={time}
            id='time'
            onChange={handleOnChange}
            />
            </div>

            <div>
            <label htmlFor="is_favorite">Favorite</label>
            <br />
            <input 
            type="boolean" 
            value={is_favorite ? 'Yes' : 'No'}
            id='is_favorite'
            onChange={handleOnChange}
            />
            </div>
            <br />
            <input type="submit" value="submit" />
            <input type="submit" value="nevermind" onClick={() => navigate('/songs')} />

        </form>
)

};

export default NewEditSong;

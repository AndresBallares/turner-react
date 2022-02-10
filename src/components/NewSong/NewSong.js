import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const NewSong = () => {
    const URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [Song, setSong] = useState({
      name: "",
      artist: "",
      album: "",
      time: "",
      is_favorite: "",
    });
    
    


    const handleOnChange = (event) => {
        setSong({...Song, [event.target.id] : event.target.value})
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      axios
      .post(`${URL}/songs`, Song)
      .then(() => navigate('/songs'));   
    } 

    console.log(Song)
    const { name, album, artist, is_favorite, time } = Song;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            value={name}
            id='name'
            onChange={handleOnChange}

            />
            <br />

            <label htmlFor="artist">Artist</label>
            <input 
            type="text" 
            value={artist}
            id='artist'
            onChange={handleOnChange}
            />
            <br />

            <label htmlFor="album">Album</label>
            <input 
            type="text" 
            value={album}
            id='album'
            onChange={handleOnChange}

            />
            <br />

            <label htmlFor="time">Time</label>
            <input 
            type="text" 
            value={time}
            id='time'
            onChange={handleOnChange}

            />
            <br />

            <label htmlFor="is_favorite">Favorite</label>
            <input 
            type="boolean" 
            value={is_favorite}
            id='is_favorite'
            onChange={handleOnChange}
            />
            <br />
            <input type="submit" value="submit" />
            <input type="submit" value="nevermind" onClick={() => navigate('/songs')} />

        </form>
)

};

export default NewSong;


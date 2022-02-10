import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SongDetails = () => {
    const URL = process.env.REACT_APP_API_URL;
    const [Song, setSong] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
        .get(`${URL}/songs/${id}`)
        .then((response) => {
            setSong(response.data);
            
        })
    }, []);
    const { name, album, artist, is_favorite, time } = Song;
    return (
        
    <div>

        <h3>{name}</h3>
        <h3>{artist}</h3>
        <h3>{album}</h3>
        <h4>{time}</h4>
        <h4>{is_favorite ? 'Yes' : 'No'}</h4>
        


    </div>
)
}   
export default SongDetails;

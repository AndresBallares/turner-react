import { useEffect, useState } from "react";
import axios from "axios";
import Song from "../Song/Song";


function SongList () {
    const URL = process.env.REACT_APP_API_URL;
    const [Songs, setSongs] = useState([]);
    

    useEffect(() => {
        axios
        .get(`${URL}/songs`)
        .then((response) => {
            setSongs(response.data);
            
        })
    }, []);
    
    console.log(Songs);
    // let balance = 0;
    // activity.forEach(element => balance = balance + Number(element.amount))

        return (
            <div className="balance">
                
                    <table>
                        <thead>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Album</th>
                            <th>Detail</th>
                        </thead>
                        <tbody>
                            {Songs.map((song) => {
                            return <Song key={song.id} song={song}  /> })}
                        </tbody>
                    </table>

            </div>
        )
    
}

export default SongList;
import { Link } from "react-router-dom";

function Song ({ song }) {
  console.log(song)
  return (
    <tr>
      <td>
        {song.name}
      </td>
      <td>
        {song.artist}
      </td>
      <td>
        {song.album}
      </td>
      
      <td>
        <Link to={`/songs/${song.id}`}> :start </Link>
      </td>
    
      
    </tr>
  );
}

export default Song;
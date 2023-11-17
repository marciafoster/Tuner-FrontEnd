import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function SongDetails() {
  const [song, setSong] = useState({ name: "" });
    let navigate = useNavigate();
    let { index } = useParams();


  useEffect(() => {
    const fetchSong = async () => {
      try {
        fetch(`${API}/songs/${index}`)
        .then(res => res.json())
        .then(res => {
          setSong(res)
        })
      } catch (error) {
        return error
      }
    }
    fetchSong()
  }, [index])

 
}

export default ColorDetails;

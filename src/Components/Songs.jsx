import { useState, useEffect } from "react";



const API = import.meta.env.VITE_API_URL;

function Songs() {
    const [songs, setSongs] = useState([]);

    const fetchData = async () => {
        try {
          fetch(`${API}/songs`)
          .then(res => res.json())
          .then(res => {
            setSongs(res)
          })
        } catch (error) {
            return error
        }
    }


    //GET all Songs
    useEffect(() => {
        fetchData()
    }, [])

    rreturn (
        <div className="Songs">
          <section>
            <table>
              <thead>
                <tr>
                  <th>Favorite</th>
                  <th>Song Details</th>
                </tr>
              </thead>
              <tbody>
                {songss.map((song) => {
                  return <Song key={song.id} song={song} />;
                })}
              </tbody>
            </table>
          </section>
        </div>
      );
    }
    
    export default Songs;
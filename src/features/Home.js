import { useState } from "react";
import { useApiHooks } from "../hooks/api_hooks"
import Detail from "./Detail";



const Home = () => {

  const [id, setId] = useState(null);


  const [load, data, err] = useApiHooks({ s: 'spider' });

  if (load) {
    return <h1>Loading......</h1>
  }



  return (
    <div className="p-5 grid grid-cols-2">
      <div>

        {data && data.Search.map((movie) => {
          return <div onClick={() => {
            setId(movie.imdbID)
          }} key={movie.imdbID} className="flex mb-3 space-x-5 shadow-md p-2 bx cursor-pointer">
            <div className="img">
              <img className="h-20 w-20 object-cover " src={movie.Poster} alt="" />
            </div>

            <div className="info">
              <h1>{movie.Title}</h1>
              <p>Release: {movie.Year}</p>

            </div>

          </div>
        })}
      </div>

      {id == null ? <h1>Click TO Show Some Detail</h1> : <Detail id={id} />}

    </div>
  )
}
export default Home
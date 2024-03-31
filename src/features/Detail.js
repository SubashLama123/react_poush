
import { useApiHooks } from "../hooks/api_hooks";

const Detail = ({ id }) => {

  const [load, data, err, setTitle, show, setShow] = useApiHooks({ i: id }, id);


  if (load) {
    return <h1>Loading.......</h1>
  }



  return (
    <div>

      {data && show && <div className="flex justify-between">
        <div>
          <h1>{data.Title}</h1>
          <img src={data.Poster} alt="" />
        </div>
        <div>
          <button onClick={() => setShow(false)}>Close</button>
        </div>

      </div>}



    </div>
  )
}
export default Detail
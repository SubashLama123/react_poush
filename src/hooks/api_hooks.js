import axios from "axios";
import { useEffect, useState } from "react"




export const useApiHooks = (params, id) => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);
  const [title, setTitle] = useState('');
  const [show, setShow] = useState(true);

  const getData = async () => {

    try {
      setLoad(true);
      const response = await axios.get('https://www.omdbapi.com', {
        params: {
          apikey: '6905a701',
          ...params
        }
      });
      setLoad(false);
      setData(response.data);
    } catch (err) {
      setErr(err);
      setLoad(false);
    }
  }

  useEffect(() => {
    if (title !== '') {
      document.title = title;
    }

    return () => {
      document.title = 'Default Value';
    }
  }, [title, show])

  useEffect(() => {
    getData();
    return () => {
    }
  }, [id]);


  return [load, data, err, setTitle, show, setShow];


}
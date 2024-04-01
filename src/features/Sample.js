import { useEffect, useState } from "react";

const Sample = () => {


  useEffect(() => {
    const keypress = (e) => {
      console.log(e);
    }
    window.addEventListener('keypress', keypress)

    return () => {
      window.removeEventListener('keypress', keypress);
    }
  }, [])

  return (
    <div>


      <h1>Hello This is Dample Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis delectus iure neque mollitia, optio labore debitis adipisci culpa rerum in.</p>




    </div>
  )
}
export default Sample
import { useEffect, useRef, useState } from "react"

const Home = () => {

  const tar = useRef(null);
  const inp = useRef(null);
  // useEffect(() => {
  //   tar.current.focus();
  // }, [])

  const goDown = () => {
    console.log(inp.current.value);
    // tar.current.scrollIntoView({ behavior: 'smooth' });
  }


  return (
    <div>

      <button onClick={goDown}><h1>Go To 7</h1></button>

      <input ref={inp} className="border-2 border-black " type="text" />

      <div className="bx1">
        <h1>Box1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, autem, minima facere tempore, dignissimos in ea commodi perferendis totam maxime velit explicabo eveniet esse voluptatibus repudiandae rem nihil dicta quia. Soluta, praesentium rem enim similique quaerat non aut molestias quo qui. Unde non consectetur, velit debitis corrupti magnam nihil omnis.</p>
      </div>
      <div className="bx1">
        <h1>Box1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, autem, minima facere tempore, dignissimos in ea commodi perferendis totam maxime velit explicabo eveniet esse voluptatibus repudiandae rem nihil dicta quia. Soluta, praesentium rem enim similique quaerat non aut molestias quo qui. Unde non consectetur, velit debitis corrupti magnam nihil omnis.</p>
      </div>
      <div className="bx1">
        <h1>Box1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, autem, minima facere tempore, dignissimos in ea commodi perferendis totam maxime velit explicabo eveniet esse voluptatibus repudiandae rem nihil dicta quia. Soluta, praesentium rem enim similique quaerat non aut molestias quo qui. Unde non consectetur, velit debitis corrupti magnam nihil omnis.</p>
      </div>
      <div className="bx1">
        <h1>Box1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, autem, minima facere tempore, dignissimos in ea commodi perferendis totam maxime velit explicabo eveniet esse voluptatibus repudiandae rem nihil dicta quia. Soluta, praesentium rem enim similique quaerat non aut molestias quo qui. Unde non consectetur, velit debitis corrupti magnam nihil omnis.</p>
      </div>
      <div className="bx1">
        <h1>Box1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, autem, minima facere tempore, dignissimos in ea commodi perferendis totam maxime velit explicabo eveniet esse voluptatibus repudiandae rem nihil dicta quia. Soluta, praesentium rem enim similique quaerat non aut molestias quo qui. Unde non consectetur, velit debitis corrupti magnam nihil omnis.</p>
      </div>
      <div className="bx1">
        <h1>Box1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, autem, minima facere tempore, dignissimos in ea commodi perferendis totam maxime velit explicabo eveniet esse voluptatibus repudiandae rem nihil dicta quia. Soluta, praesentium rem enim similique quaerat non aut molestias quo qui. Unde non consectetur, velit debitis corrupti magnam nihil omnis.</p>
      </div>
      <div ref={tar} className="bx7">
        <h1>Box7</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, autem, minima facere tempore, dignissimos in ea commodi perferendis totam maxime velit explicabo eveniet esse voluptatibus repudiandae rem nihil dicta quia. Soluta, praesentium rem enim similique quaerat non aut molestias quo qui. Unde non consectetur, velit debitis corrupti magnam nihil omnis.</p>
      </div>





    </div>
  )
}
export default Home
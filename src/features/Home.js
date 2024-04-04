import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux"
import { increment } from "./counter/counterSlice";
import { incre, reset } from "./counter/counter1Slice";

const Home = () => {

  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.countSlice);
  const { count1 } = useSelector((state) => state.countSlice1);


  return (
    <div className="p-4">

      <Button onClick={() => dispatch(reset())} ripple={true} size="sm" color="orange">Reset Counts</Button>

      <h1>This is count State</h1>
      <h1>{count}</h1>
      <Button onClick={() => dispatch(increment())} ripple={true} size="sm">Increment count</Button>

      <h1>This is count1 State</h1>
      <h1>{count1}</h1>

      <Button onClick={() => dispatch(incre())} ripple={true} color="indigo" size="sm">Increment count1</Button>

    </div>
  )
}
export default Home
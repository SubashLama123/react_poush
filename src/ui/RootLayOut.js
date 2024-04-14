import { Outlet } from "react-router"
import Header from "./Header"
import ScrollToTop from "./ScrollToTop"



const RootLayOut = () => {


  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />

    </div>
  )
}
export default RootLayOut
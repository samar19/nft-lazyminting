import { Children } from "react"
import Home from ".."
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({Children}) => {
    return (
      <div>
        <h1> 
            <Navbar/>
            {Children}
            
            <Footer/>
        </h1>
      </div>
    )
    }
    export default Layout
import { Children } from "react"
import Home from ".."
import Footer from "./Footer"
import Navbar from "./Navbar"


const Layout = ({children}) => {
    return (
      <div>
        <h1> 
            <Navbar/>
            {children}
            
            <Footer/>
        </h1>
      </div>
    )
    }
    export default Layout
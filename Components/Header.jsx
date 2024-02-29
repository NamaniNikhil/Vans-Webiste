import React from "react"
import { Link , NavLink} from "react-router-dom"
export default function Header(){

    const activeLinks = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    
    
        return    (
                
                    <header>
                        <Link className="site-logo" to="/">#VanLife</Link>
                        <nav>
                            <NavLink to="/about" style={({isActive}) => isActive ? 
                            activeLinks : null}>About
                            </NavLink>
                            <NavLink to="/vans" style={({isActive}) => isActive ? 
                            activeLinks : null}>Vans</NavLink>
                            <NavLink to ="/host" style={({isActive}) => isActive ? 
                            activeLinks : null}>Host</NavLink>
                        </nav>
                    </header>
                    
                
            

            )
}
import React from "react"
import { Link , NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {

const activenavlinks = {
    fontWeight : "bold",
    textDecoration : "underline",
    color : "#161616"
}

    

    return  (<>
        <nav className="host-nav">
            <NavLink   
            style={({isActive}) => isActive ? activenavlinks : null} 
            to ="." 
            end>Dashboard
            </NavLink>
            <NavLink  
            style={({isActive}) => isActive ? activenavlinks : null}  
            to = "vans">
                Vans
                </NavLink>


            <NavLink  
            style={({isActive}) => isActive ? activenavlinks : null}  
            to = "income">
                Income
                </NavLink>
            <NavLink   
            style={({isActive}) => isActive ? activenavlinks : null}  
            to = "Reviews">
                Reviews
                </NavLink>
        </nav>
        <Outlet />
    </>
        
    )


}
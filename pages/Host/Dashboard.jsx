import React from "react"

import { Outlet } from "react-router-dom"
export default function Dashboard(){

     
    
    return (<>
        <h1>Host Dashboard is Here</h1>
        <Outlet />
    </>)
   
}
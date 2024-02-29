import React from "react"
import {Outlet} from "react-router-dom"

export default function Layout(){


    return (
        <>
            <h1>Layout is Here</h1>
            <Outlet />
        </>
    )
}
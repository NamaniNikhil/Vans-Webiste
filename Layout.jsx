import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
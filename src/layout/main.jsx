import Footer from "./footer"
import Header from "./header"
import Nav from "./nav"
import '../style/layout.scss'
import { useState } from "react"
import ItemsComponent from "../components/items"

const Layout = () => {


    return (
        <>
            <Header />

            <div className='contain'>
                <div className='nav'>
                    <Nav />
                </div>
                <div className='content'>
                    <ItemsComponent />


                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout
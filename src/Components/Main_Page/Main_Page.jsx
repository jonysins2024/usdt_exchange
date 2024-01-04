import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../SharedComponents/Header/Header'
import Footer from '../SharedComponents/Footer/Footer'

const Main_Page = () => {
    return (
        <>
            <Header />
            <div className=''>
                <Outlet></Outlet>
            </div>
            <Footer />
        </>
    )
}

export default Main_Page

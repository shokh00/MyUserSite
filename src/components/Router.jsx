import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/Layout'
import Home from '../pages/Content/Home'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}
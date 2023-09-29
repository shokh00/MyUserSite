import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/Layout'
import Home from '../pages/Content/Home'
import OneProductPage from '../pages/Content/Other/OneProductPage'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path='/product/:id' element={<OneProductPage />} />
                <Route path='*' element={<Home />} />
            </Route>
        </Routes>
    )
}
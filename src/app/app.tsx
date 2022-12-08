import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from 'react-router-dom'
import Sample from '../components/Sample/Sample'
import './app.styles.scss'

const App = (): JSX.Element => {
    const { items } = useSelector((state: RootState) => state.menu)
    const menuItems = items.map(item => {
        return <NavLink className='mr-2' key={item.value} to={item.path} style={({ isActive }) => isActive ? { color: 'black' } : { color: 'gray' }}>{item.value}</NavLink>
    })
    return (
        <div className='flex items-center justify-center h-screen text-5xl' data-testid="App">
            <Router>
                <div> { menuItems } </div>
                <Routes>
                    <Route element={<div/>} path="/home" />
                    <Route element={<Sample/>} path="/samples" />
                    <Route path="*" element={<Navigate to="/home" replace={true} />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App

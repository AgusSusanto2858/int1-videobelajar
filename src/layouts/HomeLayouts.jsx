import React, { useState, useEffect } from 'react'
import Navbar from '../components/organisms/Navbar' // Navbar untuk semua state (guest & logged in)
import Footer from '../components/organisms/Footer'

export default function HomeLayouts({ children, isGuestLoggedIn: propIsGuestLoggedIn }) {
    const [isGuestLoggedIn, setIsGuestLoggedIn] = useState(propIsGuestLoggedIn || false);
    
    useEffect(() => {
        if (propIsGuestLoggedIn !== undefined) {
            setIsGuestLoggedIn(propIsGuestLoggedIn);
        }
    }, [propIsGuestLoggedIn]);
    
    const handleGuestLogin = () => {
        setIsGuestLoggedIn(true);
        console.log('User logged in as guest');
    };

    const handleLogout = () => {
        setIsGuestLoggedIn(false);
        console.log('User logged out');
    };

    return (
        <>
            <Navbar 
                isLoggedIn={isGuestLoggedIn} 
                user={isGuestLoggedIn ? { name: 'Guest', email: 'guest@example.com' } : null}
                onGuestLogin={handleGuestLogin}
                onLogout={handleLogout}
            />
            {children}
            <Footer />
        </>
    )
}
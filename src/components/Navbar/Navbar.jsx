import React from 'react'

const Navbar = () => {
  return (
    <>
        <header>
            <div className='logo'>Devolynx</div>
            <div className='manu'>
                <ul>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className='nav-btn'>
                <button>Get a Quote</button>
            </div>
        </header>
    </>
  )
}

export default Navbar

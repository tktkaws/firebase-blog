import React from 'react'
import {Link} from "react-router-dom"
import './Navbar.css'

const Navbar = ({isAuth}) => {
  return (
    <nav>
        <Link to="/">home</Link>
        <Link to="/createpost">記事投稿</Link>
        {!isAuth ? (<Link to="/logout">logout</Link>) : (<Link to="/login">login</Link>)    }
        
    </nav>
  )
}

export default Navbar
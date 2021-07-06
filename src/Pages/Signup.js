import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
function Signup() {
    return (
        <div className='signup_page'>
            <h3>Click <Link to='/'>Here</Link> to Go Demo</h3>
            <h2>OR</h2>
            <button>SignIn</button> 
            
        </div>
    )
}

export default Signup

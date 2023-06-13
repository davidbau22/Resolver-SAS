import React from 'react'
import {Link} from 'react-router-dom'


const NotFound = () => {
    return (
        <div>
            <img  src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif" alt= ""/>
            <Link to="/Login">
                <button >Please redirect me</button>
            </Link>
        </div>
    )
}

export default NotFound
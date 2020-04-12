import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav>
    <div className="nav-wrapper orange lighten 2">
      <Link to ='/' className="brand-logo center">Kosnice</Link>
    
    </div>
  </nav>
    )
}

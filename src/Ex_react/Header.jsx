import React from 'react'

export default function Header() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container">
      <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end"  id="navbarNav" >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Contract</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}

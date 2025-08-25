import React from 'react'

export default function NavBar () {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid d-flex justify-content-center">
                <div className="col-sm-8 d-flex ">
                    <a class="navbar-brand text-light float-right" href="#" style={{fontWeight:'600'}}>Start Bootstrap</a>
                    <div class="collapse navbar-collapse" id="navbarText" style={{display:'flex', alignItems:'right!' }}>
                        <ul class="navbar-nav ms-auto ">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
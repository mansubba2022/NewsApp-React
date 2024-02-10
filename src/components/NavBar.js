import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

export class NavBar extends Component {

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    titleChange = (title)=>{
        document.title = this.capitalizeFirstLetter(title) + " - NewsApp";
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/" onClick={()=>document.title("NewsApp - Your daily dose of news")}>NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/" onClick={() => this.titleChange("Home")}>Home</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link" to="/business" onClick={() => this.titleChange("business")}>business</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/entertainment" onClick={() => this.titleChange("entertainment")}>entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/general" onClick={() => this.titleChange("general")}>general</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/health" onClick={() => this.titleChange("health")}>health</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/science" onClick={() => this.titleChange("science")}>science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sports" onClick={() => this.titleChange("sports")}>sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/technology" onClick={() => this.titleChange("technology")}>technology</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar

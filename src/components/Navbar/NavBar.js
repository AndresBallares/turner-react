import { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


class NavBar extends Component {
    render () {
        return (
            <nav className="navbar">
                <h1 className="t">
                    <Link to="/songs">Song List</Link>
                </h1>
                
                <button className="button">
                <Link to="/songs/new">NEW</Link>
                </button>
                
            </nav>
        )
    }
} 

export default NavBar;
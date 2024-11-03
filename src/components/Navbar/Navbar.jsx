import React from "react";
import './Navbar.css';
import logo from '../../assets/logo-MoodHues.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Search from "../Search/Search";


const Navbar = () =>{
    return(
        <>
            <div className="navbar">
                <div className="left">
                    <div className="MoodHues-logo">
                        <img src={logo} alt="MoodHues logo" />
                    </div>
                    <h1 className="MoodHues">MoodHues</h1>
                </div>
                <div className="mid">
                    <div className="home-btn">
                        <FontAwesomeIcon icon={faHouse} />
                    </div>
                    <Search />
                </div>
                <div className="right">
                    <div className="profile">
                        <h1>H</h1>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Navbar;
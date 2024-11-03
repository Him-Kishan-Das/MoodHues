import React from "react";
import './Search.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Search = () =>{
    
    return (
        <>
            <div className="search">
                <div>
                    <input type="text" name="" id="" className="searchbar" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="searchbar-logo" />
                </div>
            </div>
        </>
    );
}

export default Search;
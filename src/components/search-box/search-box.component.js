import { Component } from "react";
import 'react-bootstrap';



const SearchBox = ({ className, placeholder, onChangehandler }) => (


    <div className="  ">

        <input
            className={`search-box  ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onChangehandler} />


    </div>)


export default SearchBox;


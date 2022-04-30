import { Component } from "react";
import 'react-bootstrap';



const SearchBox = ({ className, placeholder, onChangehandler }) => (
    <div className="  text-center">
        <h3 className='app-title'> 9jakids Game Catalog</h3>
        <input
            className={`search-box  ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onChangehandler} />


    </div>)


export default SearchBox;


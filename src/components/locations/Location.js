import React from "react";
import "./Location.css";
import locations from '../../data.json';
import { Link } from "react-router-dom";

export default function Location() {
       return locations.map ((location) => {
        console.log(location.id);

        return (
            <div className="location_card" key={location.id}>
                <Link to={`/products/${location.id}`}  >
                    <img src={ location.cover } alt="location_photo" className="location_cover"/>
                    <h2>{ location.title }</h2>
                   
                </Link>
            </div>
        )
})}
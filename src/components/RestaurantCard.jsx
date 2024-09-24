// RestaurantCard.jsx
import React from "react";
import './RestaurantCard.css';

const RestaurantCard = (props) => {
    return (
        <div className={'RestaurantCard'}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>{props.location}</p>
            <div className="links">
            {/* Conditionally render the View Menu button only if the menuLink prop exists */}
            {props.menuLink && (
                <a href={props.menuLink} target="_blank" rel="noopener noreferrer">
                    View Menu
                </a>
            )}
            <a href={props.yelpLink} target="_blank" rel="noopener noreferrer">View Yelp</a>
            </div>
        </div>
    );
}

export default RestaurantCard;

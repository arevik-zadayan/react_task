import React from 'react';
import classes from "./Card.module.css"

const Card = ({name, onClick}) => {
    return (
        <div className={classes.card} onClick={onClick}>
            <div className={classes.card_content}>
                <h3>{name}</h3>
            </div>
            <p>Popular {name}</p>
        </div>
    );
};

export default Card;
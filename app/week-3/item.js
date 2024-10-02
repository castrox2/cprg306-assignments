import React from "react";

const Item = ({name , quantity, category}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </div>
    )
}

export default Item;
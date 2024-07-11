import React from 'react';

const  Item = ({ name, quantity, category, onSelect }) => {

    return (
        <li className="flex justify-between items-center border-gray-200" onClick = {onSelect}>
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-gray-600">Buy {quantity}</div>
        <div className="text-gray-500 italic">in {category}</div>   
        </li>
    );
};

export default Item;




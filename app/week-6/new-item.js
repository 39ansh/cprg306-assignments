"use client";

import React, { useState, useRef } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

 
  const idCounter = useRef(0);

  const generateId = () => {
    idCounter.current += 1;
    return idCounter.current.toString();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: generateId(), 
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-pink-200">
      <div className="mb-4">
        <input
          type="text"
          value={name}
          placeholder="Item Name"
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 text-black"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
          className="text-black"
        />
      </div>
      <div className="mb-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="text-black"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-500 rounded-md"
      >
        Submit
      </button>
    </form>
  );
}

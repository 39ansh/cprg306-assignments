"use client";

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortItems = () => {
    return items.slice().sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  };

  const handleSortByChange = (sortValue) => {
    setSortBy(sortValue);
  };

  return (
    <div className="w-full max-w-md my-10 p-4 bg-gray-50 rounded-lg shadow-lg cursor-pointer">
      <ul className="max-w-md mx-auto mt-10 bg-blue-200 shadow-lg rounded-lg">
        {sortItems().map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => {
              console.log('Item clicked:', item.name);
              onItemSelect(item);
            }}
          />
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <button className={sortBy === "name" ? "bg-blue-500 text-white px-4 py-2 rounded" : "bg-blue-200 hover:bg-blue-300 text-blue-800 font-semibold px-4 py-2 rounded"} onClick={() => handleSortByChange("name")}>Sort by Name</button>
        <button className={sortBy === "category" ? "bg-blue-500 text-white px-4 py-2 rounded" : "bg-blue-200 hover:bg-blue-300 text-blue-800 font-semibold px-4 py-2 rounded"} onClick={() => handleSortByChange("category")}>Sort by Category</button>
      </div>
    </div>
  );
};

export default ItemList;

"use client";

import React, { useEffect, useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemsData);
  }, []);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <main className="min-h-screen bg-pink-200 flex flex-col items-center py-20">
      <h1 className="text-4xl font-bold text-black mb-6">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    
    </main>
  );
};

export default Page;

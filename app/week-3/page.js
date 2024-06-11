import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="min-h-screen bg-pink-200 flex flex-col items-center py-20">
      <h1 className="text-4xl font-bold text-black mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;

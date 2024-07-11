"use client";

import React, { useEffect, useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  useEffect(() => {
    setItems(itemsData);
  }, []);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(',')[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '');
    console.log('Selected item:', cleanedName);
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen bg-pink-200 flex flex-col items-center py-20">
      <h1 className="text-4xl font-bold text-black mb-6">Shopping List</h1>
      <div className="flex w-full max-w-4xl">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 ml-6">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
};

export default Page;


// "use client";

// import React, { useEffect, useState } from 'react';
// import { useUserAuth } from "../_utils/auth-context"; // Adjust the import path as necessary
// import ItemList from './item-list';
// import NewItem from './new-item';
// import MealIdeas from './meal-ideas';
// import itemsData from './items.json';

// const Page = () => {
//   const { user } = useUserAuth();
//   const [items, setItems] = useState([]);
//   const [selectedItemName, setSelectedItemName] = useState('');

//   useEffect(() => {
//     if (user) {
//       setItems(itemsData);
//     }
//   }, [user]);

//   const handleAddItem = (newItem) => {
//     setItems((prevItems) => [...prevItems, newItem]);
//   };

//   const handleItemSelect = (item) => {
//     const cleanedName = item.name
//       .split(',')[0]
//       .trim()
//       .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '');
//     console.log('Selected item:', cleanedName);
//     setSelectedItemName(cleanedName);
//   };

//   if (!user) {
//     return (
//       <div className="min-h-screen bg-pink-200 flex flex-col items-center py-20">
//         <h1 className="text-4xl font-bold text-black mb-6">Access Denied</h1>
//         <p>Please <a href="/week-9/page" className="text-blue-500">login</a> to view this page.</p>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-pink-200 flex flex-col items-center py-20">
//       <h1 className="text-4xl font-bold text-black mb-6">Shopping List</h1>
//       <div className="flex w-full max-w-4xl">
//         <div className="flex-1">
//           <NewItem onAddItem={handleAddItem} />
//           <ItemList items={items} onItemSelect={handleItemSelect} />
//         </div>
//         <div className="flex-1 ml-6">
//           {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Page;

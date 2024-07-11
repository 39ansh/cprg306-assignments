// week-8/meal-ideas.js

"use client";

import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Fetched meals:', data.meals);
    return data.meals || [];
  } catch (error) {
    console.error('Error fetching meal ideas:', error);
    return [];
  }
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMealIdeas = async () => {
    setLoading(true);
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
    setLoading(false);
  };

  useEffect(() => {
    if (ingredient) {
      console.log('Loading meal ideas for:', ingredient);
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : meals.length > 0 ? (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      ) : (
        <p>No meal ideas found.</p>
      )}
    </div>
  );
};

export default MealIdeas;

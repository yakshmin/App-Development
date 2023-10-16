// FoodContext.js
import { createContext, useContext, useState } from 'react';

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [selectedFood, setSelectedFood] = useState(null);

  const setFoodDetails = (foodDetails) => {
    setSelectedFood(foodDetails);
  };

  return (
    <FoodContext.Provider value={{ selectedFood, setFoodDetails }}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFoodContext = () => {
  const context = useContext(FoodContext);
  if (!context) {
    throw new Error('useFoodContext must be used within a FoodProvider');
  }
  return context;
};

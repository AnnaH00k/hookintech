'use client';

import { useEffect, useState } from 'react';
import jsPDF from 'jspdf';


// Types for Meal
interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

interface Meal {
  name: string;
  kcal: number;
  ingredients: Ingredient[];
  instructions: string;
}

interface DayPlan {
  day: string;
  meals: {
    breakfast: Meal;
    lunch: Meal;
    dinner: Meal;
    snack: Meal;
  };
  sport: string;
  totalCalories: number;
}

interface DailyMeals {
  meals: {
    breakfast: Meal[];
    lunch: Meal[];
    dinner: Meal[];
    snack: Meal[];
  };
  sports: { name: string; duration: string }[];
}

// Load the dailyMeals data with proper typing
const dailyMeals: DailyMeals = require('./data/dailyMeals.json');

export default function Home() {
  const initialPlan = Array.from({ length: 5 }, (_, index) => ({
    day: `Day ${index + 1}`,
    meals: {
      breakfast: dailyMeals.meals.breakfast[0], // Placeholder meal
      lunch: dailyMeals.meals.lunch[0],
      dinner: dailyMeals.meals.dinner[0],
      snack: dailyMeals.meals.snack[0],
    },
    sport: `${dailyMeals.sports[0].name}: ${dailyMeals.sports[0].duration}`, // Placeholder sport
    totalCalories:
      dailyMeals.meals.breakfast[0].kcal +
      dailyMeals.meals.lunch[0].kcal +
      dailyMeals.meals.dinner[0].kcal +
      dailyMeals.meals.snack[0].kcal,
  }));

  const [plan, setPlan] = useState<DayPlan[]>(initialPlan);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Randomize meals and sports for the week, ensuring no repeated meals
  const randomizeMealsAndSports = () => {
    const randomizedPlan = Array.from({ length: 5 }, (_, index) => {
      const usedMeals: { breakfast: Meal | null; lunch: Meal | null; dinner: Meal | null; snack: Meal | null } = {
        breakfast: null,
        lunch: null,
        dinner: null,
        snack: null,
      };

      // Function to get a random meal that hasn't been used
      const randomMeal = (mealType: keyof DailyMeals['meals']) => {
        const meals = dailyMeals.meals[mealType];
        const unusedMeals = meals.filter((meal) => !Object.values(usedMeals).includes(meal));

        // Select a random meal from the unused meals
        const selectedMeal = unusedMeals[Math.floor(Math.random() * unusedMeals.length)];
        usedMeals[mealType] = selectedMeal;
        return selectedMeal;
      };

      const randomSport = dailyMeals.sports[Math.floor(Math.random() * dailyMeals.sports.length)];

      // Randomly select meals for each day
      const meals = {
        breakfast: randomMeal('breakfast'),
        lunch: randomMeal('lunch'),
        dinner: randomMeal('dinner'),
        snack: randomMeal('snack'),
      };

      const totalCalories = Object.values(meals).reduce((sum, meal) => sum + meal.kcal, 0);

      return {
        day: `Day ${index + 1}`,
        meals,
        sport: `${randomSport.name}: ${randomSport.duration}`,
        totalCalories,
      };
    });

    setPlan(randomizedPlan);
  };
  // Randomize the plan on initial load
  useEffect(() => {
    randomizeMealsAndSports();
  }, []);

  // Handle meal click to open the modal
  const handleMealClick = (meal: Meal) => {
    setSelectedMeal(meal);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMeal(null);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width; // Width of the page
    const pageHeight = doc.internal.pageSize.height - 10; // Usable page height (minus margins)
  
    const addText = (text: string, x: number, y: number, align: 'left' | 'center' = 'left') => {
      if (align === 'center') {
        const textWidth = doc.getTextWidth(text);
        x = (pageWidth - textWidth) / 2; // Calculate the x-coordinate to center the text
      }
      doc.text(text, x, y);
    };
  
    const addCheckbox = (x: number, y: number, size: number) => {
      doc.rect(x, y, size, size); // Draw a square for the checkbox
    };
  
    let y = 10; // Initial vertical position
  
    // Function to handle pagination for the shopping list
    const checkAndAddPage = (lineHeight: number) => {
      if (y + lineHeight > pageHeight) {
        doc.addPage();
        y = 10; // Reset vertical position on the new page
      }
    };
  
    // Loop through each day in the plan
    plan.forEach((day, dayIndex) => {
      // Reset position for each new page
      y = 10;
  
      // Centered title for the day
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(18);
      addText(day.day, 0, y, 'center'); // Center-align the title
      y += 10;
  
      // Sport and Total Calories
      doc.setFontSize(12);
      doc.setFont('Helvetica', 'normal');
      addText(`Sport: ${day.sport}`, 10, y, 'center');
      y += 6;
      addText(`Total Calories: ${day.totalCalories} kcal`, 10, y, 'center');
      y += 10;
  
      // Meals for the day
      Object.entries(day.meals).forEach(([mealType, meal]) => {
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(14);
        addText(`${mealType.charAt(0).toUpperCase() + mealType.slice(1)}:`, 10, y, 'center');
        y += 8;
  
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(12);
        addText(`${meal.name} - ${meal.kcal} kcal`, 10, y, 'center');
        y += 6;
  
        meal.ingredients.forEach((ingredient) => {
          doc.setFont('Helvetica', 'normal');
          doc.setFontSize(12);
          addText(`- ${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`, 15, y, 'center');
          y += 5;
        });
  
        y += 6; // Space between meals
      });
  
      // Add a new page after each day except the last one
      if (dayIndex < plan.length - 1) {
        doc.addPage();
      }
    });
  
    // Shopping List Section
    doc.addPage(); // Add a new page for the shopping list
    y = 10; // Reset y for the new page
  
    const shoppingList: { [key: string]: number } = {};
  
    plan.forEach((day) => {
      Object.values(day.meals).forEach((meal) => {
        meal.ingredients.forEach((ingredient) => {
          const key = `${ingredient.name} (${ingredient.unit})`;
          shoppingList[key] = (shoppingList[key] || 0) + ingredient.quantity;
        });
      });
    });
  
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(18);
    addText('Shopping List:', 0, y, 'center'); // Center-align the title
    y += 10;
  
    Object.entries(shoppingList).forEach(([item, quantity]) => {
      const checkboxSize = 5;
  
      // Check if we need a new page
      checkAndAddPage(8);
  
      // Draw the checkbox and item text
      addCheckbox(10, y, checkboxSize); // Draw the checkbox
      doc.setFont('Helvetica', 'normal');
      addText(`${item}: ${quantity}`, 20, y + 4); // Align text next to checkbox
      y += 8;
    });
  
    // Save the PDF
    doc.save('5-Day-Meal-Plan.pdf');
  };
  

  return (
    <div className="min-h-screen flex justify-center flex-col items-center w-full text-text  bg-background">
      <header className="py-4 pt-[7vh] bg-background text-text text-center flex items-center justify-center flex-col">
        <h1 className="text-2xl  w-[90vw] font-bold">Your 5-Day Vegetarian Meal Plan</h1>
        <div className="flex w-[90vw] items-center justify-center gap-4">
          <MealRandomizer randomizeMeals={randomizeMealsAndSports} />
          <button
          onClick={generatePDF}
          className="mt-8 px-6 py-2 bg-green-800 text-white rounded-md"
        >
          Download Meal Plan as PDF
        </button>
        </div>
      </header>

      <main className="flex items-center justify-center flex-col">
        <MealCards plan={plan} handleMealClick={handleMealClick} />
        <MealModal isOpen={isModalOpen} meal={selectedMeal} closeModal={closeModal} />
      
      </main>
    </div>
  );
}

// Component to display the meal cards
const MealCards = ({ plan, handleMealClick }: { plan: DayPlan[]; handleMealClick: (meal: Meal) => void }) => (
  <div className="flex flex-wrap justify-center w-[90vw] py-10 bg-background text-text gap-6">
    {plan.map((day, index) => (
      <div key={index} className="w-full md:w-1/2 lg:w-1/3">
        <div className="bg-background shadow-xl shadow-[#292d27] border border-lighterBackground rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">{day.day}</h2>
            <p>{day.sport}</p>
            <p className="text-lg font-semibold">Total Calories: {day.totalCalories} kcal</p>
          </div>
          <div className="p-4">
            {Object.values(day.meals).map((meal, mealIndex) => (
              <div
                key={mealIndex}
                className="mb-4 cursor-pointer hover:bg-lighterBackground rounded-lg p-2"
                onClick={() => handleMealClick(meal)}
              >
                <h3 className="text-lg font-semibold">{meal.name}</h3>
                <p>{meal.kcal} kcal</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Component to display the button for randomizing meals
const MealRandomizer = ({ randomizeMeals }: { randomizeMeals: () => void }) => (
  <div className="mt-8">
    <button
      onClick={randomizeMeals}
      className="px-6 py-2 bg-green-800 text-white rounded-md"
    >
      Randomize Meals
    </button>
  </div>
);

// Component to display the meal modal
const MealModal = ({
  isOpen,
  meal,
  closeModal,
}: {
  isOpen: boolean;
  meal: Meal | null;
  closeModal: () => void;
}) => {
  if (!meal) return null;

  return (
    <div onClick={closeModal}
      className={`fixed inset-0 bg-black bg-opacity-50 ${isOpen ? 'flex' : 'hidden'} items-center justify-center`}
    >
      <div className="bg-lighterBackground text-text relative p-6 rounded-lg shadow-lg w-96">
        <button
          onClick={closeModal}
          className="absolute text-xl top-2 right-4 text-text"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold">{meal.name}</h2>
        <p className="mt-2">{meal.kcal} kcal</p>
        <div className="mt-4">
          <h3 className="font-semibold">Ingredients:</h3>
          <ul>
            {meal.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.quantity} {ingredient.unit} {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Instructions:</h3>
          <p>{meal.instructions}</p>
        </div>
      </div>
    </div>
  );
};

'use client';

import { useState, useEffect } from "react";

// Types for Meal and Shopping List Items
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

interface ShoppingListItem extends Ingredient {
  checked: boolean;
}

interface DayPlan {
  day: string;
  meals: Record<string, Meal>;
  sport: string;
  totalCalories: number;
}

const dailyMeals: DayPlan[] = [
    {
      day: "Day 1",
      meals: {
        breakfast: {
          name: "Haferflocken mit Mandelmilch, Banane und Leinsamen",
          kcal: 400,
          ingredients: [
            { name: "Haferflocken", quantity: 50, unit: "g" },
            { name: "Mandelmilch", quantity: 150, unit: "ml" },
            { name: "Banane", quantity: 1, unit: "" },
            { name: "Leinsamen", quantity: 1, unit: "EL" },
          ],
          instructions: "Mix the ingredients together and enjoy!"
        },
        lunch: {
          name: "Linsensalat mit Tomaten, Gurken und Olivenöl",
          kcal: 500,
          ingredients: [
            { name: "Linsen", quantity: 100, unit: "g" },
            { name: "Tomate", quantity: 1, unit: "" },
            { name: "Gurke", quantity: 0.5, unit: "" },
            { name: "Olivenöl", quantity: 1, unit: "EL" },
          ],
          instructions: "Cook the lentils and mix with chopped vegetables and olive oil."
        },
        dinner: {
          name: "Quinoa-Gemüse-Pfanne mit Mandelmus",
          kcal: 450,
          ingredients: [
            { name: "Quinoa", quantity: 100, unit: "g" },
            { name: "Gemüse", quantity: 150, unit: "g" },
            { name: "Mandelmus", quantity: 1, unit: "EL" },
          ],
          instructions: "Cook quinoa and stir-fry vegetables. Top with almond butter."
        },
      },
      sport: "Surfskate: 45 Minuten",
      totalCalories: 1350,
    },
    {
      day: "Day 2",
      meals: {
        breakfast: {
          name: "Avocado Toast with Tomato",
          kcal: 350,
          ingredients: [
            { name: "Vollkornbrot", quantity: 2, unit: "Slices" },
            { name: "Avocado", quantity: 1, unit: "" },
            { name: "Tomate", quantity: 1, unit: "" },
          ],
          instructions: "Toast the bread, spread avocado, and top with sliced tomato."
        },
        lunch: {
          name: "Chickpea Salad with Olive Oil",
          kcal: 550,
          ingredients: [
            { name: "Kichererbsen", quantity: 100, unit: "g" },
            { name: "Gurke", quantity: 1, unit: "" },
            { name: "Paprika", quantity: 1, unit: "" },
            { name: "Olivenöl", quantity: 1, unit: "EL" },
          ],
          instructions: "Mix chickpeas with diced vegetables and olive oil."
        },
        dinner: {
          name: "Vegetable Stir-Fry with Brown Rice",
          kcal: 600,
          ingredients: [
            { name: "Brauner Reis", quantity: 100, unit: "g" },
            { name: "Gemüse", quantity: 200, unit: "g" },
          ],
          instructions: "Stir-fry the vegetables and serve over cooked rice."
        },
      },
      sport: "Yoga: 60 Minuten",
      totalCalories: 1500,
    },
    {
      day: "Day 3",
      meals: {
        breakfast: {
          name: "Smoothie with Spinach, Banana and Almond Milk",
          kcal: 400,
          ingredients: [
            { name: "Spinat", quantity: 50, unit: "g" },
            { name: "Banane", quantity: 1, unit: "" },
            { name: "Mandelmilch", quantity: 200, unit: "ml" },
            { name: "Leinsamen", quantity: 1, unit: "EL" },
          ],
          instructions: "Blend all ingredients together until smooth."
        },
        lunch: {
          name: "Lentil Soup",
          kcal: 500,
          ingredients: [
            { name: "Linsen", quantity: 100, unit: "g" },
            { name: "Karotten", quantity: 2, unit: "" },
            { name: "Sellerie", quantity: 1, unit: "Stange" },
            { name: "Tomaten", quantity: 2, unit: "" },
          ],
          instructions: "Cook all ingredients in a pot until soft. Blend for a smooth texture."
        },
        dinner: {
          name: "Veggie Burger with Sweet Potato Fries",
          kcal: 600,
          ingredients: [
            { name: "Veggie Patty", quantity: 1, unit: "" },
            { name: "Vollkornbrötchen", quantity: 1, unit: "" },
            { name: "Süßkartoffeln", quantity: 200, unit: "g" },
          ],
          instructions: "Cook the veggie patty and serve on a bun with roasted sweet potato fries."
        },
      },
      sport: "Jogging: 30 Minuten",
      totalCalories: 1500,
    },
    {
      day: "Day 4",
      meals: {
        breakfast: {
          name: "Chia Pudding with Berries",
          kcal: 400,
          ingredients: [
            { name: "Chiasamen", quantity: 2, unit: "EL" },
            { name: "Mandelmilch", quantity: 200, unit: "ml" },
            { name: "Blaubeeren", quantity: 50, unit: "g" },
          ],
          instructions: "Mix chia seeds with almond milk and refrigerate overnight. Top with berries before serving."
        },
        lunch: {
          name: "Grilled Vegetable Wrap",
          kcal: 550,
          ingredients: [
            { name: "Vollkornwrap", quantity: 1, unit: "" },
            { name: "Gegrilltes Gemüse", quantity: 150, unit: "g" },
          ],
          instructions: "Fill the wrap with grilled vegetables and serve."
        },
        dinner: {
          name: "Stuffed Bell Peppers with Quinoa",
          kcal: 600,
          ingredients: [
            { name: "Paprika", quantity: 2, unit: "" },
            { name: "Quinoa", quantity: 100, unit: "g" },
          ],
          instructions: "Stuff the peppers with cooked quinoa and bake until soft."
        },
      },
      sport: "Pilates: 45 Minuten",
      totalCalories: 1550,
    },
    {
      day: "Day 5",
      meals: {
        breakfast: {
          name: "Greek Yogurt with Honey and Walnuts",
          kcal: 350,
          ingredients: [
            { name: "Griechischer Joghurt", quantity: 200, unit: "g" },
            { name: "Honig", quantity: 1, unit: "TL" },
            { name: "Walnüsse", quantity: 30, unit: "g" },
          ],
          instructions: "Top yogurt with honey and chopped walnuts."
        },
        lunch: {
          name: "Falafel with Hummus and Salad",
          kcal: 600,
          ingredients: [
            { name: "Falafel", quantity: 4, unit: "" },
            { name: "Hummus", quantity: 2, unit: "EL" },
            { name: "Salat", quantity: 100, unit: "g" },
          ],
          instructions: "Serve falafel with a side of hummus and fresh salad."
        },
        dinner: {
          name: "Spaghetti with Tomato Sauce and Basil",
          kcal: 550,
          ingredients: [
            { name: "Vollkornspaghetti", quantity: 100, unit: "g" },
            { name: "Tomatensauce", quantity: 200, unit: "g" },
            { name: "Basilikum", quantity: 5, unit: "Blätter" },
          ],
          instructions: "Cook pasta and serve with warm tomato sauce and fresh basil."
        },
      },
      sport: "Bouldering: 60 Minuten",
      totalCalories: 1500,
    },
    {
      day: "Day 6",
      meals: {
        breakfast: {
          name: "Oatmeal with Almond Butter and Strawberries",
          kcal: 400,
          ingredients: [
            { name: "Haferflocken", quantity: 50, unit: "g" },
            { name: "Mandelbutter", quantity: 1, unit: "EL" },
            { name: "Erdbeeren", quantity: 100, unit: "g" },
          ],
          instructions: "Cook oats and top with almond butter and sliced strawberries."
        },
        lunch: {
          name: "Sweet Potato and Black Bean Salad",
          kcal: 550,
          ingredients: [
            { name: "Süßkartoffeln", quantity: 150, unit: "g" },
            { name: "Schwarze Bohnen", quantity: 100, unit: "g" },
          ],
          instructions: "Roast sweet potatoes and mix with black beans. Serve with a drizzle of olive oil."
        },
        dinner: {
          name: "Vegan Tacos with Guacamole",
          kcal: 600,
          ingredients: [
            { name: "Tortillas", quantity: 2, unit: "" },
            { name: "Guacamole", quantity: 2, unit: "EL" },
            { name: "Gemüse", quantity: 100, unit: "g" },
          ],
          instructions: "Fill tortillas with veggies and guacamole."
        },
      },
      sport: "Swimming: 45 Minutes",
      totalCalories: 1550,
    },
    {
      day: "Day 7",
      meals: {
        breakfast: {
          name: "Fruit Salad with Coconut Yogurt",
          kcal: 350,
          ingredients: [
            { name: "Obst", quantity: 200, unit: "g" },
            { name: "Kokosjoghurt", quantity: 150, unit: "g" },
          ],
          instructions: "Mix your favorite fruits and top with coconut yogurt."
        },
        lunch: {
          name: "Grilled Veggie Buddha Bowl",
          kcal: 600,
          ingredients: [
            { name: "Quinoa", quantity: 100, unit: "g" },
            { name: "Gegrilltes Gemüse", quantity: 150, unit: "g" },
          ],
          instructions: "Top quinoa with grilled vegetables."
        },
        dinner: {
          name: "Mushroom Risotto",
          kcal: 550,
          ingredients: [
            { name: "Champignons", quantity: 150, unit: "g" },
            { name: "Reis", quantity: 100, unit: "g" },
          ],
          instructions: "Cook risotto with mushrooms."
        },
      },
      sport: "Figure Skating: 60 Minutes",
      totalCalories: 1500,
    },
    {
      day: "Day 8",
      meals: {
        breakfast: {
          name: "Smoothie Bowl with Granola",
          kcal: 400,
          ingredients: [
            { name: "Frozen berries", quantity: 100, unit: "g" },
            { name: "Banane", quantity: 1, unit: "" },
            { name: "Granola", quantity: 30, unit: "g" },
          ],
          instructions: "Blend the berries and banana to make a smooth base and top with granola."
        },
        lunch: {
          name: "Zucchini Noodles with Pesto",
          kcal: 550,
          ingredients: [
            { name: "Zucchini", quantity: 200, unit: "g" },
            { name: "Pesto", quantity: 2, unit: "EL" },
          ],
          instructions: "Make zucchini noodles and toss with pesto."
        },
        dinner: {
          name: "Lentil Tacos",
          kcal: 600,
          ingredients: [
            { name: "Linsen", quantity: 100, unit: "g" },
            { name: "Tortillas", quantity: 2, unit: "" },
          ],
          instructions: "Fill tortillas with seasoned lentils and toppings of choice."
        },
      },
      sport: "Biking: 45 Minutes",
      totalCalories: 1550,
    },
    {
      day: "Day 9",
      meals: {
        breakfast: {
          name: "Scrambled Tofu with Spinach and Tomato",
          kcal: 400,
          ingredients: [
            { name: "Tofu", quantity: 100, unit: "g" },
            { name: "Spinat", quantity: 50, unit: "g" },
            { name: "Tomaten", quantity: 2, unit: "" },
          ],
          instructions: "Scramble tofu and cook with spinach and tomatoes."
        },
        lunch: {
          name: "Chickpea and Avocado Salad",
          kcal: 550,
          ingredients: [
            { name: "Kichererbsen", quantity: 100, unit: "g" },
            { name: "Avocado", quantity: 1, unit: "" },
          ],
          instructions: "Mix chickpeas and diced avocado with dressing."
        },
        dinner: {
          name: "Veggie Stir-Fry with Tofu",
          kcal: 600,
          ingredients: [
            { name: "Tofu", quantity: 150, unit: "g" },
            { name: "Gemüse", quantity: 150, unit: "g" },
          ],
          instructions: "Stir-fry tofu with mixed veggies."
        },
      },
      sport: "Swimming: 30 Minutes",
      totalCalories: 1550,
    },
    {
      day: "Day 10",
      meals: {
        breakfast: {
          name: "Apple Cinnamon Oatmeal",
          kcal: 400,
          ingredients: [
            { name: "Haferflocken", quantity: 50, unit: "g" },
            { name: "Apfel", quantity: 1, unit: "" },
            { name: "Zimt", quantity: 1, unit: "TL" },
          ],
          instructions: "Cook oats and top with diced apple and cinnamon."
        },
        lunch: {
          name: "Veggie Wrap with Hummus",
          kcal: 550,
          ingredients: [
            { name: "Vollkornwrap", quantity: 1, unit: "" },
            { name: "Hummus", quantity: 2, unit: "EL" },
          ],
          instructions: "Spread hummus on the wrap and add mixed veggies."
        },
        dinner: {
          name: "Stuffed Sweet Potatoes with Beans",
          kcal: 600,
          ingredients: [
            { name: "Süßkartoffeln", quantity: 2, unit: "" },
            { name: "Schwarze Bohnen", quantity: 100, unit: "g" },
          ],
          instructions: "Bake sweet potatoes and stuff with black beans."
        },
      },
      sport: "Pilates: 45 Minutes",
      totalCalories: 1550,
    }
  ];
  

export default function Home() {
  const [plan, setPlan] = useState<DayPlan[]>(dailyMeals.slice(0, 5)); // Only display the first 5 days
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([]);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showShoppingList, setShowShoppingList] = useState(false);

  useEffect(() => {
    generateShoppingList();
  }, [plan]);

  // Randomize the meal plan
  const randomizeMeals = () => {
    const randomizedPlan = plan.map((day) => ({
      ...day,
      meals: Object.keys(day.meals).reduce((acc, mealType) => {
        const randomMeal = dailyMeals[Math.floor(Math.random() * dailyMeals.length)].meals[mealType];
        acc[mealType] = randomMeal;
        return acc;
      }, {} as Record<string, Meal>),
    }));
    setPlan(randomizedPlan);
  };

  // Generate shopping list from the current meal plan
  const generateShoppingList = () => {
    const ingredientMap = new Map<string, { quantity: number; unit: string }>();

    plan.forEach((day) => {
      Object.values(day.meals).forEach((meal) => {
        meal.ingredients.forEach(({ name, quantity, unit }) => {
          const existing = ingredientMap.get(name);
          if (existing) {
            ingredientMap.set(name, {
              quantity: existing.quantity + quantity,
              unit,
            });
          } else {
            ingredientMap.set(name, { quantity, unit });
          }
        });
      });
    });

    const shoppingItems = Array.from(ingredientMap.entries()).map(([name, { quantity, unit }]) => ({
      name,
      quantity,
      unit,
      checked: false,
    }));

    setShoppingList(shoppingItems);
  };

  // Toggle ingredient checked state
  const handleIngredientToggle = (index: number) => {
    setShoppingList((prevList) => {
      const updatedList = [...prevList];
      updatedList[index].checked = !updatedList[index].checked;
      return updatedList;
    });
  };

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

  return (
    <div className="min-h-screen bg-background">
      <header className="py-4 pt-[7vh] bg-background text-text text-center">
        <h1 className="text-2xl font-bold">Your 5-Day Vegetarian Meal Plan</h1>
        <div className="flex w-full items-center justify-center gap-4">
          <MealRandomizer randomizeMeals={randomizeMeals} />
          <div className="mt-8">
            <button
              onClick={() => setShowShoppingList((prev) => !prev)}
              className="px-6 py-2 bg-green-800 text-white rounded-md"
            >
              Show Shopping List
            </button>
          </div>
        </div>
      </header>

      <main className="container ">
        <MealCards plan={plan} handleMealClick={handleMealClick} />

        {showShoppingList && (
          <ShoppingList
            shoppingList={shoppingList}
            handleIngredientToggle={handleIngredientToggle}
            setShowShoppingList={setShowShoppingList}
          />
        )}

        <MealModal isOpen={isModalOpen} meal={selectedMeal} closeModal={closeModal} />
      </main>
    </div>
  );
}

// Component to display the meal cards
const MealCards = ({ plan, handleMealClick }: { plan: DayPlan[]; handleMealClick: (meal: Meal) => void }) => (
  <div className="flex flex-wrap justify-center w-[100vw] gap-6">
    {plan.map((day, index) => (
      <div key={index} className="w-full md:w-1/2 lg:w-1/3 ">
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

// Component to display the shopping list
const ShoppingList = ({
  shoppingList,
  handleIngredientToggle,
  setShowShoppingList,
}: {
  shoppingList: ShoppingListItem[];
  handleIngredientToggle: (index: number) => void;
  setShowShoppingList: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div className="absolute w-full h-full  top-0 items-center justify-center flex flex-col">
    <div className="bg-background relative shadow-2xl shadow-text p-6 rounded-lg  w-96">
      <h2 className="text-2xl font-semibold mb-4">Shopping List</h2>
      <button
        onClick={() => setShowShoppingList((prev) => !prev)}
        className="px-4 absolute right-4 top-4 py-2 bg-lighterBackground text-white rounded-md mb-4"
      >
        Close
      </button>
      <ul className="space-y-2">
        {shoppingList.map((item, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleIngredientToggle(index)}
              className="mr-2"
            />
            {item.quantity} {item.unit} {item.name}
          </li>
        ))}
      </ul>
    </div>
  </div>
);


// Modal component for meal details
const MealModal = ({
  isOpen,
  meal,
  closeModal,
}: {
  isOpen: boolean;
  meal: Meal | null;
  closeModal: () => void;
}) => {
  if (!isOpen || !meal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-background p-6 relative rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold">{meal.name}</h2>
        <p>{meal.kcal} kcal</p>
        <h3 className="mt-4 text-lg font-semibold">Ingredients</h3>
        <ul className="list-disc pl-6">
          {meal.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name} - {ingredient.quantity} {ingredient.unit}
            </li>
          ))}
        </ul>
        <h3 className="mt-4 text-lg font-semibold">Instructions</h3>
        <p className="mb-4">{meal.instructions}</p>
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-lighterBackground absolute right-2 bottom-2 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

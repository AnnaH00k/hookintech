"use client";

import { useEffect } from "react";
import { FinancialOverview } from "./components/FinancialOverview";
import { BusinessIdeas } from "./components/BusinessIdeas";
import { TodoList } from "./components/TodoList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { BusinessIdea, FinancialEntry, TodoItem } from "./types";
import { DEFAULT_AZUBEE_IDEA, COMPONENTS_IDEA } from "./constants";
import { DataImportExport } from "./components/DataImportExport";

interface ImportedData {
  financialData: FinancialEntry[];
  businessIdeas: BusinessIdea[];
  todoItems: TodoItem[];
}

export default function SelfEmployment() {
  const [businessIdeas, setBusinessIdeas] = useLocalStorage<BusinessIdea[]>(
    "businessIdeas",
    []
  );
  const [financialData, setFinancialData] = useLocalStorage<FinancialEntry[]>(
    "financialData",
    []
  );
  const [todoItems, setTodoItems] = useLocalStorage<TodoItem[]>(
    "todoItems",
    []
  );
  const MONEY_GOAL = 25000; // Minimum capital for GmbH

  useEffect(() => {
    // Add default business ideas if they don't exist
    const hasAzubee = businessIdeas.some((idea) => idea.title === "Azubee");
    const hasComponents = businessIdeas.some(
      (idea) => idea.title === "React UI Component Library"
    );

    if (!hasAzubee || !hasComponents) {
      setBusinessIdeas((prev) => [
        ...prev,
        ...(!hasAzubee ? [DEFAULT_AZUBEE_IDEA] : []),
        ...(!hasComponents ? [COMPONENTS_IDEA] : []),
      ]);
    }
  }, []);

  const handleImportData = (data: ImportedData) => {
    setFinancialData(data.financialData);
    setBusinessIdeas(data.businessIdeas);
    setTodoItems(data.todoItems);
  };

  return (
    <div className="min-h-screen bg-[#0A1109] text-[#A0A2A0] p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Self Employment Journey
      </h1>

      <DataImportExport
        data={{ financialData, businessIdeas, todoItems }}
        onImport={handleImportData}
      />

      <FinancialOverview
        financialData={financialData}
        moneyGoal={MONEY_GOAL}
        onAddTransaction={(entry) =>
          setFinancialData((prev) => [...prev, entry])
        }
        onDeleteTransaction={(index) =>
          setFinancialData((prev) => prev.filter((_, i) => i !== index))
        }
      />

      <BusinessIdeas
        ideas={businessIdeas}
        onAddIdea={(idea) => setBusinessIdeas((prev) => [...prev, idea])}
      />

      <TodoList
        items={todoItems}
        onAddItem={(item) => setTodoItems((prev) => [...prev, item])}
        onToggleComplete={(id) =>
          setTodoItems((prev) =>
            prev.map((item) =>
              item.id === id ? { ...item, completed: !item.completed } : item
            )
          )
        }
        onDeleteItem={(id) =>
          setTodoItems((prev) => prev.filter((item) => item.id !== id))
        }
      />
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { FinancialOverview } from "./components/FinancialOverview";
import { BusinessIdeas } from "./components/BusinessIdeas";
import { TodoList } from "./components/TodoList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { BusinessIdea, FinancialEntry, TodoItem } from "./types";
import { DEFAULT_AZUBEE_IDEA, COMPONENTS_IDEA } from "./constants";
import { DataImportExport } from "./components/DataImportExport";
import Link from "next/link";

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

      <section className="max-w-4xl mx-auto mb-12 bg-[#1A211A] rounded-lg p-6">
        <h2 className="text-2xl text-center font-semibold mb-4 text-[#C0C2C0]">
          6 Months to Money Making
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/swimmingCourses"
            className="flex items-center justify-center p-4 bg-[#2A312A] rounded-lg hover:bg-[#3A413A] transition-colors duration-200"
          >
            <div className="text-center">
              <h3 className="font-medium text-lg mb-2">Swimming Courses</h3>
              <p className="text-sm text-[#808280]">Teach swimming lessons</p>
            </div>
          </Link>
          <Link
            href="/hookbook"
            className="flex items-center justify-center p-4 bg-[#2A312A] rounded-lg hover:bg-[#3A413A] transition-colors duration-200"
          >
            <div className="text-center">
              <h3 className="font-medium text-lg mb-2">Novel Writing</h3>
              <p className="text-sm text-[#808280]">
                Create and publish a Novel
              </p>
            </div>
          </Link>
          <Link
            href="/studyvation"
            className="flex items-center justify-center p-4 bg-[#2A312A] rounded-lg hover:bg-[#3A413A] transition-colors duration-200"
          >
            <div className="text-center">
              <h3 className="font-medium text-lg mb-2">App Development</h3>
              <p className="text-sm text-[#808280]">Build and launch FaBapp</p>
            </div>
          </Link>
        </div>
      </section>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-1 gap-8">
        <div className="space-y-8">
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
        </div>

        <div className="space-y-8">
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
                  item.id === id
                    ? { ...item, completed: !item.completed }
                    : item
                )
              )
            }
            onDeleteItem={(id) =>
              setTodoItems((prev) => prev.filter((item) => item.id !== id))
            }
          />
        </div>
      </div>
    </div>
  );
}

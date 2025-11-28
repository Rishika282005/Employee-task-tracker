import React, { useState, useEffect } from "react";
import { initialData } from "./mockData";
import DashboardSummary from "./components/DashboardSummary";
import TaskFilter from "./components/TaskFilter";
import EmployeeList from "./components/EmployeeList";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");

  // Load from localStorage or from mock data
  useEffect(() => {
    const storedData = localStorage.getItem("employeeTaskData");
    if (storedData) {
      setEmployees(JSON.parse(storedData));
    } else {
      setEmployees(initialData.employees);
    }
  }, []);

  // Save to localStorage whenever employees change
  useEffect(() => {
    if (employees.length > 0) {
      localStorage.setItem("employeeTaskData", JSON.stringify(employees));
    }
  }, [employees]);

  const handleAddTask = ({ title, status, employeeId }) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === employeeId
          ? {
              ...emp,
              tasks: [
                ...emp.tasks,
                {
                  id: Date.now(), // simple unique ID
                  title,
                  status,
                },
              ],
            }
          : emp
      )
    );
  };

  const handleStatusChange = (employeeId, taskId, newStatus) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === employeeId
          ? {
              ...emp,
              tasks: emp.tasks.map((task) =>
                task.id === taskId ? { ...task, status: newStatus } : task
              ),
            }
          : emp
      )
    );
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Employee Task Tracker</h1>
        <p>Track tasks across your team at a glance.</p>
      </header>

      <main className="app-main">
        <DashboardSummary employees={employees} />

        <div className="top-bar">
          <TaskFilter statusFilter={statusFilter} onChange={setStatusFilter} />
        </div>

        <div className="content-grid">
          <EmployeeList
            employees={employees}
            statusFilter={statusFilter}
            onStatusChange={handleStatusChange}
          />
          <TaskForm employees={employees} onAddTask={handleAddTask} />
        </div>
      </main>

      <footer className="app-footer">
        <small>
          Frontend Assignment • Mock data only • LocalStorage persistence enabled
        </small>
      </footer>
    </div>
  );
}

export default App;

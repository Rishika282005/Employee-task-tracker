import React, { useState } from "react";

const TaskForm = ({ employees, onAddTask }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");
  const [employeeId, setEmployeeId] = useState(
    employees.length > 0 ? employees[0].id : ""
  );
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }
    if (!employeeId) {
      setError("Please select an employee.");
      return;
    }

    onAddTask({
      title: title.trim(),
      status,
      employeeId: Number(employeeId),
    });

    // reset form
    setTitle("");
    setStatus("Pending");
    setError("");
  };

  return (
    <section className="task-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task title
          <input
            type="text"
            placeholder="e.g., Review PR #42"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Assign to
          <select
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          >
            {employees.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.name} ({emp.role})
              </option>
            ))}
          </select>
        </label>

        <label>
          Status
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="primary-btn">
          Add Task
        </button>
      </form>
    </section>
  );
};

export default TaskForm;

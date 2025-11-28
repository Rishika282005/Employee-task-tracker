import React from "react";

const EmployeeList = ({ employees, statusFilter, onStatusChange }) => {
  return (
    <section className="employee-list">
      <h2>Employees & Tasks</h2>
      {employees.map((employee) => {
        const filteredTasks =
          statusFilter === "All"
            ? employee.tasks
            : employee.tasks.filter((task) => task.status === statusFilter);

        return (
          <div key={employee.id} className="employee-card">
            <div className="employee-header">
              <div>
                <h3>{employee.name}</h3>
                <p className="employee-role">{employee.role}</p>
              </div>
            </div>

            {filteredTasks.length === 0 ? (
              <p className="no-tasks">No tasks for this filter.</p>
            ) : (
              <ul className="task-list">
                {filteredTasks.map((task) => (
                  <li key={task.id} className="task-item">
                    <div className="task-main">
                      <p className="task-title">{task.title}</p>
                      <span
                        className={`status-pill status-${task.status
                          .replace(" ", "")
                          .toLowerCase()}`}
                      >
                        {task.status}
                      </span>
                    </div>
                    <div className="task-actions">
                      <label>
                        Status:
                        <select
                          value={task.status}
                          onChange={(e) =>
                            onStatusChange(
                              employee.id,
                              task.id,
                              e.target.value
                            )
                          }
                        >
                          <option value="Pending">Pending</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default EmployeeList;

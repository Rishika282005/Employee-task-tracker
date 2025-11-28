import React from "react";

const FILTERS = ["All", "Pending", "In Progress", "Completed"];

const TaskFilter = ({ statusFilter, onChange }) => {
  return (
    <div className="task-filter">
      <span>Filter by status:</span>
      <div className="filter-buttons">
        {FILTERS.map((status) => (
          <button
            key={status}
            className={
              statusFilter === status ? "filter-btn active" : "filter-btn"
            }
            onClick={() => onChange(status)}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskFilter;

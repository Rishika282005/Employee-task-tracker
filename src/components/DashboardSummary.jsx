import React from "react";

const DashboardSummary = ({ employees }) => {
  const allTasks = employees.flatMap((emp) => emp.tasks);
  const totalTasks = allTasks.length;
  const completedTasks = allTasks.filter(
    (task) => task.status === "Completed"
  ).length;
  const pendingTasks = allTasks.filter(
    (task) => task.status === "Pending"
  ).length;
  const inProgressTasks = allTasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const completedPercent =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <section className="dashboard">
      <h2>Dashboard Summary</h2>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Tasks</h3>
          <p className="card-number">{totalTasks}</p>
        </div>
        <div className="card">
          <h3>Completed</h3>
          <p className="card-number">{completedTasks}</p>
          <p className="card-sub">{completedPercent}% of total</p>
        </div>
        <div className="card">
          <h3>In Progress</h3>
          <p className="card-number">{inProgressTasks}</p>
        </div>
        <div className="card">
          <h3>Pending</h3>
          <p className="card-number">{pendingTasks}</p>
        </div>
      </div>
    </section>
  );
};

export default DashboardSummary;

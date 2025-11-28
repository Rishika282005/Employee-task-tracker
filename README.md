# Employee Task Tracker (Frontend Only)

A responsive and interactive employee task management web application built using **React**.  

The app allows users to:
- View employees and their assigned tasks  
- Filter tasks by status (Pending / In Progress / Completed / All)  
- Add new tasks  
- Update task status  
- View a real-time dashboard summary  
- Persist all changes using **localStorage**

---

##  Live Demo
[(Website link)](https://rishika282005.github.io/Employee-task-tracker/)

###  Dashboard Summary  
Displays:
- Total tasks  
- Completed tasks  
- In Progress tasks  
- Pending tasks  
- Auto-updates when tasks change or new tasks are added

  ###  Task Filtering  
Filter tasks by:
- **All**
- **Pending**
- **In Progress**
- **Completed**

###  Employee Task List  
- Shows each employee with role and assigned tasks  
- Each task shows title + status pill  
- Status can be changed via dropdown  
- Dashboard updates instantly  

###  Add New Task  
- Enter task title  
- Select employee  
- Choose status  
- New task appears immediately under that employee  

###  LocalStorage Persistence  
All task updates and additions are saved in the browser,  
so data remains even after refreshing the page.

##  Tech Stack

- **React (Create React App)**
- **JavaScript (ES6+)**
- **Custom CSS (responsive & modern UI)**
- **LocalStorage API**
- **Mock JSON Data**

### Process to run
- npm install
- npm start
- npm run build

## To Deploy
- npm install gh-pages --save-dev
- "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
- npm run deploy


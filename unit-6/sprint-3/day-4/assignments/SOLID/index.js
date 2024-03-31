// Single Responsibility Principle (SRP)
class Task {
    constructor(taskId, title, description, assignee) {
      this.taskId = taskId;
      this.title = title;
      this.description = description;
      this.assignee = assignee;
      this.completed = false;
    }
  }
  
  // Open/Closed Principle (OCP)
  class TaskRepository {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
    }
  
    getTasks(filterFunc) {
      return this.tasks.filter(filterFunc);
    }
  }
  
  // Liskov Substitution Principle (LSP)
  class User {
    constructor(userId, name) {
      this.userId = userId;
      this.name = name;
    }
  }
  
  // Interface Segregation Principle (ISP)
  class TaskCompletable {
    markAsCompleted() {
      throw new Error("Not implemented");
    }
  }
  
  // Dependency Inversion Principle (DIP)
  class TaskManager extends TaskCompletable {
    constructor(taskRepository) {
      super();
      this.taskRepository = taskRepository;
    }
  
    createTask(taskId, title, description, assignee) {
      const task = new Task(taskId, title, description, assignee);
      this.taskRepository.addTask(task);
    }
  
    assignTask(task, assignee) {
      task.assignee = assignee;
    }
  
    markAsCompleted(task) {
      task.completed = true;
    }
  
    getTasksByAssignee(assignee) {
      return this.taskRepository.getTasks((task) => task.assignee === assignee);
    }
  
    getIncompleteTasks() {
      return this.taskRepository.getTasks((task) => !task.completed);
    }
  }
  
  // Example Usage
  const taskRepository = new TaskRepository();
  const taskManager = new TaskManager(taskRepository);
  
  taskManager.createTask(1, "Implement SOLID principles", "Build a simple task management system", "Alice");
  taskManager.createTask(2, "Write documentation", "Document the implemented system", "Bob");
  
  const tasksForAlice = taskManager.getTasksByAssignee("Alice");
  console.log("Tasks for Alice:", tasksForAlice.map((task) => task.title));
  
  const incompleteTasks = taskManager.getIncompleteTasks();
  console.log("Incomplete tasks:", incompleteTasks.map((task) => task.title));
  
  const taskToComplete = tasksForAlice[0];
  taskManager.markAsCompleted(taskToComplete);
  
  const updatedIncompleteTasks = taskManager.getIncompleteTasks();
  console.log("Incomplete tasks after completion:", updatedIncompleteTasks.map((task) => task.title));
  
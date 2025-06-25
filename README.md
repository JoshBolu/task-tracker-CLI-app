# Task Tracker CLI

A simple Node.js command-line tool for tracking tasks, storing data in a local JSON file.

## Features

- Add new tasks
- List all tasks
- List tasks by status: to do, in progress, or done
- Update task progress
- Delete tasks

## Usage

1. **Install Node.js** if you haven’t already.

2. **Clone this repository** and navigate to the project folder.

3. **Run commands:**

```sh
node app.js <command> [arguments]
```

### Commands

- `list`  
  List all tasks.

- `add <description>`  
  Add a new task with the given description.

- `delete <id>`  
  Delete the task with the specified ID.

- `update <id> <progress>`  
  Update the progress of the task (`to do`, `in progress`, or `done`).

- `list-done`  
  List all tasks marked as done.

- `list-todo`  
  List all tasks marked as to do.

- `list-inprogress`  
  List all tasks marked as in progress.

### Example

```sh
node app.js add "Buy groceries"
node app.js list
node app.js update 1 "done"
node app.js delete 2
node app.js list-done
```

## Data Storage

All tasks are stored in [`testfile.json`](testfile.json).

## Project URL
https://roadmap.sh/projects/task-tracker

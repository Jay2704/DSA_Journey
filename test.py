

class SimpleTaskManagementSystemImpl(SimpleTaskManagementSystem):
    def __init__(self):
        self.tasks = {}
        self.counter = 1

    def add_task(self, timestamp: int, name: str, priority: int) -> str:
        # Generate unique task ID
        task_id = f"task_id_{self.counter}"
        # Store task details
        self.tasks[task_id] = {"name": name, "priority": priority}
        self.counter += 1
        return task_id

    def update_task(self, timestamp: int, task_id: str, name: str, priority: int) -> bool:
        # Update if task exists
        if task_id not in self.tasks:
            return False
        self.tasks[task_id] = {"name": name, "priority": priority}
        return True

    def get_task(self, timestamp: int, task_id: str):
        # Return compact JSON string if task exists
        if task_id in self.tasks:
            task = self.tasks[task_id]
            return f'{{"name":"{task["name"]}","priority":{task["priority"]}}}'
        return None
    



# ========================

class SimpleTaskManagementSystemImpl(SimpleTaskManagementSystem):
    def __init__(self):
        self.tasks = {}
        self.counter = 1

    def add_task(self, timestamp: int, name: str, priority: int) -> str:
        task_id = f"task_id_{self.counter}"
        self.tasks[task_id] = {
            "name": name,
            "priority": priority,
            "created_at": self.counter
        }
        self.counter += 1
        return task_id

    def update_task(self, timestamp: int, task_id: str, name: str, priority: int) -> bool:
        if task_id not in self.tasks:
            return False
        self.tasks[task_id]["name"] = name
        self.tasks[task_id]["priority"] = priority
        return True

    def get_task(self, timestamp: int, task_id: str):
        if task_id in self.tasks:
            t = self.tasks[task_id]
            return f'{{"name":"{t["name"]}","priority":{t["priority"]}}}'
        return None

    def list_tasks_sorted(self, timestamp: int, limit: int):
        if limit == 0:
            return []
        sorted_tasks = sorted(
            self.tasks.items(),
            key=lambda x: (-x[1]["priority"], int(x[0].split("_")[2]))
        )
        return [task_id for task_id, _ in sorted_tasks[:limit]]

    def search_tasks(self, timestamp: int, name_filter: str, max_results: int):
        if max_results == 0:
            return []
        filtered = [
            (task_id, task)
            for task_id, task in self.tasks.items()
            if name_filter in task["name"]
        ]
        sorted_filtered = sorted(
            filtered,
            key=lambda x: (-x[1]["priority"], int(x[0].split("_")[2]))
        )
        return [task_id for task_id, _ in sorted_filtered[:max_results]]
    


# ===================================

    # ---------- LEVEL 3 ----------
    def add_user(self, timestamp: int, user_id: str, quota: int) -> bool:
        # Add a new user with a given quota
        if user_id in self.users:
            return False
        self.users[user_id] = {"quota": quota, "assignments": []}
        return True

    def assign_task(self, timestamp: int, task_id: str, user_id: str, finish_time: int) -> bool:
        # Validate user and task existence
        if user_id not in self.users or task_id not in self.tasks:
            return False

        user = self.users[user_id]

        # Remove expired assignments first
        active_assignments = []
        for a in user["assignments"]:
            if timestamp < a["finish_time"]:
                active_assignments.append(a)
        user["assignments"] = active_assignments

        # Check quota limit
        if len(user["assignments"]) >= user["quota"]:
            return False

        # Add new assignment
        user["assignments"].append({
            "task_id": task_id,
            "start_time": timestamp,
            "finish_time": finish_time
        })
        return True

    def list_user_tasks(self, timestamp: int, user_id: str):
        # Return active tasks for a user at given timestamp
        if user_id not in self.users:
            return []

        user = self.users[user_id]

        # Filter active assignments
        active = []
        for a in user["assignments"]:
            if timestamp < a["finish_time"]:
                active.append(a)

        # Sort by finish_time asc, then start_time asc
        active.sort(key=lambda x: (x["finish_time"], x["start_time"]))
        return [a["task_id"] for a in active]
    





# ===================================


     # ---------- LEVEL 4 ----------
    def complete_task(self, timestamp: int, task_id: str, user_id: str) -> bool:
        # Validate user and task existence
        if user_id not in self.users or task_id not in self.tasks:
            return False

        user = self.users[user_id]
        target = None

        # Find earliest active assignment for this task
        for a in user["assignments"]:
            if (
                a["task_id"] == task_id
                and "completed_at" not in a
                and a["start_time"] <= timestamp < a["finish_time"]
            ):
                if target is None or a["start_time"] < target["start_time"]:
                    target = a

        if target is None:
            return False

        # Mark as completed
        target["completed_at"] = timestamp
        return True

    def get_overdue_assignments(self, timestamp: int, user_id: str):
        # Return empty if user doesn't exist
        if user_id not in self.users:
            return []

        user = self.users[user_id]
        overdue = []

        # Collect expired and uncompleted assignments
        for a in user["assignments"]:
            if (
                timestamp >= a["finish_time"]
                and "completed_at" not in a
            ):
                overdue.append(a)

        # Sort by finish_time asc, then start_time asc
        overdue.sort(key=lambda x: (x["finish_time"], x["start_time"]))
        return [a["task_id"] for a in overdue]
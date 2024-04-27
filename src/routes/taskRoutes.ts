import { Request, Response, Application } from "express";

import { TaskController } from "../controllers/taskController";

export class TaskRoutes {
    private taskController: TaskController = new TaskController();

    public routes(app: Application): void {
        app.route('/addNewTask')
            .post(this.taskController.addNewTasks);

        app.route('/taskCompleted')
            .put(this.taskController.taskCompleted);
    }
}
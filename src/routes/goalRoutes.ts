import { Request, Response, Application } from "express";

import { GoalController } from "../controllers/goalController";

export class GoalRoutes {
    private goalController: GoalController = new GoalController();

    public routes(app: Application): void {
        app.route('/addNewGoal')
            .post(this.goalController.addNewGoal);
    }
}
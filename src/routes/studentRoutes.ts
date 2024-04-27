import { Request, Response, Application } from "express";

import { StudentController } from "../controllers/studentController";

export class StudentRoutes {
    private studentController: StudentController = new StudentController();

    public routes(app: Application): void {
        app.route('/addNewStudent')
            .post(this.studentController.addNewStudent);
    }
}
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import { StudentRoutes } from './routes/studentRoutes';
import { TaskRoutes } from './routes/taskRoutes';
import { GoalRoutes } from './routes/goalRoutes';

class App {
    public app: express.Application;
    private studentRoutes: StudentRoutes = new StudentRoutes();
    private taskRoutes: TaskRoutes = new TaskRoutes();
    private goalRoutes: GoalRoutes = new GoalRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();

        this.studentRoutes.routes(this.app);
        this.taskRoutes.routes(this.app);
        this.goalRoutes.routes(this.app);
    }

    private config(): void {
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            next();
        })

        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
    }

    private mongoSetup(): void {
        mongoose.connect('mongodb://localhost:27017/Project-Management', {})
            .then(() => console.log('Connection Successful'))
            .catch((err) => console.log('Mongo Error ', err))
    }
}

export default new App().app;
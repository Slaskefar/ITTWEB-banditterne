import {Exercise} from '../models/exercise';
import {DataAccess} from '../services/data-acces';

export class IndexController{
    public static Index(req,res){
        res.render('index', { title: 'Exercise', ex: new Exercise() });
    }

    public static Post(req,res,next){
        var exercise = new Exercise();

        exercise.name = req.body.name;
        exercise.description = req.body.description;
        exercise.sets = req.body.sets;
        exercise.reps = req.body.reps;
        var dataAccess = new DataAccess();
        
        dataAccess.create("Exercises",exercise);
        res.render('index', { title: 'Workout Program'});
        console.log("post");
    }
}
import {Exercise} from '../models/exercise';
import {Workout} from '../models/workout';
import {DataAccess} from '../services/data-acces';

export class StartPageController{
    public StartPage(req,res){
        res.render('start-page', { title: 'Badass FITNESS' });
    }

    public Post(req,res,next){
        
        var workout = new Workout();
        workout.exercises = Array<Exercise>()
        workout.name = req.body.workoutName;
        console.log(req.body);
        
            for (var index = 1; index < 6; index++) {
                var exercise = new Exercise();
                exercise.name = req.body["n"+index];
                exercise.description = req.body["d"+index];
                exercise.sets = req.body["s"+index];
                exercise.reps = req.body["r"+index];
                workout.exercises.push(exercise)
            }
        
            var dataAccess = new DataAccess();
            
            dataAccess.create("Workouts",workout);
            res.render('start-page', { title: 'Badass FITNESS' });
    }
}
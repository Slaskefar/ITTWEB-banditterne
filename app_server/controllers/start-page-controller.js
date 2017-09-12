"use strict";
exports.__esModule = true;
var exercise_1 = require("../models/exercise");
var workout_1 = require("../models/workout");
var data_acces_1 = require("../services/data-acces");
var StartPageController = (function () {
    function StartPageController() {
    }
    StartPageController.prototype.StartPage = function (req, res) {
        res.render('start-page', { title: 'Badass FITNESS' });
    };
    StartPageController.prototype.Post = function (req, res, next) {
        var workout = new workout_1.Workout();
        workout.exercises = Array();
        workout.name = req.body.workoutName;
        console.log(req.body);
        for (var index = 1; index < 6; index++) {
            var exercise = new exercise_1.Exercise();
            exercise.name = req.body["n" + index];
            exercise.description = req.body["d" + index];
            exercise.sets = req.body["s" + index];
            exercise.reps = req.body["r" + index];
            workout.exercises.push(exercise);
        }
        var dataAccess = new data_acces_1.DataAccess();
        dataAccess.create("Workouts", workout);
        res.render('start-page', { title: 'Badass FITNESS' });
    };
    return StartPageController;
}());
exports.StartPageController = StartPageController;
//# sourceMappingURL=start-page-controller.js.map
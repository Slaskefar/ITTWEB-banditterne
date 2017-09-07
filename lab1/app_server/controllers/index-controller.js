"use strict";
exports.__esModule = true;
var exercise_1 = require("../models/exercise");
var data_acces_1 = require("../services/data-acces");
var IndexController = (function () {
    function IndexController() {
    }
    IndexController.Index = function (req, res) {
        res.render('index', { title: 'Exercise', ex: new exercise_1.Exercise() });
    };
    IndexController.Post = function (req, res, next) {
        var exercise = new exercise_1.Exercise();
        exercise.name = req.body.name;
        exercise.description = req.body.description;
        exercise.sets = req.body.sets;
        exercise.reps = req.body.reps;
        var dataAccess = new data_acces_1.DataAccess();
        dataAccess.create("Exercises", exercise);
        res.render('index', { title: 'Workout Program' });
        console.log("post");
    };
    return IndexController;
}());
exports.IndexController = IndexController;
//# sourceMappingURL=index-controller.js.map
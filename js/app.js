/*
    app.js: main application script
    this is an Angular application
 */

"use strict";
//the first thing we pass is the file we work on and the second is elements we need/
// no semicolon at the end of declaration sothat the controller isobvious
//$scope intialization functin- angular s responsible for creating it
//to initialize controllr
angular.module('MovieApp', [])
    .controller('MoviesController', function($scope){
        $scope.movies = movies;
    });
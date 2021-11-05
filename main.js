let numberOfList = prompt("Сколько фильмов вы посмотрели?:");

let personalMovieDB = new Object();
personalMovieDB.count = numberOfList;
personalMovieDB.movies = new Object();
personalMovieDB.actors = new Object();
personalMovieDB.genres = new Array();
personalMovieDB.privat = false;

let lastMovie = prompt("Какой последний фильм вы помсотрели?:");
let scoreMovie = prompt("На сколько оцените его?:");


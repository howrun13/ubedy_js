let numberOfList = +prompt('Сколько фильмов вы посмотрели?:', '');

let personalMovieDB = {
    count : numberOfList,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const a = prompt('Какой последний фильм вы помсотрели?:', ''),
      b = prompt('На сколько оцените его?:', ''),
      c = prompt('Какой последний фильм вы помсотрели?:', ''),
      d = prompt('На сколько оцените его?:', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log (personalMovieDB)

//Практическое задание №2

if (personalMovieDB.count < 10){
    consosle.log ('Просмотренно довольно мало фильмов');
}   else if (10 < personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else if ( personalMovieDB.count > 30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }


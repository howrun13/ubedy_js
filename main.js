'use strict'

let numberOfList = +prompt('Сколько фильмов вы посмотрели?:', '');

let personalMovieDB = {
    count : numberOfList,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

for (let i = 0; i < 2; i++){
    const a = prompt('Какой последний фильм вы посмотрели?:', ''),
          b = prompt('На сколько оцените его?:', '');

    if ( a != null && b != null && a !='' && b !='' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done')
    }else{
        console.log('error');
        i--;
    }
    
};


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


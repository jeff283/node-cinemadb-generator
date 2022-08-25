// TODO
/*
    -Create database named cinema_db
    -Create table movie
    -In table movie,
        -Create fields: movie_ID(PK), title, genre, rating, description
    -Create table showtime
    -In table showtime,
        -Create fields: showtime_ID(PK), movie_ID(FK), time(datetime/string), location
        -Location notes:
            -Where movie will be playing e.g suburb
            -One movie can be played in mutiple locations at the same time
    -Insert at least 5 records into the movie table
    -Insert at least 10 records into the showtime table
*/


const mysql = require('mysql');

//Create connection
//Add your database credentials
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : process.env.PASSWORD
    ,database : "cinema_db"  /*Comment this line to create database*/
});

//Connect to database
db.connect((err) => {
    if(err) throw err;
    console.log("MySql Connected");
});

// Create database
let sql = "CREATE DATABASE IF NOT EXISTS cinema_db";
db.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results);
    console.log("Database created");
});

//Creating tables

//Creating movie table
sql = "CREATE TABLE IF NOT EXISTS  movie (movie_ID int AUTO_INCREMENT UNIQUE, title VARCHAR(255), genre VARCHAR(255), rating VARCHAR(255), description VARCHAR(1000), PRIMARY KEY(movie_ID))";

db.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results);
    console.log("movie table created");
});

//Creating showtime table
sql = "CREATE TABLE IF NOT EXISTS  showtime (showtime_ID int AUTO_INCREMENT UNIQUE, movie_ID int ,time DATETIME, location VARCHAR(255), PRIMARY KEY(showtime_ID), FOREIGN KEY(movie_ID) REFERENCES movie(movie_ID))";

db.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results);
    console.log("showtime table created");
});

//Inserting movie records
sql = "insert into movie (movie_ID, title, genre, rating , description) values ?";

let movies = [
[1,'Sandor slash Ida','Drama|Romance','2','Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.'],
[2,'Sekirei','(no genres listed)','3','Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.'],
[3,'Prairie Home Companion, A','Comedy|Drama|Musical','1','Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.'],
[4,'Two-Way Stretch','Comedy|Crime','2','Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.'],
[5,"To Be and to Have (Être et avoir)","Documentary","5","Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."],
[6,'Fay Grim','Action|Thriller','3','Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.'],
[7,'What No One Knows (Det som ingen ved)','Drama|Thriller','1','Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.'],
[8,'Ants in the Pants','Comedy|Romance','4','Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.'],
[9,'Hara-Kiri: Death of a Samurai','Drama','4','Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.'],
[10,'Monsturd','Comedy|Horror','1','Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.']
];

db.query(sql, [movies] , (err, results) => {
    if(err) throw err;
    console.log(results);
    console.log("movie records  created");
});



//Inserting showtime records

sql = "insert into showtime (showtime_ID, movie_ID, time, location) values ?";

let showtimes = [
[1,7,'2022-10-12 10:23:12','30 Donald Parkway'],
[2,7,'2023-08-06 18:18:07','79674 Iowa Parkway'],
[3,7,'2022-09-24 12:37:09','48837 Warner Pass'],
[4,4,'2023-03-26 14:06:47','3747 Reindahl Street'],
[5,5,'2023-06-17 22:00:53','9392 Sutteridge Parkway'],
[6,10,'2023-08-05 04:14:01','972 Manufacturers Trail'],
[7,3,'2022-11-30 01:54:56','1 Lerdahl Circle'],
[8,5,'2023-01-21 22:53:43','7321 Hazelcrest Hill'],
[9,9,'2023-06-04 02:16:06','8 La Follette Avenue'],
[10,9,'2023-04-13 11:43:07','91 Victoria Trail'],
[11,1,'2023-06-23 08:09:31','2 Northport Road'],
[12,5,'2023-02-01 17:55:36','4 Erie Park'],
[13,5,'2023-07-30 06:56:35','0 Loftsgordon Plaza'],
[14,7,'2023-03-09 02:26:03','27 Village Green Court'],
[15,3,'2022-11-02 16:41:39','8 Laurel Road'],
[16,3,'2023-03-22 10:04:39','0 Buena Vista Crossing'],
[17,4,'2022-09-03 08:25:29','2 Oxford Drive'],
[18,10,'2023-04-01 22:27:59','0 Dottie Trail'],
[19,3,'2022-11-24 12:29:41','18 Forest Pass'],
[20,9,'2023-08-28 15:20:04','6791 Loftsgordon Center']

];

db.query(sql, [showtimes], (err, results) => {
    if(err) throw err;
    console.log(results);
    console.log("showtime records created");
    db.end();
});











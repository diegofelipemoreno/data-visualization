/*------------------- TREE MAP ---------------------*/
var census = [
  { region: "South",      state: "AL",  pop2010:  4784762,  pop2012:  4822023 },
  { region: "West",       state: "AK",  pop2010:   714046,  pop2012:   731449 },
  { region: "West",       state: "AZ",  pop2010:  6410810,  pop2012:  6553255 },
  { region: "South",      state: "AR",  pop2010:  2922750,  pop2012:  2949131 },
  { region: "West",       state: "CA",  pop2010: 37334410,  pop2012: 38041430 },
  { region: "West",       state: "CO",  pop2010:  5048472,  pop2012:  5187582 },
  { region: "Northeast",  state: "CN",  pop2010:  3576616,  pop2012:  3590347 },
  { region: "South",      state: "DE",  pop2010:   899824,  pop2012:   917092 },
  { region: "South",      state: "DC",  pop2010:   604989,  pop2012:   632323 },
  { region: "South",      state: "FL",  pop2010: 18845967,  pop2012: 19317568 },
  { region: "South",      state: "GA",  pop2010:  9714748,  pop2012:  9919945 },
  { region: "West",       state: "HI",  pop2010:  1364274,  pop2012:  1392313 },
  { region: "West",       state: "ID",  pop2010:  1570784,  pop2012:  1595728 },
  { region: "Midwest",    state: "IL",  pop2010: 12840459,  pop2012: 12875255 },
  { region: "Midwest",    state: "IN",  pop2010:  6489856,  pop2012:  6537334 },
  { region: "Midwest",    state: "IA",  pop2010:  3050321,  pop2012:  3074186 },
  { region: "Midwest",    state: "KS",  pop2010:  2858837,  pop2012:  2885905 },
  { region: "South",      state: "KY",  pop2010:  4346655,  pop2012:  4380415 },
  { region: "South",      state: "LA",  pop2010:  4544125,  pop2012:  4601893 },
  { region: "Northeast",  state: "ME",  pop2010:  1327585,  pop2012:  1329192 },
  { region: "South",      state: "MD",  pop2010:  5787998,  pop2012:  5884563 },
  { region: "Northeast",  state: "MA",  pop2010:  6563259,  pop2012:  6646144 },
  { region: "Midwest",    state: "MI",  pop2010:  9877670,  pop2012:  9883360 },
  { region: "Midwest",    state: "MN",  pop2010:  5310737,  pop2012:  5379139 },
  { region: "South",      state: "MS",  pop2010:  2969137,  pop2012:  2984926 },
  { region: "Midwest",    state: "MO",  pop2010:  5996092,  pop2012:  6021988 },
  { region: "West",       state: "MT",  pop2010:   990735,  pop2012:  1005141 },
  { region: "Midwest",    state: "NE",  pop2010:  1829696,  pop2012:  1855525 },
  { region: "West",       state: "NV",  pop2010:  2703758,  pop2012:  2758931 },
  { region: "Northeast",  state: "NH",  pop2010:  1316843,  pop2012:  1320718 },
  { region: "Northeast",  state: "NJ",  pop2010:  8803388,  pop2012:  8864590 },
  { region: "West",       state: "NM",  pop2010:  2064767,  pop2012:  2085538 },
  { region: "Northeast",  state: "NY",  pop2010: 19399242,  pop2012: 19570261 },
  { region: "South",      state: "NC",  pop2010:  9559048,  pop2012:  9752073 },
  { region: "Midwest",    state: "ND",  pop2010:   674363,  pop2012:   699628 },
  { region: "Midwest",    state: "OH",  pop2010: 11538290,  pop2012: 11544225 },
  { region: "South",      state: "OK",  pop2010:  3759482,  pop2012:  3814820 },
  { region: "West",       state: "OR",  pop2010:  3838212,  pop2012:  3899353 },
  { region: "Northeast",  state: "PA",  pop2010: 12711308,  pop2012: 12763536 },
  { region: "Northeast",  state: "RI",  pop2010:  1052769,  pop2012:  1050292 },
  { region: "South",      state: "SC",  pop2010:  4635835,  pop2012:  4723723 },
  { region: "Midwest",    state: "SD",  pop2010:   816223,  pop2012:   833354 },
  { region: "South",      state: "TN",  pop2010:  6356673,  pop2012:  6456243 },
  { region: "South",      state: "TX",  pop2010: 25242683,  pop2012: 26059203 },
  { region: "West",       state: "UT",  pop2010:  2775093,  pop2012:  2855287 },
  { region: "Northeast",  state: "VT",  pop2010:   625916,  pop2012:   626011 },
  { region: "South",      state: "VA",  pop2010:  8025105,  pop2012:  8185867 },
  { region: "West",       state: "WA",  pop2010:  6743636,  pop2012:  6897012 },
  { region: "South",      state: "WV",  pop2010:  1854019,  pop2012:  1855413 },
  { region: "Midwest",    state: "WI",  pop2010:  5689591,  pop2012:  5726398 },
  { region: "West",       state: "WY",  pop2010:   564367,  pop2012:   576412 }
];

var colorRanges = { positive: [ "#FFFFBF","#D9EF8B","#A6D96A","#66BD63","#1A9850","#006837" ],  
                    negative: [ "#FFFFBF","#FEE08B","#FDAE61","#F46D43","#D73027","#A50026" ]
                  };

/*-------------------HEAT MAP ---------------------*/

var game = [
    { team: "UNC",  points: 2, time: 0.85,  unc:  2, duke: 0,  x: 0.506, y: 5.039, note: "Dexter Strickland made Layup" },
    { team: "UNC",  points: 3, time: 1.22,  unc:  5, duke: 0,  x: 1.377, y: 1.184, note: "Reggie Bullock made 3-pt. Jump Shot" },
    { team: "DUKE", points: 2, time: 1.65,  unc:  5, duke: 2,  x: 8.804, y: 7.231, note: "Rasheed Sulaimon made Jump Shot" },
    { team: "UNC",  points: 2, time: 2.32,  unc:  7, duke: 2,  x: 0.506, y: 5.039, note: "James Michael McAdoo made Slam Dunk" },
    { team: "DUKE", points: 2, time: 2.90,  unc:  7, duke: 4,  x: 9.45,  y: 5.011, note: "Amile Jefferson made Layup" },
    { team: "UNC",  points: 2, time: 3.18,  unc:  9, duke: 4,  x: 0.506, y: 5.039, note: "Dexter Strickland made Layup" },
    { team: "DUKE", points: 2, time: 4.43,  unc:  9, duke: 6,  x: 8.690, y: 4.602, note: "Quinn Cook made Floating Jump Shot" },
    { team: "UNC",  points: 2, time: 5.18,  unc: 11, duke: 6,  x: 0.506, y: 5.039, note: "Dexter Strickland made Tip-in" },
    { team: "DUKE", points: 2, time: 5.45,  unc: 11, duke: 8,  x: 0.45,  y: 5.011, note: "Mason Plumlee made Layup" },
    { team: "UNC",  points: 2, time: 5.83,  unc: 13, duke: 8,  x: 0.506, y: 5.039, note: "James Michael McAdoo made Slam Dunk" },
    { team: "UNC",  points: 1, time: 6.73,  unc: 14, duke: 8,  x: -1,    y: -1,    note: "P.J. Hairston made 2nd of 2 Free Throws" },
    { team: "DUKE", points: 2, time: 7.07,  unc: 14, duke: 10, x: 8.579, y: 6.861, note: "Rasheed Sulaimon made Jump Shot" },
    { team: "UNC",  points: 3, time: 7.35,  unc: 17, duke: 10, x: 2.415, y: 8.318, note: "Reggie Bullock made 3-pt. Jump Shot" },
    { team: "DUKE", points: 1, time: 7.93,  unc: 17, duke: 11, x: -1,    y: -1,    note: "Mason Plumlee made 1st of 2 Free Throws" },
    { team: "DUKE", points: 1, time: 7.93,  unc: 17, duke: 12, x: -1,    y: -1,    note: "Mason Plumlee made 2nd of 2 Free Throws" },
    { team: "DUKE", points: 2, time: 8.35,  unc: 17, duke: 14, x: 9.132, y: 4.417, note: "Quinn Cook made Fadeaway Jump Shot" },
    { team: "UNC",  points: 1, time: 10.12, unc: 18, duke: 14, x: -1,    y: -1,    note: "Dexter Strickland made 1st of 2 Free Throws" },
    { team: "UNC",  points: 1, time: 10.12, unc: 19, duke: 14, x: -1,    y: -1,    note: "Dexter Strickland made 2nd of 2 Free Throws" },
    { team: "UNC",  points: 2, time: 11.45, unc: 21, duke: 14, x: 0.506, y: 5.039, note: "James Michael McAdoo made Layup" },
    { team: "DUKE", points: 2, time: 11.52, unc: 21, duke: 16, x: 0.45,  y: 5.011, note: "Mason Plumlee made Slam Dunk" },
    { team: "DUKE", points: 2, time: 12.05, unc: 21, duke: 18, x: 0.45,  y: 5.011, note: "Quinn Cook made Slam Dunk" },
    { team: "UNC",  points: 2, time: 12.22, unc: 23, duke: 18, x: 1.142, y: 6.476, note: "P.J. Hairston made Jump Shot" },
    { team: "UNC",  points: 2, time: 12.78, unc: 25, duke: 18, x: 0.506, y: 5.039, note: "Marcus Paige made Layup" },
    { team: "UNC",  points: 3, time: 13.30, unc: 28, duke: 18, x: 2.188, y: 8.077, note: "Reggie Bullock made 3-pt. Jump Shot" },
    { team: "DUKE", points: 2, time: 14.90, unc: 28, duke: 20, x: 8.911, y: 7.457, note: "Seth Curry made Jump Shot" },
    { team: "DUKE", points: 1, time: 15.18, unc: 28, duke: 21, x: -1,    y: -1,    note: "Quinn Cook made 1st of 2 Free Throws" },
    { team: "DUKE", points: 1, time: 15.18, unc: 28, duke: 22, x: -1,    y: -1,    note: "Quinn Cook made 2nd of 2 Free Throws" },
    { team: "UNC",  points: 2, time: 15.50, unc: 30, duke: 22, x: 1.15,  y: 7.279, note: "Leslie McDonald made Jump Shot" },
    { team: "DUKE", points: 2, time: 15.77, unc: 30, duke: 24, x: 9.665, y: 9.054, note: "Tyler Thornton made Jump Shot" },
    { team: "UNC",  points: 1, time: 16.17, unc: 31, duke: 25, x: -1,    y: -1,    note: "J.P. Tokoto made 1st of 2 Free Throws" },
    { team: "DUKE", points: 2, time: 17.32, unc: 31, duke: 27, x: 0.45,  y: 5.011, note: "Quinn Cook made Reverse Layup" },
    { team: "DUKE", points: 2, time: 18.97, unc: 33, duke: 29, x: 0.45,  y: 5.011, note: "Mason Plumlee made Slam Dunk" },
    { team: "UNC",  points: 1, time: 20.55, unc: 34, duke: 29, x: -1,    y: -1,    note: "James Michael McAdoo made 1st of 2 Free Throws" },
    { team: "DUKE", points: 2, time: 20.63, unc: 34, duke: 31, x: 9.455, y: 5.015, note: "Quinn Cook made Layup" },
    { team: "UNC",  points: 2, time: 21.40, unc: 36, duke: 31, x: 0.518, y: 5.012, note: "Reggie Bullock made Tip-in" },
    { team: "UNC",  points: 2, time: 22.00, unc: 38, duke: 31, x: 0.518, y: 5.012, note: "James Michael McAdoo made Slam Dunk" },
    { team: "DUKE", points: 1, time: 22.97, unc: 38, duke: 32, x: -1,    y: -1,    note: "Seth Curry made 2nd of 2 Free Throws" },
    { team: "DUKE", points: 3, time: 23.63, unc: 38, duke: 35, x: 9.255, y: 0.540, note: "Tyler Thornton made 3-pt. Jump Shot" },
    { team: "DUKE", points: 2, time: 23.42, unc: 38, duke: 37, x: 9.455, y: 5.015, note: "Rasheed Sulaimon made Layup" },
    { team: "UNC",  points: 3, time: 24.82, unc: 41, duke: 37, x: 1.892, y: 1.384, note: "P.J. Hairston made 3-pt. Jump Shot" },
    { team: "DUKE", points: 2, time: 25.30, unc: 41, duke: 39, x: 9.455, y: 5.015, note: "Josh Hairston made Slam Dunk" },
    { team: "DUKE", points: 3, time: 25.70, unc: 41, duke: 42, x: 7.771, y: 2.166, note: "Seth Curry made 3-pt. Jump Shot" },
    { team: "UNC",  points: 1, time: 26.07, unc: 43, duke: 42, x: -1,    y: -1,    note: "P.J. Hairston made 2nd of 2 Free Throws" },
    { team: "DUKE", points: 2, time: 26.50, unc: 43, duke: 44, x: 9.455, y: 5.015, note: "Quinn Cook made Layup" },
    { team: "DUKE", points: 3, time: 26.87, unc: 43, duke: 47, x: 7.327, y: 7.447, note: "Rasheed Sulaimon made 3-pt. Jump Shot" },
    { team: "UNC",  points: 2, time: 27.32, unc: 45, duke: 47, x: 1.575, y: 4.225, note: "Dexter Strickland made Jump Shot" },
    { team: "DUKE", points: 3, time: 27.55, unc: 45, duke: 50, x: 9.139, y: 0.355, note: "Tyler Thornton made 3-pt. Jump Shot" },
    { team: "DUKE", points: 2, time: 28.35, unc: 47, duke: 52, x: 9.455, y: 5.015, note: "Mason Plumlee made Layup" },
    { team: "DUKE", points: 2, time: 32.35, unc: 47, duke: 54, x: 9.037, y: 5.229, note: "Mason Plumlee made Hook Shot" },
    { team: "UNC",  points: 3, time: 32.70, unc: 50, duke: 54, x: 3.042, y: 5.005, note: "Reggie Bullock made 3-pt. Jump Shot" },
    { team: "UNC",  points: 1, time: 33.33, unc: 51, duke: 54, x: -1,    y: -1,    note: "Reggie Bullock made 1st of 2 Free Throws" },
    { team: "DUKE", points: 2, time: 33.50, unc: 51, duke: 56, x: 9.455, y: 5.015, note: "Rasheed Sulaimon made Layup" },
    { team: "DUKE", points: 3, time: 34.92, unc: 51, duke: 59, x: 8.175, y: 0.929, note: "Seth Curry made 3-pt. Jump Shot" },
    { team: "UNC",  points: 2, time: 35.17, unc: 53, duke: 59, x: 0.518, y: 5.012, note: "RP.J. Hairston made Tip-in" },
    { team: "DUKE", points: 2, time: 36.12, unc: 53, duke: 61, x: 8.916, y: 5.016, note: "Mason Plumlee made Hook Shot" },
    { team: "UNC",  points: 2, time: 36.37, unc: 55, duke: 61, x: 0.518, y: 5.012, note: "RMarcus Paige made Layup" },
    { team: "DUKE", points: 1, time: 36.73, unc: 55, duke: 62, x: -1,    y: -1,    note: "Seth Curry made 1st of 2 Free Throws" },
    { team: "DUKE", points: 1, time: 36.73, unc: 55, duke: 63, x: -1,    y: -1,    note: "Seth Curry made 2nd of 2 Free Throws" },
    { team: "UNC",  points: 2, time: 37.18, unc: 57, duke: 63, x: 0.518, y: 5.012, note: "RP.J. Hairston made Layup" },
    { team: "DUKE", points: 1, time: 37.67, unc: 57, duke: 64, x: -1,    y: -1,    note: "Mason Plumlee made 1st of 2 Free Throws" },
    { team: "DUKE", points: 1, time: 37.67, unc: 57, duke: 65, x: -1,    y: -1,    note: "Mason Plumlee made 2nd of 2 Free Throws" },
    { team: "UNC",  points: 2, time: 38.15, unc: 59, duke: 65, x: 0.518, y: 5.012, note: "RMarcus Paige made Layup" },
    { team: "UNC",  points: 1, time: 38.77, unc: 60, duke: 65, x: -1,    y: -1,    note: "Dexter Strickland made 1st of 2 Free Throws" },
    { team: "UNC",  points: 1, time: 38.77, unc: 61, duke: 65, x: -1,    y: -1,    note: "Dexter Strickland made 2nd of 2 Free Throws" },
    { team: "DUKE", points: 1, time: 39.38, unc: 61, duke: 66, x: -1,    y: -1,    note: "Rasheed Sulaimon made 1st of 2 Free Throws" },
    { team: "DUKE", points: 1, time: 39.38, unc: 61, duke: 67, x: -1,    y: -1,    note: "Rasheed Sulaimon made 2nd of 2 Free Throws" },
    { team: "UNC",  points: 1, time: 39.45, unc: 62, duke: 67, x: -1,    y: -1,    note: "P.J. Hairston made 1st of 2 Free Throws" },
    { team: "DUKE", points: 1, time: 39.50, unc: 62, duke: 68, x: -1,    y: -1,    note: "Mason Plumlee made 1st of 2 Free Throws" },
    { team: "DUKE", points: 1, time: 39.50, unc: 62, duke: 69, x: -1,    y: -1,    note: "Mason Plumlee made 2nd of 2 Free Throws" },
    { team: "UNC",  points: 2, time: 39.70, unc: 64, duke: 69, x: 0.518, y: 5.012, note: "P.J. Hairston made Layup" },
    { team: "DUKE", points: 1, time: 39.72, unc: 64, duke: 70, x: -1,    y: -1,    note: "Quinn Cook made 1st of 2 Free Throws" },
    { team: "DUKE", points: 1, time: 39.72, unc: 64, duke: 71, x: -1,    y: -1,    note: "Quinn Cook made 2nd of 2 Free Throws" },
    { team: "UNC",  points: 1, time: 39.87, unc: 65, duke: 71, x: -1,    y: -1,    note: "P.J. Hairston made 1st of 2 Free Throws" },
    { team: "UNC",  points: 1, time: 39.87, unc: 66, duke: 71, x: -1,    y: -1,    note: "P.J. Hairston made 2nd of 2 Free Throws" },
    { team: "DUKE", points: 1, time: 39.92, unc: 66, duke: 72, x: -1,    y: -1,    note: "Quinn Cook made 1st of 2 Free Throws" },
    { team: "DUKE", points: 1, time: 39.92, unc: 66, duke: 73, x: -1,    y: -1,    note: "Quinn Cook made 2nd of 2 Free Throws" },
    { team: "UNC",  points: 2, time: 39.98, unc: 68, duke: 73, x: 0.518, y: 5.012, note: "RP.J. Hairston made Slam Dunk" }
];


/*---------------------- GRAPHS ----------------------------*/

var albums = [
  {
    album: "Miles Davis - Kind of Blue",
    musicians: [
      "Cannonball Adderley",
      "Paul Chambers",
      "Jimmy Cobb",
      "John Coltrane",
      "Miles Davis",
      "Bill Evans"
    ]
  },{
    album: "John Coltrane - A Love Supreme",
    musicians: [
      "John Coltrane",
      "Jimmy Garrison",
      "Elvin Jones",
      "McCoy Tyner"
    ]
  },{
    album: "The Dave Brubeck Quartet - Time Out",
    musicians: [
      "Dave Brubeck",
      "Paul Desmond",
      "Joe Morello",
      "Eugene Write"
    ]
  },{
    album: "Duke Ellington - Ellington at Newport",
    musicians: [
      "Harry Carney",
      "John Willie Cook",
      "Duke Ellington",
      "Paul Gonsalves",
      "Jimmy Grissom",
      "Jimmy Hamilton",
      "Johnny Hodges",
      "Quentin Jackson",
      "William Anderson",
      "Ray Nance",
      "Russell Procope",
      "John Sanders",
      "Clark Terry",
      "James Woode",
      "Britt Woodman",
      "Sam Woodyar"
    ]
  },{
    album: "The Quintet - Jazz at Massey Hall",
    musicians: [
      "Dizzy Gillespie",
      "Charles Mingus",
      "Charlie Parker",
      "Bud Powell",
      "Max Roach"
    ]
  },{
    album: "Louis Armstrong - The Best of the Hot Five and Hot Seven Recordings",
    musicians: [
      "Lil Hardin Armstrong",
      "Louis Armstrong",
      "Clarence Babcock",
      "Pete Briggs",
      "Mancy Carr",
      "Baby Dodds",
      "Johnny Dodds",
      "Earl Hines",
      "Kid Ory",
      "Don Redman",
      "Fred Robinson",
      "Zutty Singleton",
      "Johnny St. Cyr",
      "Jimmy Strong",
      "John Thomas",
      "Dave Wilborn"
    ]
  },{
    album: "John Coltrane - Blue Trane",
    musicians: [
      "Paul Chambers",
      "John Coltrane",
      "Kenny Drew",
      "Curtis Fuller",
      "Philly Joe Jones",
      "Lee Morgan"
    ]
  },{
    album: "Stan Getz and João Gilberto - Getz/Gilberto",
    musicians: [
      "Milton Banana",
      "Stan Getz",
      "Astrud Gilberto",
      "João Gilberto",
      "Antonio Carlos Jobim",
      "Sebastião Neto"
    ]
  },{
    album: "Charles Mingus - Mingus Ah Um",
    musicians: [
      "Willie Dennis",
      "Booker Ervin",
      "Shafi Hadi",
      "John Handy",
      "Jimmy Knepper",
      "Charles Mingus",
      "Horace Parlan",
      "Dannie Richmond"
    ]
  },{
    album: "Erroll Garner - Concert by the Sea",
    musicians: [
     "Denzil Best",
      "Eddie Calhoun",
      "Erroll Garner"
    ]
  },{
    album: "Miles Davis - Bitches Brew",
    musicians: [
      "Don Alias",
      "Harvey Brooks",
      "Billy Cobham",
      "Chick Corea",
      "Miles Davis",
      "Jack DeJohnette",
      "Dave Holland",
      "Bennie Maupin",
      "John McLaughlin",
      "Airto Moreira",
      "Juma Santos",
      "Wayne Shorter",
      "Lenny White",
      "Larry Young",
      "Joe Zawinul"
    ]
  },{
    album: "Sonny Rollings - Saxophone Colossus",
    musicians: [
      "Tommy Flanagan",
      "Sonny Rollins",
      "Max Roach",
      "Doug Watkins"
    ]
  },{
    album: "Art Blakey and The Jazz Messengers - Moanin’",
    musicians: [
      "Art Blakey",
      "Lee Morgan",
      "Benny Golson",
      "Bobby Timmons",
      "Jymie Merritt"
    ]
  },{
    album: "Clifford Brown and Max Roach",
    musicians: [
      "Clifford Brown",
      "Harold Land",
      "George Morrow",
      "Richie Powell",
      "Max Roach"
    ]
  },{
    album: "Thelonious Monk with John Coltrane - At Carnegie Hall",
    musicians: [
      "Ahmed Abdul-Malik",
      "John Coltrane",
      "Thelonious Monk",
      "Shadow Wilson"
    ]
  },{
    album: "Hank Mobley - Soul Station",
    musicians: [
      "Art Blakey",
      "Paul Chambers",
      "Wynton Kelly",
      "Hank Mobley"
    ]
  },{
    album: "Cannonball Adderly - Somethin’ Else",
    musicians: [
      "Cannonball Adderley",
      "Art Blakey",
      "Miles Davis",
      "Hank Jones",
      "Sam Jones"
    ]
  },{
    album: "Wayne Shorter - Speak No Evil",
    musicians: [
      "Ron Carter",
      "Herbie Hancock",
      "Freddie Hubbard",
      "Elvin Jones",
      "Wayne Shorter"
    ]
  },{
    album: "Miles Davis - Birth of the Cool",
    musicians: [
      "Bill Barber",
      "Nelson Boyd",
      "Kenny Clarke",
      "Junior Collins",
      "Miles Davis",
      "Kenny Hagood",
      "Al Haig",
      "J. J. Johnson",
      "Lee Konitz",
      "John Lewis",
      "Al McKibbon",
      "Gerry Mulligan",
      "Max Roach",
      "Gunther Schuller",
      "Joe Shulman",
      "Sandy Siegelstein",
      "Kai Winding"
    ]
  },{
    album: "Herbie Hancock - Maiden Voyage",
    musicians: [
      "Ron Carter",
      "George Coleman",
      "Herbie Hancock",
      "Freddie Hubbard",
      "Tony Williams"
    ]
  },{
    album: "Vince Guaraldi Trio- A Boy Named Charlie Brown",
    musicians: [
      "Colin Bailey",
      "Monty Budwig",
      "Vince Guaraldi"
    ]
  },{
    album: "Eric Dolphy - Out to Lunch",
    musicians: [
      "Richard Davis",
      "Eric Dolphy",
      "Freddie Hubbard",
      "Bobby Hutcherson",
      "Tony Williams"
    ]
  },{
    album: "Oliver Nelson - The Blues and the Abstract Truth",
    musicians: [
      "George Barrow",
      "Paul Chambers",
      "Eric Dolphy",
      "Bill Evans",
      "Roy Haynes",
      "Freddie Hubbard",
      "Oliver Nelson"
    ]
  },{
    album: "Dexter Gordon - Go",
    musicians: [
      "Sonny Clark",
      "Dexter Gordon",
      "Billy Higgins",
      "Butch Warren"
    ]
  },{
    album: "Sarah Vaughan with Clifford Brown",
    musicians: [
      "Joe Benjamin",
      "Clifford Brown",
      "Roy Haynes",
      "Jimmy Jones",
      "John Malachi",
      "Herbie Mann",
      "Paul Quinichette",
      "Sarah Vaughan",
      "Ernie Wilkins"
    ]
  }
];

/*--------------------- CLOUD WORDS  ----------------------------*/

var tags = [
 ["c#", 601251],
 ["java", 585413],
 ["javascript", 557407],
 ["php", 534590],
 ["android", 466436],
 ["jquery", 438303],
 ["python", 274216],
 ["c++", 269570],
 ["html", 259946],
 ["mysql", 226906],
 ["ios", 216765],
 ["asp.net", 209653],
 ["css", 199932],
 ["sql", 192739],
 ["iphone", 190382],
 [".net", 179522],
 ["objective-c", 172609],
 ["ruby-on-rails", 152860],
 ["c", 129998],
 ["ruby", 97414],
 ["sql-server", 91050],
 ["ajax", 85036],
 ["xml", 84295],
 ["regex", 81991],
 ["arrays", 80728],
 ["wpf", 80062],
 ["asp.net-mvc", 79697],
 ["database", 70777],
 ["linux", 70772],
 ["json", 70396],
 ["django", 68893],
 ["vb.net", 63061],
 ["windows", 62042],
 ["xcode", 60950],
 ["eclipse", 60512],
 ["string", 54249],
 ["facebook", 53745],
 ["html5", 51015],
 ["ruby-on-rails-3", 50109],
 ["r", 49842],
 ["multithreading", 49806],
 ["winforms", 46643],
 ["wordpress", 46632],
 ["image", 45910],
 ["forms", 41984],
 ["performance", 40607],
 ["osx", 40401],
 ["visual-studio-2010", 40228],
 ["spring", 40207],
 ["node.js", 40041],
 ["excel", 39973],
 ["algorithm", 38661],
 ["oracle", 38565],
 ["swing", 38255],
 ["git", 37842],
 ["linq", 37489],
 ["asp.net-mvc-3", 36902],
 ["apache", 35533],
 ["web-services", 35385],
 ["wcf", 35242],
 ["perl", 35138],
 ["entity-framework", 34139],
 ["sql-server-2008", 33827],
 ["visual-studio", 33664],
 ["bash", 33139],
 ["hibernate", 32263],
 ["actionscript-3", 31760],
 ["ipad", 29476],
 ["matlab", 29210],
 ["qt", 28918],
 ["cocoa-touch", 28753],
 ["list", 28556],
 ["cocoa", 28385],
 ["file", 28200],
 ["sqlite", 28114],
 [".htaccess", 28006],
 ["flash", 27908],
 ["api", 27480],
 ["angularjs", 27042],
 ["jquery-ui", 26906],
 ["function", 26485],
 ["codeigniter", 26426],
 ["mongodb", 26223],
 ["class", 25925],
 ["silverlight", 25878],
 ["tsql", 25706],
 ["css3", 25535],
 ["delphi", 25421],
 ["security", 25325],
 ["google-maps", 24919],
 ["vba", 24301],
 ["internet-explorer", 24270],
 ["postgresql", 24236],
 ["jsp", 24224],
 ["shell", 24184],
 ["google-app-engine", 23892],
 ["oop", 23634],
 ["sockets", 23464],
 ["validation", 23429],
 ["unit-testing", 23249]
];
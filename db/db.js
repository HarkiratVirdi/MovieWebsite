// const bcrypt = require("bcryptjs");

// exports.users = [
//   {
//     id: 1,
//     name: "Admin",
// email: "admin@admin.com",
//     password: "Admin@1",
//   },
// ];

exports.movies = [
  {
    id: 1,
    name: "Die Hard",
    // featured: false,
    rating: 60,
    rent: 7,
    buy: 15,
    img_s: "/images/movies/Die_Hard_s.jpg",
    img_l: "/images/movies/Die_Hard_l.jpg",
    isMovie: true,
    genre: "Action, Adventure",
    studio: "Warner Bros",
    runtime: "2:30",
    rated: "PG-13",
    year: 1998,
    synopsis:
      "Facing Christmas 3,000 miles from his estranged wife and two children, New York policeman John McClane flies to L.A. bearing presents and hoping to patch up his marriage. Hans Gruber is in L.A. as well, but he's not there to give out presents. He's there to take: more than $600 million in bearer bonds from the Nakatomi Corporation, where McClane's wife Holly is an executive. When the takeover becomes hostile, it's up to John McClane to take on the terrorists--but not without a sense of humor.",
    trailer_link: "",
    movie_link: "",
    cast: [
      {
        name: "Bruce Willis",
      },
      {
        name: "Alan Rickman",
      },
      {
        name: "Bonnie Bedelia",
      },
    ],
  },
  {
    id: 2,
    name: "The Conjuring",
    // featured: true,
    rating: 70,
    genre: "Horror",
    runtime: "2:00",
    studio: "Warner Bros",
    year: 2013,
    rent: 20,
    rated: "PG-17",
    buy: 12,
    img_s: "/images/movies/Conjuring_s.jpg",
    img_l: "/images/movies/Conjuring_l.jpg",
    isMovie: true,
    synopsis:
      "Buy any quality, get every quality: All qualities up to 4K UHD included with purchase. Before there was Amityville, there was Harrisville. The Conjuring tells the horrifying true story of Ed and Lorraine Warren, world renowned paranormal investigators, who were called to help a family terrorized by a dark presence in a secluded farmhouse. Forced to confront a powerful demonic entity, the Warrens find themselves caught in the most terrifying case of their lives.",
    trailer_link: "",
    movie_link: "",
    cast: [
      {
        name: "Vera Farmiga",
      },
      {
        name: "Patrick Wilson",
      },
      {
        name: "Sterling Jerins",
      },
    ],
  },
  {
    id: 3,
    name: "Wonder Woman",
    // featured: true,
    rating: 89,
    genre: "Action, Fantasy",
    rated: "PG-13",
    studio: "Warner Bros",
    runtime: "1:57",
    year: 2017,
    rent: 10,
    img_s: "/images/movies/Wonder_Woman_s.jpg",
    img_l: "/images/movies/Wonder_Woman_l.jpg",
    isMovie: true,
    synopsis:
      "Buy any quality, get every quality: All qualities up to 4K UHD included with purchase. Before she was Wonder Woman, she was Diana, princess of the Amazons. Fighting alongside man in a war to end all wars, Diana will discover her full powers...and her true destiny. Watch it in Extras+ mode, available on the Vudu mobile app, and experience bonuses synced to the movie, movie trivia, a digital comic, and so much more. See it before you try it in the Free Clips tab.",
    buy: 29.9,
    trailer_link: "",
    movie_link:
      "https://storage.googleapis.com/innate-shell-302903/QQFRMG36V5XL/st23_wonder-woman.1613574655.mp4",
    cast: [
      {
        name: "Gal Gadot",
      },
      {
        name: "Chris Pine",
      },
      {
        name: "Patty Jenkins",
      },
    ],
  },
  {
    id: 4,
    name: "Tenet",
    // featured: true,
    rating: 80,
    rent: 10,
    genre: "Action, Fantasy",
    studio: "Warner Bros",
    runtime: "1:45",
    year: 2020,
    buy: 40,
    rated: "PG-13",
    isMovie: true,
    synopsis:
      "Armed with only one word--Tenet-- and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    img_s: "/images/movies/Tenet_s.jpg",
    img_l: "/images/movies/Tenet_l.jpg",
    trailer_link: "",
    movie_link:
      "https://storage.googleapis.com/innate-shell-302903/CBE7XLLH59M/23m_1613769356327791.mp4",
    cast: [
      {
        name: "John David",
      },
      {
        name: "Robert Pattison",
      },
      {
        name: "Elizabeth Debicki",
      },
    ],
  },
  {
    id: 5,
    name: "Game of Thrones Season 8",
    // featured: true,
    rating: 30,
    runtime: "50",
    rated: "18+",
    rent: 20,
    genre: "Action, Fantasy",
    studio: "HBO",
    year: 2020,
    buy: 80,
    trailer_link: "",
    movie_link: "",
    isMovie: false,
    synopsis:
      "The long winter is here. Throughout seven thrilling episodes, the penultimate Season 8 of this blockbuster hit series focuses on a convergence of armies and attitudes that have been brewing for years.",
    img_s: "/images/movies/GOT_8_s.jpg",
    img_l: "/images/movies/GOT_8_l.jpg",
    cast: [
      {
        name: "Emilia Clarke",
      },
      {
        name: "Peter Dinkins",
      },
      {
        name: "Lena Headey",
      },
    ],
  },
  {
    id: 6,
    name: "The Walking Dead",
    // featured: true,
    rating: 88,
    rent: 50,
    runtime: "45",
    rated: "PG-13",
    buy: 20,
    isMovie: false,
    genre: "Action, Fantasy",
    studio: "AMC",
    year: 2010,
    trailer_link: "",
    movie_link: "",
    synopsis:
      "AMC's THE WALKING DEAD returns for a terrifying and exhilarating nw eason. In this post-apocalyptic world, Rick Grimes and his band of survivors continue their ongoing struggle to survive the threat of walkers as well as the dangers that lurk among the living. In the new season, we find Rick and the group fostering a thriving community in the safe haven of the prison. In this brutal world, the group's home and new way of life will be thoroughly tested, and their struggle to survive has never been so perilous.",
    img_s: "/images/movies/Walking_Dead_s.jpg",
    img_l: "/images/movies/Walking_Dead_l.jpg",
    cast: [
      {
        name: "Andrew Lincoln",
      },
      {
        name: "Norman Reedus",
      },
      {
        name: "Danai Gurira",
      },
    ],
  },
  {
    id: 7,
    name: "The Conjuring 2",
    // featured: true,
    runtime: "1:57",
    rating: 75,
    genre: "Action, Fantasy",
    studio: "Warner Bros",
    year: 2018,
    rent: 8,
    rated: "18+",
    trailer_link: "",
    movie_link: "",
    buy: 17,
    isMovie: true,
    synopsis:
      "The supernatural thriller brings to the screen another real case from the files of renowned demonologists Ed and Lorraine Warren. Reprising their roles, Vera Farmiga and Patrick Wilson star as Lorraine and Ed",
    img_s: "/images/movies/Conjuring2_s.jpg",
    img_l: "/images/movies/Conjuring2_l.jpg",
    cast: [
      {
        name: "Vera Farmiga",
      },
      {
        name: "Patrick Wilson",
      },
      {
        name: "Sterling Jerins",
      },
    ],
  },
  {
    id: 8,
    name: "Kong: Skull Island",
    // featured: false,
    runtime: "2:40",
    rating: 80,
    rent: 10,
    buy: 40,
    genre: "Action, Fantasy",
    studio: "Warner Bros",
    year: 2017,
    rated: "PG-13",
    isMovie: true,
    trailer_link: "",
    movie_link:
      "https://storage.googleapis.com/intense-fiber-303118/BPBGERLCA8EY/st23_kong-skull-island.1613896870.mp4",
    synopsis:
      "When a scientific expedition to an uncharted island awakens titanic forces of nature, a mission of discovery becomes an explosive war between monster and man. Tom Hiddleston, Samuel L. Jackson, Brie Larson, John Goodman and John C. Reilly star in a thrilling and original adventure that reveals the untold story of how Kong became King. FOR 3D ENABLED TVs ONLY.",
    img_s: "/images/movies/Kong_Skull_s.jpg",
    img_l: "/images/movies/Kong_Skull_l.jpg",
    cast: [
      {
        name: "Brie Larsson",
      },
      {
        name: "Tom Hiddleston",
      },
      {
        name: "Samuel L. Jackson",
      },
    ],
  },
  {
    id: 9,
    name: "12 Years of Slave",
    // featured: true,
    rating: 95,
    runtime: "2:50",
    rent: 6,
    buy: 19,
    isMovie: true,
    genre: "Drama, History",
    rated: "18+",
    studio: "Steve McQueen",
    trailer_link: "",
    movie_link: "",
    year: 2013,
    synopsis:
      "From director Steve McQueen, and based on Solomon Northup's astonishing true story, comes this powerful picture. In 1841, Northup (Chiwetel Ejiofor), a free citizen, is kidnapped, stripped of his identity and sold into slavery. Now, he must find the strength to survive in this unflinching story of hope.",
    img_s: "/images/movies/12Years_s.jpg",
    img_l: "/images/movies/12Years_l.jpg",
    cast: [
      {
        name: "Chiwetel Ejiofor",
      },
      {
        name: "Michael Fassbender",
      },
      {
        name: "Brad Pitt",
      },
    ],
  },
  {
    id: 10,
    name: "The Breaking Bad",
    // featured: true,
    rating: 97,
    rent: 10,
    genre: "Sci-Fi, Drama",
    runtime: "40",
    studio: "AMC",
    rated: "+18",
    year: 2005,
    buy: 30,
    trailer_link: "",
    movie_link: "",
    isMovie: false,
    synopsis:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    img_s: "/images/movies/Breaking_Bad_s.jpg",
    img_l: "/images/movies/Breaking_Bad_l.jpg",
    cast: [
      {
        name: "Bryan Cranston",
      },
      {
        name: "Aaron Paul",
      },
      {
        name: "Anna Gunn",
      },
    ],
  },
  {
    id: 11,
    name: "The Game of Thrones: Season 5",
    // featured: true,
    trailer_link: "",
    movie_link: "",
    rated: "18+",
    runtime: "50",
    rating: 94,
    rent: 10,
    buy: 30,
    genre: "Action, Fantasy",
    studio: "HBO",
    year: 2015,
    isMovie: false,
    synopsis:
      "A plethora of compelling storylines play out to their inevitable, often bloody conclusions in Season 5 of GAME OF THRONES. In the wake of the numerous shocking deaths of Season 4, the season opens with a power vacuum that the various players all across Westeros and Essos scramble to fill.",
    img_s: "/images/movies/GOT_4_s.jpg",
    img_l: "/images/movies/GOT_4_l.jpg",
    cast: [
      {
        name: "Emilia Clarke",
      },
      {
        name: "Peter Dinkins",
      },
      {
        name: "Lena Headey",
      },
    ],
  },
  {
    id: 12,
    name: "Arrival",
    // featured: true,
    rated: "PG-13",
    runtime: "1:58",
    rating: 92,
    rent: 50,
    trailer_link: "",
    movie_link: "",
    buy: 30,
    genre: "Sci-Fi, Thriller",
    studio: "Paramount Pictures",
    year: 2016,
    isMovie: true,
    synopsis:
      "Arrival is a 2016 American science fiction film directed by Denis Villeneuve and written by Eric Heisserer.It stars Amy Adams, Jeremy Renner, and Forest Whitaker. The film follows a linguist enlisted by the United States Army to discover how to communicate with extraterrestrial aliens who have arrived on Earth, before tensions lead to war.",
    img_s: "/images/movies/Arrival_s.jpg",
    img_l: "/images/movies/Arrival_l.jpg",
    cast: [
      {
        name: "Amy Adams",
      },
      {
        name: "Jeremy Runner",
      },
      {
        name: "Forest Whitaker",
      },
    ],
  },
];

exports.filterMovie = (id) => {
  return this.movies.filter((singleMovie) => {
    return singleMovie.id === parseInt(id);
  });
};

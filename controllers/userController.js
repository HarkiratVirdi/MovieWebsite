const imagesForLogin = [
  "https://m.media-amazon.com/images/M/MV5BNGIzNWI4MjQtZWI4Zi00N2U4LTg1MWMtNmRmYmIxOWVjZTkwXkEyXkFqcGdeQWFybm8@._V1_QL40_UX1000_CR0,0,1000,563_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNWMxOGUxN2MtMTBiMi00MWM3LTgzZTItZTYwZTZmYTQ0ZjQ0XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_QL40_UX1000_CR0,0,1000,563_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZmE1ZTgwZTEtMzU3YS00MWYzLTk3NzctZDMwZjQxNmRhMGY0XkEyXkFqcGdeQWFybm8@._V1_QL40_UX1000_CR0,0,1000,563_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTFhOGJjZjUtOWM4Ny00ZWE0LWFlMDUtMDAyMTc2MTcxMmM3XkEyXkFqcGdeQWFybm8@._V1_QL40_UX1000_CR0,0,1000,563_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMDI0NmYxZmMtN2EyNi00YzMwLTgzNWEtYjY4NmIxMjlmMzJhXkEyXkFqcGdeQXVyNzE3ODQxNjU@._CR212,55,777,437.jpg",
];

module.exports.loginUser = (req, res) => {
  const imageNum = Math.floor(Math.random() * 5);
  const image = imagesForLogin[imageNum];

  console.log(image);

  res.render("login", { image: image });
};
module.exports.registerUser = (req, res) => {
  const imageNum = Math.floor(Math.random() * 5);
  const image = imagesForLogin[imageNum];

  res.render("register", { image: image });
};

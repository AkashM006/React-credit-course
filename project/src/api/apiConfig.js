const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "9e1656334718d423376b9090f98dea88",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
